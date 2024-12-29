import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUtensils, faShoppingCart, faHeadset, faTruck, faLeaf, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

import 'bootstrap/dist/css/bootstrap.min.css';

const OnlineOrder = () => {
  const services = [
    { 
      icon: faUserTie, 
      title: "Master Chefs", 
      description: "Our team of expert chefs crafts each dish with skill and passion, ensuring every meal is a masterpiece." 
    },
    { 
      icon: faUtensils, 
      title: "Quality Food", 
      description: "We serve only the highest quality ingredients, delivering delicious dishes that satisfy both the palate and the soul." 
    },
    { 
      icon: faShoppingCart, 
      title: "Online Order", 
      description: "Convenient online ordering, making it easy for you to enjoy our meals from the comfort of your home." 
    },
    { 
      icon: faHeadset, 
      title: "24/7 Service", 
      description: "Available around the clock, we’re here to cater to your needs at any time, day or night." 
    },
    { 
      icon: faTruck, 
      title: "Fast Delivery", 
      description: "Enjoy quick, reliable delivery right to your door, guaranteeing fresh and hot meals with every order." 
    },
    { 
      icon: faLeaf, 
      title: "Eco-Friendly Packaging", 
      description: "Committed to sustainability, we use eco-friendly packaging that’s kind to the planet and reduces waste." 
    },
    { 
      icon: faHeart, 
      title: "Customer Satisfaction", 
      description: "Your happiness is our priority, ensuring every meal and experience leaves you satisfied and smiling." 
    },
    { 
      icon: faStar, 
      title: "Premium Quality", 
      description: "We only use the finest, freshest ingredients and uphold the highest standards, ensuring a truly premium dining experience." 
    }
  ];
  

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h5 className="text-warning">Our Services</h5>
        <h2 className="fw-bold">Explore Our Services</h2>
      </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card text-center border-0 shadow-sm p-3">
              <div className="card-body">
                <FontAwesomeIcon icon={service.icon} size="3x" className="service-icon mb-3" />
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineOrder;
