
import React from 'react';
import { Heart, Code, Lightbulb, Target, Users, Rocket } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    { icon: Code, label: 'Full-Stack Developer', color: 'text-portfolio-purple' },
    { icon: Heart, label: 'Passionate Creator', color: 'text-portfolio-pink' },
    { icon: Lightbulb, label: 'Problem Solver', color: 'text-portfolio-cyan' },
    { icon: Target, label: 'Detail-Oriented', color: 'text-portfolio-blue' },
    { icon: Users, label: 'Team Leader', color: 'text-portfolio-emerald' },
    { icon: Rocket, label: 'Innovation Driver', color: 'text-portfolio-purple' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Avatar and info */}
          <div className="space-y-8">
            <div className="relative">
              {/* Avatar placeholder with animated border */}
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-cyan rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-2 bg-portfolio-dark rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 rounded-full flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-white mb-4 gradient-text">My Story</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a detail-oriented software developer with a strong academic foundation and hands-on 
                experience in full-stack and modern web technologies. Currently pursuing my Master's in 
                Computer Applications at Aurora's Post Graduate College, Osmania University.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                As Head of Fusion Tech Club, I've led workshops for 300+ students, fostering collaboration 
                and continuous learning. I'm passionate about building scalable, user-focused solutions 
                like Eventure, an AI-powered event management platform.
              </p>
            </div>
          </div>

          {/* Right side - Personality traits */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
              What Drives <span className="gradient-text">Me</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <div
                  key={trait.label}
                  className="glass-card p-6 hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 ${trait.color}`}>
                      <trait.icon size={32} />
                    </div>
                    <span className="text-white font-medium text-lg">{trait.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission statement */}
            <div className="glass-card p-8 hover-lift mt-8">
              <h4 className="text-xl font-bold gradient-text mb-4">My Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                To combine technical expertise with creativity to solve real-world problems effectively, 
                while fostering innovation and continuous learning in every project I undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
