
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maanyarajan9@gmail.com",
      link: "mailto:maanyarajan9@gmail.com",
      color: "text-portfolio-purple",
      description: "Drop me a line anytime"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/maanya-rajan",
      link: "https://linkedin.com/in/maanya-rajan",
      color: "text-portfolio-blue",
      description: "Let's connect professionally"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MaanyaRajan",
      link: "https://github.com/MaanyaRajan",
      color: "text-portfolio-cyan",
      description: "Check out my code"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      link: "#",
      color: "text-portfolio-emerald",
      description: "Based in the City of Pearls"
    }
  ];

  const quickActions = [
    {
      title: "Download Resume",
      description: "Get my latest resume",
      icon: Download,
      action: () => window.open('#', '_blank'),
      color: "from-portfolio-purple to-portfolio-blue"
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me",
      icon: Linkedin,
      action: () => window.open('https://linkedin.com/in/maanya-rajan', '_blank'),
      color: "from-portfolio-blue to-portfolio-cyan"
    },
    {
      title: "GitHub Projects",
      description: "View my repositories",
      icon: Github,
      action: () => window.open('https://github.com/MaanyaRajan', '_blank'),
      color: "from-portfolio-cyan to-portfolio-emerald"
    }
  ];

  return (
    <section id="contact" className="py-20 relative dark-section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate, discuss opportunities, or just say hello? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-lift group cursor-pointer text-center"
              onClick={() => info.link !== "#" && window.open(info.link, '_blank')}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/20 ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon size={24} />
              </div>
              
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              <p className="text-gray-400 text-sm mb-2">{info.description}</p>
              <p className="text-portfolio-cyan text-sm font-medium group-hover:gradient-text transition-all duration-300">
                {info.value}
              </p>
              
              {info.link !== "#" && (
                <ExternalLink size={14} className="inline-block mt-2 text-gray-500 group-hover:text-portfolio-purple transition-colors" />
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <span className="gradient-text">Quick Actions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={action.action}
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${action.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 border border-white/10 group-hover:border-white/20`}>
                  <div className="flex items-center mb-3">
                    <action.icon size={24} className="text-white mr-3" />
                    <h4 className="text-white font-semibold">{action.title}</h4>
                  </div>
                  <p className="text-gray-300 text-sm">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant CTA Section */}
        <div className="glass-card p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-portfolio-purple" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm always excited to collaborate on innovative projects, discuss new opportunities, 
              or simply connect with fellow developers and tech enthusiasts. Whether you're looking 
              for a dedicated developer, a research collaborator, or a tech leader, let's explore 
              the possibilities together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:from-portfolio-purple/80 hover:to-portfolio-blue/80 text-white border-0 px-8 py-3"
                onClick={() => window.location.href = 'mailto:maanyarajan9@gmail.com'}
              >
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="border-portfolio-cyan/30 text-portfolio-cyan hover:bg-portfolio-cyan/10 px-8 py-3"
                onClick={() => window.open('https://linkedin.com/in/maanya-rajan', '_blank')}
              >
                <Linkedin size={16} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-6">
            © 2024 Maanya Rajan. Crafted with passion using modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            {contactInfo.slice(0, 3).map((info, index) => (
              <button
                key={index}
                onClick={() => window.open(info.link, '_blank')}
                className={`p-3 rounded-full bg-black/20 ${info.color} hover:bg-black/30 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                <info.icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
