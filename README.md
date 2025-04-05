📝 To-Do App with Auth (Node.js + MongoDB)
This is a simple To-Do API built using Node.js, Express, and MongoDB.

🔐 Features
✅ User Registration & Login with JWT Authentication

🔐 Protected Routes – Only logged-in users can manage their todos

🗒️ Create, Read, Update, Delete (CRUD) Todos

🧍 Each user has separate todos

📦 Clean code structure with MVC pattern

🛠 Tech Stack
Node.js

Express.js

MongoDB with Mongoose

JWT for secure auth

Bcrypt for password hashing


🔐 Auth Routes (/api/auth)
POST    /register     → Register a new user
POST    /login        → Login user and get JWT token


Todo Routes (/api/todos)
 Protected Routes – require JWT token in header

POST    /             → Create a new todo
GET     /             → Get all todos for logged-in user
GET     /:id          → Get a single todo by ID
PUT     /:id          → Update a todo by ID
DELETE  /:id          → Delete a todo by ID

