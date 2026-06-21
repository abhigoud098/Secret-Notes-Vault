```

# 🔐 Secret Notes Vault

A secure full-stack note management platform built with Node.js, Express.js, MongoDB, and EJS. The application enables authenticated users to create and manage private notes while providing administrators with advanced monitoring and management capabilities.

## 🚀 Overview

Secret Notes Vault is a role-based note management system that combines secure authentication, note privacy, and administrative controls. Users can safely store personal notes, while administrators can oversee platform activity through a dedicated dashboard.

---

## ✨ Key Features

### 🔑 Authentication & Authorization

* User Registration and Login
* JWT Authentication
* Cookie-Based Session Management
* Protected Routes
* Role-Based Access Control (User/Admin)

### 📝 Notes Management

* Create Notes
* Read Notes
* Update Notes
* Delete Notes
* User-Specific Note Access
* Secure MongoDB Storage

### 👨‍💼 Admin Dashboard

* View All Registered Users
* Monitor Total User Count
* View All Notes Across the Platform
* Delete Any Note When Required
* Manage Platform Activity
* Access Administrative Statistics

### 🎨 User Experience

* Responsive Design
* Dynamic Rendering with EJS
* Clean Navigation and Layout
* Mobile-Friendly Experience

---

## 🛠️ Tech Stack

### Frontend
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Security

* JWT (JSON Web Tokens)
* Cookies
* Authentication Middleware

---

## 📂 Project Structure

```text
Backend/
│
├── controller/
├── middleware/
├── model/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── services/
├── views/
├── connect.js
└── index.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd secret-notes-vault
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run Application

Development:

```bash
nodemon index.js
```

Production:

```bash
node index.js
```

---

## 🔒 Security Features

* JWT-Based Authentication
* Cookie-Based User Sessions
* Route Protection Middleware
* User-Level Data Isolation
* Role-Based Authorization
* Secure Access to Administrative Routes

---

## 📚 Learning Outcomes

This project helped me gain practical experience in:

* Full-Stack Web Development
* Authentication and Authorization
* JWT and Cookie Handling
* Express.js Backend Architecture
* MongoDB Data Modeling
* Mongoose ODM
* Middleware Development
* CRUD Operations
* Server-Side Rendering with EJS
* Role-Based Access Control (RBAC)
* Admin Dashboard Development

---

## 📈 Admin Functionalities

The Admin Panel provides:

* Total User Monitoring
* User Management Overview
* Complete Notes Visibility
* Note Moderation Capabilities
* Platform Statistics Dashboard

---

## 🔮 Future Enhancements

* Password Hashing with Bcrypt
* Search and Filter Notes
* Categories and Tags
* Dark Mode
* Rich Text Editor
* File Attachments
* Email Verification
* Password Reset Functionality
* Cloud Deployment
* CI/CD Integration

---

## 📸 Screenshots

Add screenshots for:

* Login Page
* Registration Page
* User Dashboard
* Notes Management Page
* Admin Dashboard

---

## 👨‍💻 Author

**Abhishek Goud**

---

## 📄 License

This project is created for educational, learning, and portfolio purposes.

⭐ If you found this project useful, consider giving it a star on GitHub.

```
