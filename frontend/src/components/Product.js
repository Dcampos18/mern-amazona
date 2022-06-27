import { useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating.js'
import { Store } from '../Store.js';

function Product(props) {
    const { product } = props;
    const { state, dispatch: cxtDispatch } = useContext(Store);
    const { cart: { cartItems } } = state;

    const addToCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('Sorry, Product Quantity is Out of Stock');
            return;
        }
        cxtDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
    }

    return (
        <Card key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="card-img-top" />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                <Card.Text>$ {product.price}</Card.Text>
                {product.countInStock === 0 ? <Button disabled variant="light">Out of Stock</Button> :
                    <Button onClick={() => addToCartHandler(product)}>Add to Cart</Button>
                }

            </Card.Body>
        </Card>
    )
}
export default Product;