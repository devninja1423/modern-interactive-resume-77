
import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Knowledge Sharing Head",
      company: "Fusion Tech Club",
      location: "Hyderabad, India",
      period: "Current",
      description: "Leading knowledge sharing initiatives and organizing technical workshops. Successfully conducted Android App Development workshops for 300+ students, resulting in 25% increase in club participation.",
      technologies: ["Leadership", "Workshop Management", "Android Development", "Team Coordination"],
      type: "leadership",
      achievements: [
        "Led knowledge sharing initiatives for tech community",
        "Organized workshops for 300+ students",
        "Achieved 25% increase in club participation",
        "Fostered collaboration and continuous learning"
      ]
    },
    {
      title: "Author & Researcher",
      company: "IIP Proceedings",
      location: "Remote",
      period: "2023",
      description: "Published research paper on 'Internet Of Things in Futuristic Trends in IoT' (ISBN – 978-93-6252-786-8), contributing to academic knowledge in emerging IoT technologies.",
      technologies: ["Research", "Technical Writing", "IoT", "Academic Publishing"],
      type: "research",
      achievements: [
        "Published research on IoT futuristic trends",
        "Contributed to academic IoT knowledge base",
        "ISBN: 978-93-6252-786-8",
        "Explored emerging IoT technologies"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      location: "Hyderabad, India",
      period: "2021 - Present",
      description: "Developed multiple full-stack applications including Eventure (Event Management System) and O2 Plants web application, focusing on user experience and modern web technologies.",
      technologies: ["React", "TypeScript", "Node.js", "Firebase", "Vite", "Tailwind CSS"],
      type: "development",
      achievements: [
        "Developed Eventure event management system",
        "Created O2 Plants web application",
        "Focused on modern web technologies",
        "Emphasized user experience design"
      ]
    }
  ];

  const getCardColor = (type: string) => {
    switch (type) {
      case 'leadership':
        return 'from-portfolio-emerald/20 to-portfolio-emerald/5';
      case 'research':
        return 'from-portfolio-cyan/20 to-portfolio-cyan/5';
      case 'development':
        return 'from-portfolio-purple/20 to-portfolio-purple/5';
      default:
        return 'from-portfolio-purple/20 to-portfolio-blue/5';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'leadership':
        return 'text-portfolio-emerald';
      case 'research':
        return 'text-portfolio-cyan';
      case 'development':
        return 'text-portfolio-purple';
      default:
        return 'text-portfolio-purple';
    }
  };

  return (
    <section id="experience" className="py-20 relative dark-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in software development, research, and tech leadership, building solutions that impact hundreds of users.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`glass-card p-8 hover-lift bg-gradient-to-br ${getCardColor(exp.type)} border-l-4 border-l-portfolio-purple`}>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left column - Main info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-black/20 ${getIconColor(exp.type)} group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-portfolio-blue font-semibold mb-3">
                          {exp.company}
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-white font-semibold mb-3">Technologies & Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/20 text-portfolio-cyan text-sm rounded-full border border-portfolio-cyan/30 hover:bg-portfolio-cyan/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column - Achievements */}
                  <div className="space-y-4">
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-portfolio-emerald" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-portfolio-emerald rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
