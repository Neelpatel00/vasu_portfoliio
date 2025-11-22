import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/components.css";

const sampleProjects = [
  { id: 1, title: "Aston Holm Reel", image: "/assets/p1.mp4", link: "#" },
  { id: 2, title: "Brand Teaser", image: "/assets/p2.mp4", link: "#" },
  { id: 3, title: "YouTube Short Edit", image: "/assets/p3.mp4", link: "#" },
  { id: 4, title: "YouTube Short Edit", image: "/assets/p4.mp4", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Centered Title */}
        <div className="skills-title-wrap">
          <div className="line"></div>
          <h3 className="skills-title">Latest Projects</h3>
          <div className="line"></div>
        </div>

        <div className="projects-grid" style={{ marginTop: 12 }}>
          {sampleProjects.map((p, idx) => (
            <ProjectCard p={p} idx={idx} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------
// VIDEO CARD COMPONENT
// ----------------------------------
function ProjectCard({ p, idx }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // enable audio
      videoRef.current.play();        // manually play
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06 }}
    >
      <video
        ref={videoRef}
        className="project-video"
        preload="metadata"
        playsInline
        controls={isPlaying}    // controls appear only after click
        onClick={onPlay}        // click to play
      >
        <source src={p.image} type="video/mp4" />
      </video>

      <div className="project-title">{p.title}</div>
    </motion.div>
  );
}
