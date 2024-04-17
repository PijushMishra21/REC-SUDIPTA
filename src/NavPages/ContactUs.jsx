import React, { useState } from 'react';
import './ContactUs.css'; 
import {} from '@formspree/react';
import Footer from '../Homepage/Footer';
// import GoogleMapApi from './GoogleMapApi';
import { FaPhoneAlt,FaPeriscope   } from "react-icons/fa";
import Slide from '../Homepage/Slide';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    number:'',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
       console.log(e)
    try {
      const response = await fetch('https://formspree.io/f/mleqookp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        console.log('Message sent successfully!');
        setFormData({
          name: '',
          number: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <div className='contact-container'>
    <div className="contact-form-container">
      <p className='contact_us_sub_heading'>--Want to contact with us--</p>
      <h1 className='contact_us_heading'>Request Call back__</h1>
      <form onSubmit={handleSubmit} id='contact_form'>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="number">Your Mobile Number:</label>
          <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <aside className='adress_section'>
      <h2 className='contact_us_heading'>Contact Us :</h2>
      <address>
      <FaPhoneAlt />
        <p>
          <b>Mobile Number :</b> (+91) 8535912770 / (+91) 9932731756</p>
        <p>
          <b>Email : </b>rajendraenggconsultancysales@gmail.com</p>
          <FaPeriscope />
        <p><b>Office Address : </b></p>
      <p>Mirzabazar, Medinipur, West Bengal - 721101 </p>
      {/* <GoogleMapApi /> */}
      </address>
    </aside>


    </div>
    <Slide />
    <Footer />
    </div>
  );
}
export default ContactForm;