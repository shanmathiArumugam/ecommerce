import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const BookingPage = () => {
  return (
    <div className="booking-page-container">
      {/* Content Section */}
      <h2 className="fw-bold">Book Now</h2>
      <div className="content-wrapper">
        {/* Left Section with Image */}
        <div className="image-section">
          <img
            src="/images/cartoon images.jpg"
            alt="Dining Couple"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Section with Reservation Form */}
        <div className="booking-form-container">
          <h3>Reservation</h3>
          <h2>Book A Table Online</h2>
          <form>
            {/* Row 1: Name and Email */}
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            {/* Row 2: Date & Time and No. of People */}
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="datetime-local"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <select className="form-select" defaultValue="1">
                  <option value="1">No. Of People: 1</option>
                  <option value="2">No. Of People: 2</option>
                  <option value="3">No. Of People: 3</option>
                  <option value="4">No. Of People: 4</option>
                </select>
              </div>
            </div>

            {/* Row 3: Special Request */}
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Special Request"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-warning w-100">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
