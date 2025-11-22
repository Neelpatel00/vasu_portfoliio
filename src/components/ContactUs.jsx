import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section-dark">
      <div className="contact-container">

        {/* Left Image */}
        <motion.div
          className="contact-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/assets/contact.jpg" alt="Contact" />
        </motion.div>

        {/* Middle Form */}
        <motion.form
          action="https://formsubmit.co/sobhasanavasu7132@gmail.com"
          method="POST"
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2>Let's Connect</h2>

          {/* FormSubmit Hidden Settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New Message From Portfolio" />

          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your name..." required />

          <label>E-mail</label>
          <input type="email" name="email" placeholder="name@example.com" required />

          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Write your message..." required />

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Right Info */}
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h4>Contact</h4>
            <p>sobhasanavasu7132@gmail.com</p>
          </div>

          <div className="contact-socials">
            <a href="https://x.com/AestroEdits_7?t=kI280hav75cHYwFss8H5DA&s=08">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/aestroedits_7/?utm_source=qr#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="mailto:sobhasanavasu7132@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
