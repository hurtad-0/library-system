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
```

## 📦 Install Dependencies

### 1. Install root dependencies (e.g. scripts and tools):

```bash
npm install
```
### 2. Install frontend and backend dependencies:
```bash
npm run install:all
```

---
## ▶️ Run the Project (Development Mode)

### Start both the frontend and backend with a single command:

```bash
npm run dev

Frontend: runs on http://localhost:5173

Backend (API): runs on http://localhost:3000
```

---


## 🐳 PostgreSQL with Docker

Start the database with Docker:

```bash
docker-compose up -d
cd library-service
npx prisma migrate dev --name init
npx prisma generate
```

## 🔑 Necessary environment variables:

```bash
cd library-service
echo. > .env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/library_db"
PORT=3000
```

## 📁 Project Structure

```bash
library-system/
├── library-service/     # React frontend (UI, components, routes)
├── library-client/      # NestJS backend (API, services, database)
├── package.json   # Root scripts (dev, install:all, etc.)
└── README.md
```

## 🧰 Built With
```bash
React + Vite

NestJS

PostgreSQL (recommended DB)

TypeORM or Prisma (ORM options)

Concurrently (to run front & back together)
```



## 📌 Notes
```bash
This is a personal project for educational and portfolio purposes.

Future features may include authentication, admin dashboard, and deployment setup.
```


## 🧑‍💻 Author

#### Developed by hurtad-0


## 📄 License

This project is open source and available under the MIT License.