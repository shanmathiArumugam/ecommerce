import React from "react";
import "../App.css";

const HomePage = () => {
  return (
    <div className="main-section">
      <div className="content">
        <h2>OPEN FOR DELIVERY & PICK UP</h2>
        <h1>GET IT WHILE IT'S HOT</h1>
        
        <button className="order-btn">Order Online</button>
        
      </div>
      <div className="image">
        <img
          src="https://images.ctfassets.net/wtodlh47qxpt/5kz7rHYvOQBVYcmkMOUbXt/ad8de18d2b956b609e346d2cbd892551/D-PR00000892-prod"
          alt="Fried Chicken"
        />
      </div>
    </div>
  );
};

export default HomePage;
