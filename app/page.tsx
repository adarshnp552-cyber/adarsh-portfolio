
"use client";

import { useRef, useState } from "react";
import CartoonScene from "./CartoonScene";

const projects = [
  {
    number: "01",
    title: "WhatsApp Campaign Response Prediction",
    category: "MACHINE LEARNING",
    description:
      "Predicting campaign responses using customer data and classification models.",
    tags: ["Python", "Pandas", "Random Forest"],
  },
  {
    number: "02",
    title: "AI-Based Skin Disease Prediction",
    category: "DEEP LEARNING",
    description:
      "Exploring deep learning models for skin lesion image classification.",
    tags: ["Python", "CNN", "ResNet-18", "ConvNeXt"],
  },
  {
    number: "03",
    title: "E-Learning Web Application",
    category: "WEB DEVELOPMENT",
    description:
      "An educational platform concept for managing learning content and permissions.",
    tags: ["Python", "Django", "HTML", "CSS"],
  },
];

const skills = [
  ["Python", "Programming"],
  ["SQL", "Database"],
  ["Machine Learning", "Artificial Intelligence"],
  ["Deep Learning", "Artificial Intelligence"],
  ["Computer Vision", "Artificial Intelligence"],
  ["Cybersecurity", "Security"],
  ["JavaScript", "Web Development"],
  ["Git & GitHub", "Developer Tools"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play or pause music directly from the button click.
  // This helps browsers allow playback after user interaction.
  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (soundOn) {
      audio.pause();
      setSoundOn(false);
      return;
    }

    try {
      setAudioError(false);
      audio.volume = 0.3;

      await audio.play();
      setSoundOn(true);
    } catch (error) {
      console.error("Could not play background music:", error);
      setSoundOn(false);
      setAudioError(true);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      {/* Background music: file must be inside the public folder */}
      <audio
  ref={audioRef}
  src="/kulakovka-cinematic-ambient-274889.mp3"
  loop
  preload="none"
/>
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
      </div>

      {/* Navigation */}
      <header className="topbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          AD<span>ARSH.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <button
          className={`sound-button ${soundOn ? "sound-active" : ""}`}
          type="button"
          onClick={toggleSound}
          aria-pressed={soundOn}
          aria-label={soundOn ? "Turn music off" : "Turn music on"}
        >
          <span className={`sound-bars ${soundOn ? "active" : ""}`}>
            <span />
            <span />
            <span />
            <span />
          </span>

          {soundOn ? "SOUND ON" : "SOUND OFF"}
        </button>
      </header>

      {audioError && (
        <div className="audio-error" role="status">
          Music could not load. Check the MP3 filename in your public folder.
        </div>
      )}

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Adarsh<span className="hero-name-accent">.</span>
          </h1>

          <h2 className="hero-subtitle">
            Building intelligent
            <br />
            <span>digital experiences.</span>
          </h2>

          <p className="hero-description">
            Computer Science Engineering student passionate about
            artificial intelligence, machine learning, computer vision,
            cybersecurity, and creative technology.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work <span>↗</span>
            </a>
            <a href="#contact" className="secondary-button">
              Let's connect
            </a>
          </div>

          <div className="hero-meta">
            <span>AI / ML</span>
            <span className="meta-divider">✳</span>
            <span>COMPUTER VISION</span>
            <span className="meta-divider">✳</span>
            <span>DEVELOPMENT</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-label visual-label-top">
            <span className="label-dot" />
            CREATIVE MODE: ON
          </div>

          <div className="cartoon-scene">
            <CartoonScene />
          </div>

          <div className="floating-chip chip-top">
            <span>✦</span> AI & MACHINE LEARNING
          </div>

          <div className="floating-chip chip-bottom">
            <span>⌘</span> CODE THE FUTURE
          </div>

          <div className="visual-caption">
            <span>01 / THE INTRODUCTION</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>

        <a className="scroll-indicator" href="#about">
          <span className="scroll-line" />
          SCROLL TO DISCOVER
        </a>
      </section>

      {/* About */}
      <section className="section-shell about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>
            Curiosity drives me.
            <br />
            <span>Technology inspires me.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-index">01 — ABOUT</div>

          <div className="about-text">
            <p>
              I'm Adarsh, a Computer Science Engineering student interested
              in turning ideas into practical technology. I enjoy exploring
              how intelligent systems can solve real-world problems.
            </p>

            <p>
              My interests include machine learning, computer vision,
              cybersecurity, and software development. I'm continually
              learning and building projects to improve my skills.
            </p>

            <div className="about-facts">
              <div>
                <span className="fact-symbol">✳</span>
                <span>Always learning</span>
              </div>
              <div>
                <span className="fact-symbol">⌘</span>
                <span>Project focused</span>
              </div>
              <div>
                <span className="fact-symbol">↗</span>
                <span>Future oriented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-shell projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Ideas turned into
            <br />
            <span>experiments.</span>
          </h2>
          <p className="section-description">
            Projects and technical areas I've explored.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-arrow">↗</span>
              </div>

              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section-shell skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2>
            Skills I use to
            <br />
            <span>make things happen.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map(([name, category], index) => (
            <div className="skill-card" key={name}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{name}</h3>
                <p>{category}</p>
              </div>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section-shell contact-section" id="contact">
        <p className="eyebrow">HAVE AN IDEA?</p>
        <h2>
          Let's create
          <br />
          <span>something meaningful.</span>
        </h2>

        <p className="contact-description">
          Interested in AI projects, internships, or collaborating on
          something interesting? Let's connect.
        </p>

       
<a
  className="primary-button"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adarshnp552@gmail.com&su=Portfolio%20Contact"
  target="_blank"
  rel="noopener noreferrer"
>
  Get in touch <span>↗</span>
</a>


        <p className="contact-note">
          Update the placeholder email address before publishing.
        </p>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <a href="#home" className="brand">
          AD<span>ARSH.</span>
        </a>

        <p>Designed with curiosity. Built with code.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <p className="copyright">© 2026 ADARSH</p>
      </footer>
    </main>
  );
}
