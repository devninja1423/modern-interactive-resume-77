
import React from 'react';
import { Award, Trophy, Star, BookOpen, Users, Code, Zap } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Head of Fusion Tech Club",
      description: "Successfully leading knowledge sharing initiatives and organizing technical workshops for the tech community.",
      icon: Users,
      category: "Leadership",
      year: "2024",
      color: "text-portfolio-emerald",
      bgColor: "bg-portfolio-emerald/20",
      borderColor: "border-portfolio-emerald/30"
    },
    {
      title: "Published Research Author",
      description: "Published research paper on 'Internet Of Things in Futuristic Trends in IoT' (ISBN – 978-93-6252-786-8) in IIP Proceedings.",
      icon: BookOpen,
      category: "Research",
      year: "2023",
      color: "text-portfolio-cyan",
      bgColor: "bg-portfolio-cyan/20",
      borderColor: "border-portfolio-cyan/30"
    },
    {
      title: "Android Workshop Facilitator",
      description: "Conducted comprehensive Android App Development workshops for 300+ students with 25% increase in club participation.",
      icon: Code,
      category: "Education",
      year: "2023-2024",
      color: "text-portfolio-blue",
      bgColor: "bg-portfolio-blue/20",
      borderColor: "border-portfolio-blue/30"
    },
    {
      title: "Full-Stack Developer",
      description: "Developed multiple production-ready applications including Eventure and O2 Plants using modern web technologies.",
      icon: Zap,
      category: "Development",
      year: "2021-Present",
      color: "text-portfolio-purple",
      bgColor: "bg-portfolio-purple/20",
      borderColor: "border-portfolio-purple/30"
    },
    {
      title: "Academic Excellence",
      description: "Maintaining strong academic performance while pursuing Master's in Computer Applications at Osmania University.",
      icon: Star,
      category: "Academic",
      year: "2023-2025",
      color: "text-portfolio-pink",
      bgColor: "bg-portfolio-pink/20",
      borderColor: "border-portfolio-pink/30"
    },
    {
      title: "Community Impact",
      description: "Fostering collaboration and continuous learning through tech workshops and knowledge sharing sessions.",
      icon: Trophy,
      category: "Community",
      year: "Ongoing",
      color: "text-portfolio-emerald",
      bgColor: "bg-portfolio-emerald/20",
      borderColor: "border-portfolio-emerald/30"
    }
  ];

  const certifications = [
    {
      name: "Research Publication",
      issuer: "IIP Proceedings",
      year: "2023",
      credential: "ISBN: 978-93-6252-786-8"
    },
    {
      name: "Workshop Leadership",
      issuer: "Fusion Tech Club",
      year: "2024",
      credential: "300+ Students Trained"
    },
    {
      name: "Technical Leadership",
      issuer: "Aurora's Post Graduate College",
      year: "2024",
      credential: "Knowledge Sharing Head"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Celebrating milestones in leadership, research, education, and community impact.
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${achievement.bgColor} ${achievement.borderColor} border mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${achievement.bgColor} ${achievement.color} border ${achievement.borderColor}`}>
                  {achievement.category}
                </span>
                <span className="text-gray-400 text-sm">{achievement.year}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                {achievement.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="glass-card p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <span className="gradient-text">Certifications & Credentials</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-portfolio-purple/30"
              >
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-portfolio-purple mr-2" />
                  <span className="text-gray-400 text-sm">{cert.year}</span>
                </div>
                
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-portfolio-cyan text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.credential}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "300+", label: "Students Trained", color: "text-portfolio-emerald" },
            { number: "4+", label: "Projects Completed", color: "text-portfolio-blue" },
            { number: "1", label: "Research Published", color: "text-portfolio-cyan" },
            { number: "25%", label: "Club Growth", color: "text-portfolio-purple" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
