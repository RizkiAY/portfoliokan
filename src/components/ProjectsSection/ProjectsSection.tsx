import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderKanban, ChevronLeft, ChevronRight, Monitor, Mail, Phone, MapPin, Send } from "lucide-react";
import "../AboutSection/PortfolioSections.css";

const projects = [
  { title: "Absolute Cinema", category: "WEB APPLICATION", number: "01", description: "A responsive web application for exploring movies and TV series by integrating The Movie Database (TMDB) API. Features include search, favorites, actor and genre information, keywords, media galleries, and detail pages. Uses multiple REST API endpoints and asynchronous data fetching with Fetch API.", technologies: ["HTML", "CSS", "Vanilla JavaScript", "REST API", "Fetch API"], github: "https://github.com/RizkiAY/Absolute-Cinema", screenshot: "/project-screenshots/absolute-cinema.png" },
  { title: "E-Commerce Website Development", category: "WEB APPLICATION", number: "02", description: "A responsive e-commerce web application for browsing and purchasing products through an intuitive online shopping experience. Features include product catalogs, search, shopping cart, checkout, order invoices, user authentication, profile management, address and bank account management, and order history. Built with Laravel, featuring database-driven product and order management.", technologies: ["HTML", "CSS", "PHP", "MySQL", "Bootstrap"], github: "https://github.com/RizkiAY/laravel-ecommerce", screenshot: "/project-screenshots/ecommerce.png" },
  { title: "Decision Support System for Agricultural Commodities", category: "ACADEMIC · DATA ANALYSIS", number: "03", description: "A decision support application to identify leading agricultural commodities based on production-area characteristics. Applies K-Means to cluster regions and TOPSIS to rank the most suitable commodities based on multiple criteria.", technologies: ["Python", "Gradio", "K-Means", "TOPSIS", "Data Processing"], screenshot: "/project-screenshots/agriculture-dss.png" },
];

export const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const project = projects[activeIndex];

  const changeProject = (direction: number) => {
    setSlideDirection(direction);
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const selectProject = (index: number) => {
    if (index === activeIndex) return;
    // Choose the shortest direction for direct pagination navigation.
    const forwardDistance = (index - activeIndex + projects.length) % projects.length;
    setSlideDirection(forwardDistance <= projects.length / 2 ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <motion.section id="projects" className="portfolio-section projects-section" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7 }}>
      <div className="section-heading"><p className="section-eyebrow"><FolderKanban size={12}/> SELECTED WORK</p><div className="section-heading-row"><h2>Featured <span>Projects.</span></h2><p className="section-lead">A selection of academic and personal work, shaped by curiosity and hands-on learning.</p></div></div>
      <div className="project-carousel" aria-live="polite">
        <button className="project-nav project-nav-prev" type="button" onClick={() => changeProject(-1)} aria-label="Previous project"><ChevronLeft size={22}/></button>
        <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
          <motion.article
            key={project.number}
            custom={slideDirection}
            variants={{
              enter: (direction: number) => ({
                opacity: 0,
                x: direction > 0 ? 90 : -90,
                scale: 0.985,
              }),
              center: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
              exit: (direction: number) => ({
                opacity: 0,
                x: direction > 0 ? -90 : 90,
                scale: 1,
                transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="project-card project-card-featured"
          >
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
      <div className="project-pagination"><span>{project.number}</span><div>{projects.map((item, index) => <button key={item.number} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => selectProject(index)} aria-label={`Show project ${index + 1}`}/>)}</div><span>0{projects.length}</span></div>
      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2>Let's <span>Connect.</span></h2>
          <p className="contact-description">Currently open for new opportunities and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className="contact-details">
            <a href="mailto:rizkiadhatillayusa@gmail.com"><span><Mail size={21}/></span>rizkiadhatillayusa@gmail.com</a>
            <a href="tel:+6282268183029"><span><Phone size={21}/></span>+62 822-6818-3029</a>
            <div><span><MapPin size={21}/></span>Padang, West Sumatra, Indonesia</div>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const name = String(data.get("name") || ""); const email = String(data.get("email") || ""); const message = String(data.get("message") || ""); const subject = encodeURIComponent(`Portfolio inquiry from ${name}`); const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`); window.location.href = `mailto:rizkiadhatillayusa@gmail.com?subject=${subject}&body=${body}`; }}>
          <label htmlFor="contact-name">Your Name</label>
          <input id="contact-name" name="name" type="text" placeholder="John Doe" required />
          <label htmlFor="contact-email">Your Email</label>
          <input id="contact-email" name="email" type="email" placeholder="john@example.com" required />
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="How can I help you?" rows={5} required />
          <button type="submit">Send Message <Send size={17}/></button>
        </form>
      </section>
    </motion.section>
  );
};
