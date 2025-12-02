# 🚗 Car Rental System (MERN Stack)

<div align="center">

  ![Project Banner](https://via.placeholder.com/800x200.png?text=Car+Rental+Platform+Banner)
  <p>
    A robust, full-stack Car Rental application built with the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). 
    Features a comprehensive user booking system and a dedicated Owner Dashboard for fleet management, powered by <strong>ImageKit</strong> for optimized media handling.
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Structure</a>
  </p>

</div>

---

## 🌟 Features

### 👤 User Panel
* **Browse Fleet:** View all available cars with advanced filtering.
* **Car Details:** Detailed view of car specifications and pricing.
* **Booking System:** Seamless booking process for selected dates.
* **User Dashboard:** View booking history and status via `MyBookings`.
* **Authentication:** Secure login and registration.

### 🛡️ Admin/Owner Panel
* **Dashboard:** specialized layout for car owners.
* **Fleet Management:** Add, edit, or delete cars (`AddCar`, `ManageCars`).
* **Booking Management:** View and update the status of incoming bookings (`ManageBookings`).
* **Image Integration:** Upload car images directly to ImageKit.

---

## 📸 Screenshots

| Home Page | Car Details |
|:---------:|:-----------:|
| ![Home](https://via.placeholder.com/400x200?text=Home+Page+Screenshot) | ![Details](https://via.placeholder.com/400x200?text=Car+Details+Screenshot) |

| Owner Dashboard | Add New Car |
|:---------------:|:-----------:|
| ![Dashboard](https://via.placeholder.com/400x200?text=Dashboard+Screenshot) | ![Add Car](https://via.placeholder.com/400x200?text=Add+Car+Form) |

---

## 🛠 Tech Stack

**Frontend:**
* [React](https://reactjs.org/) (Vite)
* [Tailwind CSS/CSS](https://tailwindcss.com/) (Custom styling)
* Context API for State Management

**Backend:**
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) (Mongoose)

**Tools & Services:**
* **ImageKit:** Cloud-based image management and optimization.
* **JWT:** Secure authentication.
* **Multer:** Middleware for handling file uploads.
* **Vercel:** Deployment (configured via `vercel.json`).

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v14 or higher)
* MongoDB installed locally or a MongoDB Atlas URI
* ImageKit Account (for API keys)

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/car-rental-project.git](https://github.com/your-username/car-rental-project.git)
cd car-rental-project
