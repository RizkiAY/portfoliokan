import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderKanban, ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import "../AboutSection/PortfolioSections.css";

const projects = [
  { title: "Movies & TV Series Finder Website", category: "WEB APPLICATION", number: "01", description: "A responsive web application for exploring movies and TV series by integrating The Movie Database (TMDB) API. Features include search, favorites, actor and genre information, keywords, media galleries, and detail pages. Uses multiple REST API endpoints and asynchronous data fetching with Fetch API.", technologies: ["HTML", "CSS", "Vanilla JavaScript", "REST API", "Fetch API"], github: "https://github.com/RizkiAY/Absolute-Cinema", screenshot: "/project-screenshots/absolute-cinema.png" },
  { title: "E-Commerce Website Development", category: "WEB APPLICATION", number: "02", description: "A web-based e-commerce application supporting product management, purchase transactions, user authentication, and order processing. Developed using HTML, CSS, PHP, MySQL, and Bootstrap.", technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"], github: "https://github.com/RizkiAY/ecommerce-php", screenshot: "/project-screenshots/ecommerce.png" },
  { title: "Decision Support System for Agricultural Commodities", category: "ACADEMIC · DATA ANALYSIS", number: "03", description: "A decision support application to identify leading agricultural commodities based on production-area characteristics. Applies K-Means to cluster regions and TOPSIS to rank the most suitable commodities based on multiple criteria.", technologies: ["Python", "Gradio", "K-Means", "TOPSIS", "Data Processing"], screenshot: "/project-screenshots/agriculture-dss.png" },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];
  const changeProject = (direction: number) => setActiveIndex((current) => (current + direction + projects.length) % projects.length);

  return (
    <motion.section id="projects" className="portfolio-section projects-section" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}>
      <div className="section-heading"><p className="section-eyebrow"><FolderKanban size={12}/> SELECTED WORK</p><div className="section-heading-row"><h2>Featured <span>Projects.</span></h2><p className="section-lead">A selection of academic and personal work, shaped by curiosity and hands-on learning.</p></div></div>
      <div className="project-carousel" aria-live="polite">
        <button className="project-nav project-nav-prev" type="button" onClick={() => changeProject(-1)} aria-label="Previous project"><ChevronLeft size={22}/></button>
        <AnimatePresence mode="wait">
          <motion.article key={project.number} className="project-card project-card-featured" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: .32 }}>
            <div className="project-screenshot">
              <img src={project.screenshot} alt={`Screenshot of ${project.title}`} onError={(event) => { event.currentTarget.style.display = "none"; }} />
              <div className="project-screenshot-placeholder"><Monitor size={34}/><span>WEBSITE PREVIEW</span><small>Add screenshot file to public{project.screenshot}</small></div>
            </div>
            <div className="project-content"><div className="project-number">{project.number}<span> / 0{projects.length}</span></div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              {project.github && <a className="section-inline-link project-link" href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> Source Code <ExternalLink size={12}/></a>}
            </div><span className="project-corner" aria-hidden="true"><ArrowUpRight size={22}/></span>
          </motion.article>
        </AnimatePresence>
        <button className="project-nav project-nav-next" type="button" onClick={() => changeProject(1)} aria-label="Next project"><ChevronRight size={22}/></button>
      </div>
      <div className="project-pagination"><span>{project.number}</span><div>{projects.map((item, index) => <button key={item.number} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Show project ${index + 1}`}/>)}</div><span>0{projects.length}</span></div>
      <div className="contact-panel"><div><p className="section-eyebrow">HAVE A PROJECT IN MIND?</p><h3>Let’s build something <span>meaningful.</span></h3><p>Interested in working together or discussing an opportunity?</p></div><a href="mailto:rizkiadhatillayusa@gmail.com">Get in touch <ArrowUpRight size={16}/></a><small>Padang, West Sumatra, Indonesia · +62 822-6818-3029</small></div>
    </motion.section>
  );
};
