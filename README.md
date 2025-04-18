# 💸 E-Banking website (Full Stack)

A modern, full stack **E-Banking Management System** developed using **React + Express + Node.js + MySQL**. This platform allows admins to manage customer accounts and transactions, while customers can log in to transfer funds and manage their Fixed Deposits (FDs).

---
## 🚀 Features

### 🧑‍💼 Admin Panel
- JWT-based secure admin login.
- Add or delete customers
- Deposit or withdraw money
- View all transactions
- Dashboard with:
  - Total customers
  - Total number of transactions
  - Today’s transaction summary

### 👥 Customer Panel
- Customer login via unique credentials given by admin
- Transfer money to other registered customers
- View transaction history
- Manage Fixed Deposits:
  - Add a new FD with maturity period
  - Break FD early (penalty applied)
  - Automatically mature FD (no penalty)

### 💻 Frontend
- Built with **React**, using **Tailwind CSS** and **Bootstrap**
- Separate interfaces for Admin and Customer
- Responsive, clean design
- Real-time data from backend via APIs

### 🔧 Backend
- Developed with **Node.js** and **Express.js**
- Connected to **MySQL** for persistent data
- Uses **JWT** for secure authentication
- RESTful APIs for customer and admin operations
- Business logic for FD interest, penalties, and transfers

---

## 🛠️ Tech Stack

| Layer        | Technology                     |
|--------------|-------------------------------|
| Frontend     | React, Tailwind CSS, Bootstrap |
| Backend      | Node.js, Express.js            |
| Database     | MySQL                          |
| Auth         | JSON Web Tokens (JWT)          |
| Server Tools | Vite, MySQL Workbench          |

---

## 🚀 Installation & Setup
### ⚡ Prerequisites
Make sure you have the following installed:
- 🟢 **Node.js** (latest LTS version)
- 🛢 **MySQL Server**
- 📦 **npm or yarn package manager**

### 📂 Clone the Repository
```bash
git clone https://github.com/visvjit09/E-Banking-.git
cd e_Banking_full_stack

### 🏗 Backend Setup
1️⃣ Navigate to the backend directory:
   ```sh
   cd server
   ```
2️⃣ Install dependencies:
   ```sh
   npm install
   ```
3️⃣ Configure environment variables:
   - Create a `.env` file and set up the database credentials and JWT secret.
   ```sh
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=banking_db
   JWT_SECRET=your_secret_key
   ```
   
4️⃣ Ensure MySQL is running with proper tables (admin, customers, transactions, fds)

5️⃣ Start the backend server:
   ```sh
   npm start
   ```

### 🎨 Frontend Setup
1️⃣ Navigate to the frontend directory:
   ```sh
   cd ../my-crud-app
   ```
2️⃣ Install dependencies:
   ```sh
   npm install
   ```
3️⃣ Start the frontend:
   ```sh
   npm run dev
   ```  

## 📝 License
This project is licensed under the **MIT License**.

## 📞 Contact
Visvjit Kumar Singh
📧 Email: visvjitsingh9852@gmail.com
🌐 GitHub: @visvjit09
🎓 B.Tech, IIIT Vadodara