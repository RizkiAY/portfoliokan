import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import "./PortfolioSections.css";

export const AboutSection = () => (
  <motion.section id="about" className="portfolio-section about-section" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.2 }}>
    <div className="section-heading">
      <p className="section-eyebrow"><Sparkles size={12} /> A LITTLE INTRODUCTION</p>
      <div className="section-heading-row">
        <h2>About <span>Me.</span></h2>
        <p className="section-lead">A curious mind with a practical approach to building useful digital experiences.</p>
      </div>
    </div>
    <div className="about-panel">
      <div className="about-index">01 <span>— ABOUT</span></div>
      <div className="about-copy">
        <p>I am a fresh graduate with a Bachelor’s degree in Informatics Engineering from Universitas Putra Indonesia YPTK Padang, graduating with a GPA of 3.47/4.00 and a concentration in Artificial Intelligence. I have hands-on experience developing web applications, working with databases, integrating REST APIs, and building information-system solutions through academic and personal projects.</p>
        <p>I enjoy learning new technologies, solving technical problems, and collaborating systematically to turn requirements into useful applications. I am interested in opportunities in web development and information technology where I can contribute while continuing to grow.</p>
      </div>
    </div>
  </motion.section>
);
