
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Aurora's Post Graduate College (Osmania University)",
      location: "Hyderabad, India",
      year: "Expected 2026",
      gpa: "Pursuing",
      description: "Currently pursuing advanced computer applications with focus on modern web technologies, software development, and active participation in tech clubs and workshops.",
      coursework: ["Advanced Programming", "Software Engineering", "Database Management", "Web Technologies"],
      type: "masters"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Bhavan's Vivekananda College",
      location: "Hyderabad, India",
      year: "2021 - 2024",
      gpa: "Good Standing",
      description: "Built strong foundation in computer science principles through active participation in tech clubs, programming competitions, and development of multiple software projects.",
      coursework: ["Programming Fundamentals", "Data Structures", "Web Development", "Database Systems"],
      type: "bachelors"
    },
    {
      degree: "TSBIE (Telangana State Board of Intermediate Education)",
      institution: "St. Ann's Junior College",
      location: "Hyderabad, India",
      year: "2019 - 2021",
      gpa: "Completed",
      description: "Established solid academic foundation in mathematics and sciences with early interest in computer programming and participation in various academic competitions.",
      coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
      type: "intermediate"
    }
  ];

  return (
    <section id="education" className="py-20 relative dark-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Education</span> Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic foundation in computer science and continuous learning journey from Hyderabad, India.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-purple via-portfolio-blue to-portfolio-cyan"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan rounded-full border-4 border-black z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-8 hover-lift group">
                    {/* Education type badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      edu.type === 'masters' 
                        ? 'bg-portfolio-purple/20 text-portfolio-purple'
                        : edu.type === 'bachelors'
                        ? 'bg-portfolio-blue/20 text-portfolio-blue' 
                        : 'bg-portfolio-cyan/20 text-portfolio-cyan'
                    }`}>
                      <GraduationCap size={12} className="mr-1" />
                      {edu.type === 'masters' ? 'Masters' : edu.type === 'bachelors' ? 'Bachelors' : 'Intermediate'}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-xl text-portfolio-blue font-semibold mb-4">
                      {edu.institution}
                    </h4>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {edu.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-black/20 text-portfolio-cyan text-sm rounded-full border border-portfolio-cyan/30 hover:bg-portfolio-cyan/10 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
