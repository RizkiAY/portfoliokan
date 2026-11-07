import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CalendarDays } from "lucide-react";
import "../AboutSection/PortfolioSections.css";

export const EducationSection = () => (
  <motion.section id="education" className="portfolio-section education-skills-section" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true, amount: 0.15 }}>
    <div className="section-heading">
      <p className="section-eyebrow"><GraduationCap size={13} /> LEARNING JOURNEY</p>
      <div className="section-heading-row"><h2>Education<span>.</span></h2><p className="section-lead">The foundation behind my technical knowledge and problem-solving approach.</p></div>
    </div>
    <div className="education-grid">
      <article className="education-card">
        <div className="education-card-top"><span className="education-icon"><GraduationCap size={20}/></span><span className="education-period"><CalendarDays size={12}/> AUG 2021 — MAY 2026</span></div>
        <p className="education-type">UNDERGRADUATE DEGREE</p>
        <h3>Bachelor of Informatics Engineering</h3>
        <p className="education-school">Universitas Putra Indonesia YPTK Padang</p>
        <div className="education-facts"><span>GPA <b>3.47 / 4.00</b></span><span>FOCUS <b>Artificial Intelligence</b></span></div>
        <p className="education-description">Completed an undergraduate thesis developing a decision support system for identifying leading agricultural commodities using K-Means clustering and the TOPSIS method.</p>
      </article>
      <article className="education-card education-card-secondary">
        <div className="education-card-top"><span className="education-icon"><BookOpen size={20}/></span><span className="education-period"><CalendarDays size={12}/> AUG 2024 — JAN 2025</span></div>
        <p className="education-type">PROFESSIONAL TRAINING</p>
        <h3>Junior Web Programmer Training</h3>
        <p className="education-school">Mediatama Web Indonesia</p>
        <p className="education-description">Studied CRUD application development using Native PHP and Bootstrap, then completed a training project by building an online e-commerce website.</p>
        <div className="education-tags"><span>Native PHP</span><span>Bootstrap</span><span>CRUD</span></div>
      </article>
    </div>
    <ProfessionalProfile />
  </motion.section>
);
