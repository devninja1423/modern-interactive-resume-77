
import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-portfolio-purple",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C & C++", level: 75 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: Server,
      color: "text-portfolio-blue",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Shadcn-UI", level: 85 },
        { name: "Vite", level: 82 }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-portfolio-cyan",
      skills: [
        { name: "SQL Database", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Google Firebase", level: 82 }
      ]
    },
    {
      title: "Mobile & Frameworks",
      icon: Smartphone,
      color: "text-portfolio-emerald",
      skills: [
        { name: "Android Development", level: 75 },
        { name: "Node.js", level: 78 },
        { name: "Vercel Deployment", level: 85 },
        { name: "Microsoft Office", level: 88 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Specialized Knowledge",
      icon: Palette,
      color: "text-portfolio-pink",
      skills: [
        { name: "OOPS Concepts", level: 85 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Unix Systems", level: 75 },
        { name: "Distributed Systems", level: 70 },
        { name: "Cyber Security", level: 72 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Globe,
      color: "text-portfolio-purple",
      skills: [
        { name: "Leadership", level: 92 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Collaboration", level: 88 },
        { name: "Adaptability", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills developed through academic coursework and hands-on projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-8 hover-lift group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-white/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white ml-4 group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r ${
                          categoryIndex % 3 === 0 
                            ? 'from-portfolio-purple to-portfolio-blue'
                            : categoryIndex % 3 === 1
                            ? 'from-portfolio-blue to-portfolio-cyan'
                            : 'from-portfolio-cyan to-portfolio-emerald'
                        } rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="gradient-text">Additional Technologies</span> & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['DBMS', 'Unix', 'Distributed Systems', 'Cyber Security', 'Time Management', 'Critical Thinking', 'Innovation', 'Research'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-portfolio-purple/50 hover:text-portfolio-purple transition-all duration-300 hover:scale-105 cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
