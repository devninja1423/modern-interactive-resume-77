
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Detail-oriented Software Developer & Tech Leader";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container text-center z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Hello, I'm{' '}
              <span className="gradient-text">Maanya Rajan</span>
            </h1>
            
            {/* Animated typing text */}
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                {displayText}
                <span className="typing-cursor">|</span>
              </p>
            </div>
          </div>

          {/* Mission statement */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 leading-relaxed">
              Passionate about building scalable, user-focused solutions and leading tech initiatives. 
              I combine technical expertise with creativity to solve real-world problems effectively, 
              fostering collaboration and continuous learning in every project.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:from-portfolio-blue hover:to-portfolio-cyan transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-portfolio-purple/50 text-portfolio-purple hover:bg-portfolio-purple/10 hover:border-portfolio-purple transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://github.com/MaanyaRajan', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-portfolio-blue/50 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-blue transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://linkedin.com/in/maanya-rajan', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-portfolio-cyan/50 text-portfolio-cyan hover:bg-portfolio-cyan/10 hover:border-portfolio-cyan transition-all duration-300 hover:scale-105"
                onClick={() => window.open('mailto:maanyarajan9@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button onClick={scrollToNext} className="text-white/70 hover:text-white transition-colors duration-300" aria-label="Scroll to next section">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-portfolio-purple/20 to-portfolio-blue/20 floating-element" />
      <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-portfolio-cyan/20 to-portfolio-emerald/20 animate-float" style={{
        animationDelay: '1s'
      }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-portfolio-pink/20 to-portfolio-purple/20 floating-element" style={{
        animationDelay: '2s'
      }} />
    </section>
  );
};

export default HeroSection;
