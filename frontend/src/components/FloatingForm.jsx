import React, { useState } from 'react';
import './FloatingForm.css'; // Import the stylesheet

import API from '../ChatbotAPI'; // Import the API module

const FloatingForm = ({ updateLogoUrl }) => {
  const [formData, setFormData] = useState({
    face: '',
    eyebrows: '',
    eye_color: '',
    facial_features: '',
    hair: '',
    clothes: '',
    height: '',
    weight: '',
    other_apparel: '',
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
                    <label for="face">
                    Face:
                    </label>
                    <input
                        type="text"
                        name="face"
                        value={formData.face}
                        onChange={handleChange}
                    />
                    <br />

                    <label>
                    Eye Brows:
                    <input
                        type="text"
                        name="eyebrows"
                        value={formData.eyebrows}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Eye Color:
                    <input
                        type="text"
                        name="eye_color"
                        value={formData.eye_color}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Facial Features:
                    <input
                        type="text"
                        name="facial_features"
                        value={formData.facial_features}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Hair:
                    <input
                        type="text"
                        name="hair"
                        value={formData.hair}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Clothes:
                    <input
                        type="text"
                        name="clothes"
                        value={formData.clothes}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Height:
                    <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Weight:
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                    </label>

                    <label>
                    Other Apparel:
                    <input
                        type="text"
                        name="other_apparel"
                        value={formData.other_apparel}
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
