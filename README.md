🚗 Car Rental System (MERN Stack)

<div align="center">

<img src="client/src/assets/homepage.png" alt="Car Rental Homepage" width="100%" />

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

🌟 Features

👤 User Panel

Browse Fleet: View all available cars with advanced filtering.

Car Details: Detailed view of car specifications and pricing.

Booking System: Seamless booking process for selected dates.

User Dashboard: View booking history and status via MyBookings.

Authentication: Secure login and registration.

🛡️ Admin/Owner Panel

Dashboard: Specialized layout for car owners.

Fleet Management: Add, edit, or delete cars (AddCar, ManageCars).

Booking Management: View and update the status of incoming bookings (ManageBookings).

Image Integration: Upload car images directly to ImageKit.

📸 Screenshots

Home Page

Car Details

<img src="client/src/assets/homepage.png" width="100%" />

<img src="https://www.google.com/search?q=https://via.placeholder.com/400x200%3Ftext%3DCar%2BDetails%2BScreenshot" width="100%" />

Owner Dashboard

Add New Car

<img src="https://www.google.com/search?q=https://via.placeholder.com/400x200%3Ftext%3DDashboard%2BScreenshot" width="100%" />

<img src="https://www.google.com/search?q=https://via.placeholder.com/400x200%3Ftext%3DAdd%2BCar%2BForm" width="100%" />

🛠 Tech Stack

Frontend:

React (Vite)

Tailwind CSS (Custom styling)

Context API for State Management

Backend:

Node.js

Express.js

MongoDB (Mongoose)

Tools & Services:

ImageKit: Cloud-based image management and optimization.

JWT: Secure authentication.

Multer: Middleware for handling file uploads.

Vercel: Deployment (configured via vercel.json).

🚀 Getting Started

Follow these steps to set up the project locally.

Prerequisites

Node.js (v14 or higher)

MongoDB installed locally or a MongoDB Atlas URI

ImageKit Account (for API keys)

1. Clone the Repository

git clone [https://github.com/NikhilG6704/CarRental.git](https://github.com/NikhilG6704/CarRental.git)
cd CarRental


2. Backend Setup

Navigate to the server folder and install dependencies:

cd server
npm install


Create a .env file in server/ with your credentials:

PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint


Start the server:

npm run server


3. Frontend Setup

Open a new terminal, navigate to the client folder:

cd client
npm install


Create a .env file in client/:

VITE_API_URL=http://localhost:4000


Start the React app:

npm run dev


📂 Project Structure

<details>
<summary>Click to view file structure</summary>

├── client/
│   ├── src/
│   │   ├── assets/          # SVG icons & PNGs (banner, cars)
│   │   ├── components/      # UI Components (Navbar, CarCard)
│   │   │   └── owner/       # Owner specific components
│   │   ├── context/         # AppContext.jsx
│   │   ├── pages/           # Application Pages
│   │   │   ├── Home.jsx
│   │   │   ├── CarDetails.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── owner/       # Dashboard, AddCar, ManageBookings
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── vercel.json
│
└── server/
    ├── configs/             # db.js, imageKit.js
    ├── controllers/         # Logic for User, Owner, Booking
    ├── middleware/          # auth.js, multer.js
    ├── models/              # Mongoose Models (Car, User, Booking)
    ├── routes/              # API Routes
    ├── server.js
    └── vercel.json


</details>

<div align="center">
Made with ❤️ by <a href="https://www.google.com/search?q=https://github.com/NikhilG6704">NikhilG6704</a>
</div>
