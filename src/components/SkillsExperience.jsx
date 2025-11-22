import React from "react";
import { motion } from 'framer-motion';
import "../styles/components.css";

export default function SkillsExperience() {

  const skills = [
  { label: "Video Editing", icon: "fa-solid fa-video" },
  { label: "Shorts / Reels Editing", icon: "fa-solid fa-clapperboard" },
  { label: "Pacing", icon: "fa-solid fa-bolt" },
  { label: "Color Grading", icon: "fa-solid fa-palette" },
  { label: "Motion Graphics", icon: "fa-solid fa-film" },
  { label: "Animations", icon: "fa-solid fa-star" },
  { label: "Graphic Design", icon: "fa-solid fa-pen-nib" },
  { label: "Adobe AE / PR", icon: "fa-solid fa-wand-magic-sparkles" },
  { label: "Communication", icon: "fa-solid fa-comments" },
  { label: "Trending Styles", icon: "fa-solid fa-fire" },
  { label: "On Time", icon: "fa-solid fa-clock" },
];

  return (
    <section className="skills-section">
      {/* TITLE */}
      <div className="skills-title-wrap">
        <div className="line"></div>
        <h3 className="skills-title">Skills & Experience</h3>
        <div className="line"></div>
      </div>

      {/* SKILLS BOX */}
      <motion.div className="skills-box" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        {skills.map((s, i) => (
          <motion.div className="skill-tag" key={i} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 200 }}>
            <i className={`${s.icon} skill-icon`}></i>
            {s.label}
          </motion.div>
        ))}
      </motion.div>

      {/* EXPERIENCE ROW */}
      <motion.div className="experience-row" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}>
        <div className="exp-item">Video Editor</div>
        <div className="exp-item">Freelance</div>
        <div className="exp-item">Jan 2023 – Present</div>
      </motion.div>
    </section>
  );
}
