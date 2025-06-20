# library-system
A Library Management System (LMS) that helps libraries manage collections, track loans, and monitor resource availability. Users can search, reserve materials, renew loans, and check account status. It also generates reports and statistics to assist librarians in making informed decisions about resource management.
# 📚 Library System

A **Library Management System (LMS)** built with **React (Vite)** for the frontend and **NestJS** for the backend.  
This application helps libraries manage their collections, track loans and returns, and monitor resource availability.

### ✨ Features

- 📖 Catalog and manage books and materials  
- 🔎 Search and reserve items  
- 🔁 Renew loans and track due dates  
- 👤 Manage user accounts  
- 📊 Generate reports and usage statistics  
- 🔐 Role-based access (admin / user) *(optional enhancement)*

---

## 🚀 Getting Started

### 🔧 Clone the Repository

```bash
git clone https://github.com/hurtad-0/library-system.git
cd library-system

📦 Install Dependencies
1. Install root dependencies (e.g. scripts and tools):

npm install

2. Install frontend and backend dependencies:

npm run install:all

▶️ Run the Project (Development Mode)

Start both the frontend and backend with a single command:

npm run dev

Frontend: runs on http://localhost:5173

Backend (API): runs on http://localhost:3000

📁 Project Structure

library-system/
├── library-service/     # React frontend (UI, components, routes)
├── library-client/      # NestJS backend (API, services, database)
├── package.json   # Root scripts (dev, install:all, etc.)
└── README.md

🧰 Built With
React + Vite

NestJS

PostgreSQL (recommended DB)

TypeORM or Prisma (ORM options)

Concurrently (to run front & back together)

📌 Notes

This is a personal project for educational and portfolio purposes.

Future features may include authentication, admin dashboard, and deployment setup.

🧑‍💻 Author

Developed by hurtad-0

📄 License

This project is open source and available under the MIT License.
