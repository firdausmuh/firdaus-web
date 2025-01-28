import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
