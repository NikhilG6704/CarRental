
🚗 Car Rental Platform (MERN)

<div align="center">

<!-- 👆 REPLACE THIS URL with your banner_car_image.png link after uploading to GitHub -->

<p>
A modern, full-stack car rental solution built for speed and scalability.
<br />
Features a dedicated <strong>Owner Dashboard</strong>, real-time <strong>Booking System</strong>, and optimized media handling via <strong>ImageKit</strong>.
</p>

<!-- Badges -->

<p>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/MERN-Stack-000000%3Fstyle%3Dfor-the-badge%26logo%3Dmongodb" alt="MERN Stack" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Vite-646CFF%3Fstyle%3Dfor-the-badge%26logo%3Dvite%26logoColor%3Dwhite" alt="Vite" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite" alt="Tailwind CSS" />
<img src="https://www.google.com/search?q=https://img.shields.io/badge/ImageKit-0055FF%3Fstyle%3Dfor-the-badge%26logo%3Dimagekit%26logoColor%3Dwhite" alt="ImageKit" />
</p>

<p>
<a href="#-features">Features</a> •
<a href="#-tech-stack">Tech Stack</a> •
<a href="#-getting-started">Installation</a> •
<a href="#-project-structure">Structure</a>
</p>

</div>

⚡ Features

👤 For Users

Browse & Filter: Advanced search to filter cars by type, fuel, and price.

Seamless Booking: Interactive calendar to select rental dates.

User Dashboard: View booking history and status in MyBookings.

Responsive Design: Fully optimized for mobile and desktop.

🛡️ For Car Owners (Admin)

Fleet Management: Complete CRUD operations for cars (AddCar, ManageCars).

Booking Control: Approve or reject incoming booking requests.

Analytics: Dashboard overview of active rentals.

Media Upload: Integrated ImageKit support for high-quality car images.

📸 Screenshots

Landing Page

Car Details





Owner Dashboard

Add New Car





🛠️ Tech Stack

Frontend: React.js (Vite), Tailwind CSS, Context API.

Backend: Node.js, Express.js.

Database: MongoDB (Mongoose).

Storage: ImageKit (Cloud image optimization).

Authentication: JWT (JSON Web Tokens).

🚀 Getting Started

Follow these steps to set up the project locally.

Prerequisites

Node.js (v16+)

MongoDB (Local or Atlas URL)

ImageKit Account (Public/Private keys)

1. Clone the Repo

git clone [https://github.com/YOUR_USERNAME/car-rental-project.git](https://github.com/YOUR_USERNAME/car-rental-project.git)
cd car-rental-project


2. Backend Setup (/server)

cd server
npm install


Create a .env file in the server folder:

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint


Start the backend:

npm run server


3. Frontend Setup (/client)

Open a new terminal window.

cd client
npm install


Create a .env file in the client folder:

VITE_API_URL=http://localhost:4000


Start the frontend:

npm run dev


📂 Project Structure

├── client/                 # Frontend Application (Vite + React)
│   ├── src/
│   │   ├── assets/         # Icons & Static Images
│   │   ├── components/     # Reusable UI (Navbar, Hero, Footer)
│   │   │   └── owner/      # Admin specific components
│   │   ├── context/        # AppContext (Global State)
│   │   ├── pages/          # Full Page Views
│   │   │   ├── Home.jsx
│   │   │   ├── CarDetails.jsx
│   │   │   └── owner/      # Admin Pages (Dashboard, AddCar)
│   └── ...
│
└── server/                 # Backend API (Node + Express)
    ├── configs/            # DB & ImageKit Configs
    ├── controllers/        # Logic (Booking, Owner, User)
    ├── middleware/         # Auth & Multer
    ├── models/             # DB Schemas (Car, User, Booking)
    ├── routes/             # API Endpoints
    └── server.js           # Entry Point


🤝 Contributing

Fork the project

Create your feature branch (git checkout -b feature/NewFeature)

Commit your changes (git commit -m 'Add NewFeature')

Push to the branch (git push origin feature/NewFeature)

Open a Pull Request

<div align="center">
Made with ❤️ by <a href="https://www.google.com/search?q=https://github.com/YOUR_USERNAME">YOUR NAME</a>
</div>
