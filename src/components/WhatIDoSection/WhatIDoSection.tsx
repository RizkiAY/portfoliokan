import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Workflow } from "lucide-react";
import "./WhatIDoSection.css";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive, accessible, and user-friendly websites with a focus on clean interfaces and reliable experiences.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    icon: Code2,
    tone: "red",
  },
  {
    number: "02",
    title: "API Integration",
    description:
      "Connecting applications to services and data through well-structured APIs, with attention to consistency and performance.",
    tags: ["REST API", "JSON", "Integration"],
    icon: Workflow,
    tone: "red",
  },
  {
    number: "03",
    title: "Information Systems",
    description:
      "Turning everyday workflows into practical digital systems that help organize information and support better decisions.",
    tags: ["Database", "System Design", "Problem Solving"],
    icon: Database,
    tone: "red",
  },
];

export const WhatIDoSection = () => {
  const trackSpotlight = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section id="what-i-do" className="whatido-section">
      <div className="whatido-heading">
        <motion.p
          className="whatido-eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          HOW I CAN HELP
        </motion.p>
        <motion.div
          className="whatido-heading-row"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <h2>What I <span>Do.</span></h2>
          <p>
            I combine thoughtful design and practical engineering to build
            digital solutions that solve real problems.
          </p>
        </motion.div>
      </div>

      <div className="whatido-grid">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.number}
              className={`whatido-card whatido-${service.tone}`}
              onPointerMove={trackSpotlight}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="whatido-card-glow" aria-hidden="true" />
              <div className="whatido-card-top">
                <span className="whatido-number">{service.number} / 03</span>
                <span className="whatido-icon"><Icon size={21} strokeWidth={1.7} /></span>
              </div>
              <div className="whatido-card-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="whatido-card-bottom">
                <div className="whatido-tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="whatido-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="whatido-footnote"><span /> BUILT WITH CURIOSITY. DELIVERED WITH PURPOSE.</div>
    </section>
  );
};
