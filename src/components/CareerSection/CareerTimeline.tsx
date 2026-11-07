import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { GraduationCap, Award, Code, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "August 2024 – January 2025",
      title: "Junior Web Programmer Training",
      subtitle: "Mediatama Web Indonesia",
      description: "Completed web programming training focused on CRUD development with Native PHP and Bootstrap, including an online e-commerce website project.",
      icon: <Code className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Certification",
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
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "TOEFL ITP · ETC",
      title: "TOEFL ITP Score: 613",
      subtitle: "English Tutorial Centre",
      description: "Achieved a score of 613 across Listening Comprehension, Structure and Written Expression, and Reading Comprehension.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "August 2021 – May 2026",
      title: "Bachelor of Informatics Engineering",
      subtitle: "Universitas Putra Indonesia YPTK Padang",
      description: "Graduated with a GPA of 3.47/4.00 and a concentration in Artificial Intelligence.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return <div id="career" className="career-timeline-theme"><ScrollTimeline events={careerEvents} title="Education & Certifications" subtitle="Academic background, professional training, and certifications" animationOrder="staggered" cardAlignment="alternating" cardVariant="elevated" parallaxIntensity={0.15} revealAnimation="fade" progressIndicator={true} lineColor="bg-primary/20" activeColor="bg-primary" progressLineWidth={3} progressLineCap="round" /></div>;
};
