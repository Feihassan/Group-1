# 🏙️ Dream Apartments Finder

**Dream Apartments Finder** is a modern, responsive React web app for discovering and managing apartments in Nairobi. Users can browse listings, add new apartments, and mark them as booked  all powered by a local JSON Server backend.

---

## ✅ Features

- ✅ Browse available apartments   
- ✅ Add a new apartment through a controlled form  
- ✅ Mark apartments as **booked**  
- ✅ Dynamic client-side routing with React Router  
- ✅ Styled using Tailwind CSS  
- ✅ Mock backend using `json-server`

---

## 🗂️ Project Structure

dream-apartments/
│
├── public/ # Static assets (images, favicon)
│ └── images/
│
├── src/
│ ├── components/
│ │ ├── ApartmentCard.jsx
│ │ ├── AddApartmentForm.jsx
│ │ ├── ListingPage.jsx
│ │ ├── Home.jsx
│ │ └── NavBar.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── db.json # JSON Server mock database
├── package.json
├── tailwind.config.js
└── vite.config.js

## Setup Instructions

### 📦 1. Install Dependencies

npm install
 2. Start the Frontend (Vite + React)
##bash
npm run dev
Open in browser: http://localhost:5173

 3. Start the Backend (JSON Server)
##bash
npx json-server --watch db.json --port 3001
API endpoint: http://localhost:3001/apartments
 ## Tech Stack
Layer	Tools / Libraries
Frontend	React, Vite, Tailwind CSS
Routing	React Router DOM
Backend	JSON Server (mock REST API)
Linting	ESLint

 ##Collaborators
Name	Contributions
Feisal Hassan	ApartmentCard, App, db.json
Gladys	NavBar, Home
Joshua ListingPage, AddApartmentForm

## License
This project is licensed under the MIT License.
Feel free to use or modify it for learning or personal projects.
