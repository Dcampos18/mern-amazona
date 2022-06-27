import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Daniel Campos',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }
    ],
    products: [
        {
            //_id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 10,
            description: 'High Quality Product'
        },
        {
            //_id: '2',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 0,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Product'
        },
        {
            //_id: '3',
            name: 'Adidas Slim Shirt',
            slug: 'adidas-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Adidas',
            rating: 3.5,
            numReviews: 10,
            description: 'High Quality Product'
        },
        {
            //_id: '4',
            name: 'Nike Fit Pant',
            slug: 'nike-fit-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Nike',
            rating: 2.6,
            numReviews: 10,
            description: 'High Quality Product'
        }
    ]
}

export default data;