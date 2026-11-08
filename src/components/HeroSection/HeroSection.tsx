import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import "./HeroSection.css";

type Tilt = { x: number; y: number };

export const HeroSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });
  const [flipped, setFlipped] = useState(false);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    setTilt({ x: (0.5 - py) * 17, y: (px - 0.5) * 20 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="hero" className="ray-hero">
      <div className="ray-hero-grid" aria-hidden="true" />
      <div className="ray-hero-inner">
        <motion.div
          className="ray-hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="ray-eyebrow"><span className="ray-status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="ray-kicker">HELLO, I'M RIZKI ADHATILLA YUSA</p>
          <h1>Building digital<br /><span>experiences</span> that matter.</h1>
          <p className="ray-hero-description">
            Informatics Engineering graduate and web developer focused on creating useful,
            thoughtful, and data-driven digital products.
          </p>
          <div className="ray-tags" aria-label="Areas of interest">
            <span>Web Development</span><span>API Integration</span><span>Information Systems</span>
          </div>
          <div className="ray-hero-actions">
            <a className="ray-primary-btn" href="mailto:rizkiadhatillayusa@gmail.com">Let's talk <ArrowUpRight size={17} /></a>
            <a className="ray-text-link" href="#projects">Explore my work <ArrowDown size={16} /></a>
          </div>
          <div className="ray-socials">
            <a href="https://github.com/RizkiAY" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:rizkiadhatillayusa@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <span className="ray-social-caption">Padang, Indonesia · Open to work</span>
          </div>
        </motion.div>

        <motion.div
          className="ray-visual"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <div className="ray-orbit ray-orbit-one" aria-hidden="true" />
          <div className="ray-orbit ray-orbit-two" aria-hidden="true" />
          <svg className="ray-connectors" viewBox="0 0 560 520" fill="none" aria-hidden="true">
            <path d="M75 112 C145 112 137 178 205 178" />
            <path d="M365 112 C425 112 419 165 489 165" />
            <path d="M82 386 C147 386 148 332 205 332" />
            <path d="M364 348 C432 348 420 410 490 410" />
            <circle cx="75" cy="112" r="4" /><circle cx="489" cy="165" r="4" />
            <circle cx="82" cy="386" r="4" /><circle cx="490" cy="410" r="4" />
          </svg>

          <div className="ray-float-note ray-note-top"><Sparkles size={14} /><span>Curious by nature</span></div>
          <div className="ray-float-note ray-note-bottom"><span className="ray-note-pulse" /><span>Turning ideas into reality</span></div>

          <div
            ref={cardRef}
            className={`ray-card-scene${flipped ? " is-flipped" : ""}`}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={{ perspective: 1100 }}
            role="button"
            tabIndex={0}
            aria-label={flipped ? "Show business card front" : "Flip business card to contact details"}
            onClick={() => { setFlipped((value) => !value); resetTilt(); }}
            onKeyDown={(event) => { if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); setFlipped((value) => !value); resetTilt(); } }}
          >
            <motion.div
              className="ray-tilt-wrapper"
              animate={{ rotateX: tilt.x, rotateY: tilt.y, rotateZ: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
            <div className="ray-business-card">
              <div className="ray-card-face ray-card-front">
                <div className="ray-card-topline"><span>RAY<span className="ray-pink">.</span></span><span className="ray-card-index">PERSONAL / 001</span></div>
                <div className="ray-profile-photo">
                  <img src="/profile.jpg" alt="Rizki Adhatilla Yusa" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                  <span>RY</span>
                </div>
                <div className="ray-monogram">R<span>Y</span></div>
                <div className="ray-card-bottom">
                  <div><h2>Rizki Adhatilla Yusa</h2><p>WEB DEVELOPER</p></div>
                  <div className="ray-card-mark">✳</div>
                </div>
                <div className="ray-card-shine" />
              </div>
              <div className="ray-card-face ray-card-back">
                <div className="ray-card-topline"><span>LET'S CONNECT<span className="ray-pink">.</span></span><span className="ray-card-index">CONTACT / 002</span></div>
                <div className="ray-back-content">
                  <p>Building with curiosity.<br />Creating with purpose.</p>
                  <a onClick={(event) => event.stopPropagation()} href="mailto:rizkiadhatillayusa@gmail.com">rizkiadhatillayusa@gmail.com <ArrowUpRight size={14} /></a>
                  <a onClick={(event) => event.stopPropagation()} href="https://github.com/RizkiAY" target="_blank" rel="noreferrer">github.com/RizkiAY <ArrowUpRight size={14} /></a>
                </div>
                <div className="ray-card-back-footer"><span>PADANG, INDONESIA</span><span>2026 — PRESENT</span></div>
              </div>
            </div>
            </motion.div>
          </div>
          <div className="ray-card-hint">CLICK THE CARD TO FLIP · MOVE TO INTERACT</div>
        </motion.div>
      </div>
      <div className="ray-hero-foot"><span>SCROLL TO EXPLORE</span><span className="ray-foot-line" /><span>01 / 05</span></div>
    </section>
  );
};
