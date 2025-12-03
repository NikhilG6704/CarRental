# 🚗 **Car Rental – Full-Stack Car Booking Platform**

A modern, responsive, and feature-rich **Car Rental Web Application** built using **React.js**, **Tailwind CSS**, **Node.js**, **Express**, **MongoDB**, and **ImageKit** for image management.
Deployed on **Vercel** with a clean and intuitive UI for customers & car owners.

🌐 **Live Website:** [https://car-rental-bice-nine.vercel.app](https://car-rental-bice-nine.vercel.app)

---

## 📸 **Screenshots**

### 🏠 Home Page
<a href="https://drive.google.com/file/d/1sqgG2wAt-s0C1fJ-dfwN6Qn8si3dsTKt/view?usp=sharing">
  <img src="https://drive.google.com/uc?export=view&id=1sqgG2wAt-s0C1fJ-dfwN6Qn8si3dsTKt" width="700" />
</a>

### 🚘 Cars Listing
<a href="https://drive.google.com/file/d/1GUPaWzICehbC9Klsy0o4yuVtEaawm03C/view?usp=sharing">
  <img src="https://drive.google.com/uc?export=view&id=1GUPaWzICehbC9Klsy0o4yuVtEaawm03C" width="700" />
</a>

### 🚗 Car Details
<a href="https://drive.google.com/file/d/19-tdNcgTH3Q4T_ZoiYySMA5vx2tEHQOf/view?usp=sharing">
  <img src="https://drive.google.com/uc?export=view&id=19-tdNcgTH3Q4T_ZoiYySMA5vx2tEHQOf" width="700" />
</a>

### 📊 Owner Dashboard
<a href="https://drive.google.com/file/d/1D4hfyhyiKgvzBRf-TjakitA6DE4cz-KH/view?usp=sharing">
  <img src="https://drive.google.com/uc?export=view&id=1D4hfyhyiKgvzBRf-TjakitA6DE4cz-KH" width="700" />
</a>

### ➕ Add Car Page
<a href="https://drive.google.com/file/d/1EwYdQUf7jYG6qaxCNBnZo4wV_ZIzpJiq/view?usp=sharing">
  <img src="https://drive.google.com/uc?export=view&id=1EwYdQUf7jYG6qaxCNBnZo4wV_ZIzpJiq" width="700" />
</a>


---

## ✨ **Features**

### 👤 **User Features**

* Browse cars by type, location, or availability
* View detailed car information
* Book cars instantly with clear pricing
* View upcoming & past bookings
* Fully responsive mobile-first UI

### 🧑‍💼 **Owner (Admin) Features**

* Owner dashboard with analytics
* Add / edit / delete cars
* Manage bookings
* View number of users, cars, bookings
* Image uploads via **ImageKit**

### ⚙️ **Technical Features**

* Secure authentication (JWT)
* API routing with Express
* Image upload via ImageKit + multer
* Reusable React components
* Context API for state management
* Optimized & deployed on Vercel

---

## 🚀 **Tech Stack**

### **Frontend**

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🔄 Context API
* 🌐 Vercel Hosting

### **Backend**

* 🟢 Node.js
* 🚏 Express.js
* 🍃 MongoDB + Mongoose

### **Image Handling**

* 🖼️ ImageKit
* 📤 Multer

---

## 📁 **Project Structure**

```
CarRental/
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   ├── favicon.svg
│   │   └── vite.svg
│   ├── src
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── *.svg / *.png (icons & images)
│   │   ├── components
│   │   │   ├── Banner.jsx
│   │   │   ├── CarCard.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── owner/
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── NavbarOwner.jsx
│   │   ├── context
│   │   │   └── AppContext.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Cars.jsx
│   │   │   ├── CarDetails.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── owner/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── AddCar.jsx
│   │   │       ├── ManageCars.jsx
│   │   │       ├── ManageBookings.jsx
│   ├── vercel.json
│   └── vite.config.js
│
└── server
    ├── configs
    │   ├── db.js
    │   └── imageKit.js
    ├── controllers
    │   ├── bookingController.js
    │   ├── ownerController.js
    │   └── userController.js
    ├── middleware
    │   ├── auth.js
    │   └── multer.js
    ├── models
    │   ├── Booking.js
    │   ├── Car.js
    │   └── User.js
    ├── routes
    │   ├── bookingRoutes.js
    │   ├── ownerRoutes.js
    │   └── userRoutes.js
    ├── server.js
    └── vercel.json
```

---

## ⚙️ **Environment Variables**

### **Client (.env)**

```
VITE_API_URL=<your-backend-url>
VITE_IMAGEKIT_PUBLIC_KEY=...
VITE_IMAGEKIT_URL_ENDPOINT=...
```

### **Server (.env)**

```
MONGO_URI=...
JWT_SECRET=...
IMAGEKIT_PUBLIC_KEY=...
IMAGEKIT_PRIVATE_KEY=...
IMAGEKIT_URL_ENDPOINT=...
```

---

## 🛠️ **Setup & Installation**

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd CarRental
```

### 2️⃣ Install dependencies

**Client**

```bash
cd client
npm install
npm run dev
```

**Server**

```bash
cd server
npm install
npm start
```

---

## 📡 **API Overview**

* `POST /api/user/login` – User login
* `POST /api/user/register` – User registration
* `GET /api/booking/user` – Get user bookings
* `POST /api/owner/add-car` – Add car
* `GET /api/owner/cars` – Fetch cars
* `GET /api/cars` – Public car listing

---

## 🤝 **Contributing**

Contributions are welcome!
Feel free to fork the repo & submit a pull request.

---

## ⭐ **Show Support**

If you liked this project:
⭐ **Star the repository** — it helps a lot!
