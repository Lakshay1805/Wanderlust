# 🌍 WanderLust

WanderLust is a full-stack travel listing web application inspired by platforms like Airbnb.  
It is built using **Node.js, Express, MongoDB, and EJS**, with a primary focus on backend development, authentication, and clean application structure.

This project demonstrates real-world usage of **Passport.js** for authentication and server-side rendering using EJS templates.

---

## 🚀 Features

- User authentication using Passport.js (Local Strategy)
- Session-based login and logout
- Authorization for protected routes
- Create, edit, and delete travel listings
- View listings by category
- Server-side rendering with EJS
- MongoDB Atlas integration

---

## 🛠 Tech Stack

### Frontend
- EJS
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication & Sessions
- Passport.js
- passport-local
- express-session
- connect-mongodb-session

### Utilities
- dotenv

---


## 📂 Project Structure

WanderLust/
├── routes/ # Express routes
├── controllers/ # Route logic
├── models/ # Mongoose schemas
├── views/ # EJS templates
├── public/ # Static files (CSS, images)
├── db/ # Database configuration
├── index.js # Application entry point
├── .env # Environment variables (ignored)
└── README.md
