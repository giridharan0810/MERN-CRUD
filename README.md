User Management CRUD App (MERN Stack)

A full-stack User Management System built using the MERN stack (MongoDB, Express, React, Node.js) with Axios for API communication.
It allows you to Create, Read, Update, and Delete user details easily through a modern, responsive UI.

✨ Features

✅ Add new users
✅ Edit existing users
✅ Delete users
✅ Display all users in a responsive table
✅ RESTful API using Express and MongoDB
✅ Clean and modern UI using React + Tailwind CSS
✅ Modular structure for scalability

🛠️ Tech Stack
Layer	Technology
Frontend	React.js, Axios, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (Mongoose)
API Testing	Postman
Package Manager	npm or yarn
📁 Folder Structure
project/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── api/axios.js
│   │   ├── components/
│   │   │   ├── UserForm.jsx
│   │   │   ├── UserTable.jsx
│   │   ├── pages/Users.jsx
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Node.js + Express Backend
│   ├── config/Config.js
│   ├── models/User.js
│   ├── routes/userRoutes.js
│   ├── controllers/userController.js
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/user-crud-app.git
cd user-crud-app

2️⃣ Setup backend
cd server
npm install


Create a .env file in the server folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the backend:

npm start

3️⃣ Setup frontend
cd ../client
npm install
npm start


Now the app runs at:
Frontend: http://localhost:5173

Backend: http://localhost:5000/api/users

📡 API Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create a new user
PUT / PATCH	/api/users/:id	Update an existing user
DELETE	/api/users/:id	Delete a user
💻 Sample User Object
{
  "name": "Giri",
  "age": 23,
  "phone": "9876543210",
  "email": "giri@example.com"
}

🧠 Learnings

CRUD operations in a MERN stack

REST API design using Express

Axios integration in React

Component-based state management

Handling forms and controlled inputs

Tailwind CSS for styling


💪 Author
  G I R I

💪 Author

G I R I
