import React, { useState } from 'react';
import './FloatingForm.css'; // Import the stylesheet

import API from '../ChatbotAPI'; // Import the API module

const FloatingForm = ({ updateLogoUrl }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yearOfBirth: '',
    city: '',
    country: '',
    favoriteBand: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form data submitted:', formData);

    // Call the API to generate the image URL
    // and update the logo URL
    API.GetImageURL(formData).then((url) => {
      updateLogoUrl(url);
    });
    // updateLogoUrl("https://www.example.com/logo.png"); // Update the logo URL
    setIsModalOpen(false); // Close the modal after submission
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="floating-form-container">
        <button onClick={openModal}>Create your Avatar</button>
        {isModalOpen && (
            <div className="modal-overlay">
            <div className="modal">
                <div class="close-btn-header">
                    <span className="close-btn" onClick={closeModal}>
                        &times;
                    </span>
                </div>

                <form onSubmit={handleSubmit} className="floating-form">
                    <label for="firstName">
                    First Name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <br />

                    <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Year of Birth:
                    <input
                        type="text"
                        name="yearOfBirth"
                        value={formData.yearOfBirth}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    City:
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Favorite Band:
                    <input
                        type="text"
                        name="favoriteBand"
                        value={formData.favoriteBand}
                        onChange={handleChange}
                    />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default FloatingForm;
