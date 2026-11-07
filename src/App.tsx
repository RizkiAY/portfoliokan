// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { WhatIDoSection } from "./components/WhatIDoSection/WhatIDoSection";
import StripedBackground from "./components/lightswind/StripedBackground";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import ReactLenis from "lenis/react";
import Dock from "./components/lightswind/dock";
import {
  Home,
  User,
  GraduationCap,
  Award,
  FolderKanban,
  Heart,
  Code2,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showDock, setShowDock] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down -> show Dock
        setShowDock(true);
      } else {
        // scrolling up -> hide Dock
        setShowDock(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Helper for smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Dock items
  const dockItems = [
    {
      icon: <Home size={24} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <Code2 size={24} />,
      label: "What I Do",
      onClick: () => scrollToSection("what-i-do"),
    },
    {
      icon: <User size={24} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Education",
      onClick: () => scrollToSection("education"),
    },
    {
      icon: <Award size={24} />,
      label: "Certification",
      onClick: () => scrollToSection("career"),
    },
    {
      icon: <FolderKanban size={24} />,
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      icon: <Mail size={24} />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div className="app-shell bg-background">
      <StripedBackground className={"fixed z-0 blur-xs"} />

      <ReactLenis root>
        <Header />

        <main className="page-main">
          <div className="page-container bg-transparent w-full max-w-6xl px-4 lg:rounded-3xl backdrop-blur-xl border-gray-100 dark:border-gray-900">
            <div className="page-sections z-10">
            {/* Give IDs to sections */}
            <div id="home">
              <HeroSection />
            </div>
            <WhatIDoSection />
            <div id="about">
              <AboutSection />
            </div>
            <div id="education">
              <EducationSection />
            </div>
            <div id="career">
              <CareerTimeline />
            </div>
            <div id="projects">
              <ProjectsSection />
            </div>
            </div>
          </div>
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Rizki Adhatilla Yusa. All rights reserved.</p>
          <p className="site-footer-made">Made with <Heart size={12} /> using React &amp; TypeScript.</p>
        </footer>

        {/* Dock with smooth show/hide animation */}
        <AnimatePresence>
          {showDock && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-[999] max-w-[calc(100vw-16px)]"
            >
              <Dock
                items={dockItems}
                position="bottom"
                magnification={70}
                baseItemSize={50}
                className="portfolio-dock"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ReactLenis>

      {/* <SmoothCursor /> */}
    </div>
  );
}

export default App;
