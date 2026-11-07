import { motion } from "framer-motion";
import { Code2, Users, Languages } from "lucide-react";

const technicalSkills = ["HTML", "CSS", "JavaScript", "API", "React", "Vue.js", "Node.js", "PHP", "Python", "Java", "C", "MySQL", "Bootstrap", "Gradio", "Microsoft Office"];
const softSkills = ["Time Management", "Communication", "Detail-oriented", "Problem Solving", "Adaptive"];

export default function ProfessionalProfile() {
  return (
    <motion.div id="skills" className="skills-area" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.2 }}>
      <div className="section-heading skills-heading"><p className="section-eyebrow"><Code2 size={12}/> MY TOOLKIT</p><div className="section-heading-row"><h2>Skills<span>.</span></h2><p className="section-lead">Tools, strengths, and communication skills I bring to a project.</p></div></div>
      <div className="skills-grid">
        <article className="skill-card skill-card-wide"><div className="skill-card-title"><Code2 size={17}/><h3>Technical Skills</h3></div><div className="skill-pills">{technicalSkills.map(skill => <span key={skill}>{skill}</span>)}</div></article>
        <article className="skill-card"><div className="skill-card-title"><Users size={17}/><h3>Soft Skills</h3></div><div className="skill-pills">{softSkills.map(skill => <span key={skill}>{skill}</span>)}</div></article>
        <article className="skill-card"><div className="skill-card-title"><Languages size={17}/><h3>Languages</h3></div><div className="language-list"><p><span>Indonesian</span><b>Active / Fluent</b></p><p><span>English</span><b>Proficient</b></p></div></article>
      </div>
    </motion.div>
  );
}
