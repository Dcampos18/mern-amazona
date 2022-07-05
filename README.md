# MERN AMAZONA

![amazona](/frontend/public/images/amazona.jpg)

Welcome to my React and Node project to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me to build an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Demo Website

- 👉 Heroku : [https://mern-amazona-dc.herokuapp.com/](https://react-amazona.herokuapp.com)

## Technologies, Skills and Tools used to build this e-commerce website

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Context API: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku
- API: Google Maps, PayPal, Cloudinary, Mailgun

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/Dcampos18/mern-amazona.git
$ cd mern-amazona
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/amazona
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/seed
- It returns admin email and password and 4 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

## Support & Contact

- Contact Me: [Daniel Campos](mailto:daniel.campos18@outlook.es)
