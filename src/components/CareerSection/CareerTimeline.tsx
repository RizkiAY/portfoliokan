import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { GraduationCap, Award } from "lucide-react";
import "../AboutSection/PortfolioSections.css";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Training",
      title: "Web Programming Advance",
      subtitle: "Mediatama Web Indonesia",
      description: "Completed advanced web programming training covering modern web development, programming logic, and implementation of more complex website features.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "TOEFL ITP · ETS",
      title: "TOEFL ITP Score: 547",
      subtitle: "Educational Testing Service",
      description: "Achieved a score of 547 across Listening Comprehension, Structure and Written Expression, and Reading Comprehension.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "TOEFL ITP · ETC",
      title: "TOEFL ITP Score: 613",
      subtitle: "English Tutorial Centre",
      description: "Achieved a score of 613 across Listening Comprehension, Structure and Written Expression, and Reading Comprehension.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <section id="career" className="career-timeline-theme portfolio-section career-section">
      <div className="section-heading career-section-heading">
        <p className="section-eyebrow"><Award size={13} /> ACADEMIC &amp; PROFESSIONAL GROWTH</p>
        <div className="section-heading-row">
          <h2>Education<span>.</span></h2>
          <p className="section-lead">Academic milestones, professional training, and certifications that continue to shape my expertise.</p>
        </div>
      </div>
      <ScrollTimeline events={careerEvents} title="" subtitle="" animationOrder="staggered" cardAlignment="alternating" cardVariant="elevated" parallaxIntensity={0.15} revealAnimation="fade" progressIndicator={true} lineColor="bg-primary/20" activeColor="bg-primary" progressLineWidth={3} progressLineCap="round" />
    </section>
  );
};
