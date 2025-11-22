import React from "react";
import { motion } from "framer-motion";
import "../styles/components.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">

      {/* TITLE */}
      <div className="about-title-wrap">
        <div className="line"></div>
        <h3 className="about-title">Who's this guy ?</h3>
        <div className="line"></div>
      </div>

      <div className="about-wrapper">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-img-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src="/assets/aboutme.jpg" alt="About" className="about-img" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="about-heading">about me</h2>

          <p>
            I got into editing through gaming — cutting my own clips, trying weird
            effects, and figuring out what grabs attention. What started as a
            hobby quickly became an obsession with visuals that feel right and
            keep people watching.
          </p>

          <p>
            Now I help creators and businesses turn raw footage into content that
            looks good, flows better, and keeps their audience hooked.
          </p>

          <a href="https://x.com/AestroEdits_7?t=kI280hav75cHYwFss8H5DA&s=08" className="about-tag">
            <i className="fa-brands fa-x-twitter"></i> AestroEditz
          </a>
        </motion.div>
      </div>
    </section>
  );
}
