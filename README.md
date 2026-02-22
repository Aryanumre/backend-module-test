# Backend Module Test Project

## 📌 Overview
This is a modular Node.js backend application built using Express and MongoDB.  
It implements JWT-based authentication with proper password hashing and clean architecture structure.

The project follows best practices such as:
- Modular folder structure
- Environment variable usage
- Password encryption using bcrypt
- JWT authentication
- Proper error handling
- Standardized API responses

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## 📂 Project Structure

src/
│
├── config/        → Database configuration  
├── controllers/   → Route controllers  
├── middleware/    → Auth & error middleware  
├── models/        → Mongoose models  
├── routes/        → API routes  
├── services/      → Business logic  
├── utils/         → Helper functions  
│
server.js          → Entry point  

---

## 🔐 Authentication

- Passwords are hashed using bcrypt before storing in the database.
- JWT tokens are generated during login.
- Protected routes require Bearer token in Authorization header.

---

## 📡 API Endpoints

### 1️⃣ Register User
**POST** `/api/auth/register`

```json
{
  "name": "Tanmay",
  "email": "test@gmail.com",
  "password": "123456"
}
```
### 2️⃣ Login User

POST /api/auth/login

```Body:
{
  "email": "test@gmail.com",
  "password": "123456"
}

Returns JWT token.
```
3️⃣ Get Profile (Protected Route)

GET /api/auth/profile
```
Header:
Authorization: Bearer <token>
```
⚙️ Environment Variables

Create a .env file and add:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### ▶️ Run Locally
```
Install dependencies:

npm install
```
### Start server:
```
npm start
```
### 🌍 Deployment

The project is deployed on Railway.

## 👤 Author

*Aryan Umre*
