
import React from "react";
import Image from "next/image";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Get in Touch</h2>

        <div className="info-item">
          <Image src="/assets/location.png" alt="Location" width={24} height={24} className="icon" />
          <div>
            <h4>Address</h4>
            <p>123 Main St, Btm Layout Stage 1, Bengaluru</p>
          </div>
        </div>

        <div className="info-item">
          <Image src="/assets/phone-call.png" alt="Phone" width={24} height={24} className="icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="info-item">
          <Image src="/assets/mail.png" alt="Email" width={24} height={24} className="icon" />
          <div>
            <h4>Email</h4>
            <p>clixhora@info.com</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or
          just want to say hello, feel free to reach out.
        </p>

        <form>
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="How can we help?" />
          </div>
          <textarea placeholder="Your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
