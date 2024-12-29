import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";   
import MenuPage from "./pages/MenuPage";   
import ContactPage from "./pages/ContactPage";  
import OrderOnline from "./pages/OrderOnline"; 
import BookingPage from "./pages/BookingPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/orderonline" element={<OrderOnline/>}/>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
