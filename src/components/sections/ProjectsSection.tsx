
import React from 'react';
import { ExternalLink, Github, Calendar, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Eventure - AI-Powered Event Management Platform",
      description: "A comprehensive event management system with AI-powered features for seamless event planning, registration, and management. Built with modern web technologies for optimal user experience.",
      technologies: ["React", "TypeScript", "Node.js", "Firebase", "AI/ML"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "https://github.com/MaanyaRajan",
      status: "In Development",
      category: "Full Stack"
    },
    {
      title: "O2 Plants Web Application",
      description: "An interactive web application focused on plant care and environmental awareness. Features modern UI/UX design with responsive layouts and engaging user interactions.",
      technologies: ["Vite", "React", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "https://github.com/MaanyaRajan",
      status: "Completed",
      category: "Frontend"
    },
    {
      title: "Android App Development Workshop",
      description: "Designed and conducted comprehensive Android development workshops for 300+ students, covering fundamental concepts to advanced app development techniques.",
      technologies: ["Android Studio", "Java", "XML", "Firebase"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#",
      status: "Workshop Series",
      category: "Education"
    },
    {
      title: "IoT Research Publication",
      description: "Published research paper on 'Internet Of Things in Futuristic Trends in IoT' contributing to academic knowledge in emerging IoT technologies and their applications.",
      technologies: ["IoT", "Research", "Technical Writing"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      demoLink: "#",
      githubLink: "#",
      status: "Published",
      category: "Research"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-portfolio-purple/20 text-portfolio-purple border-portfolio-purple/30';
      case 'Frontend':
        return 'bg-portfolio-blue/20 text-portfolio-blue border-portfolio-blue/30';
      case 'Education':
        return 'bg-portfolio-emerald/20 text-portfolio-emerald border-portfolio-emerald/30';
      case 'Research':
        return 'bg-portfolio-cyan/20 text-portfolio-cyan border-portfolio-cyan/30';
      default:
        return 'bg-portfolio-purple/20 text-portfolio-purple border-portfolio-purple/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my passion for creating impactful solutions through code, research, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-portfolio-cyan text-sm rounded-full border border-portfolio-cyan/30 hover:bg-portfolio-cyan/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-portfolio-purple/30 text-portfolio-purple hover:bg-portfolio-purple/10"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-portfolio-cyan/30 text-portfolio-cyan hover:bg-portfolio-cyan/10"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-portfolio-purple to-portfolio-cyan hover:from-portfolio-purple/80 hover:to-portfolio-cyan/80 text-white border-0"
            onClick={() => window.open('https://github.com/MaanyaRajan', '_blank')}
          >
            <Github size={20} className="mr-2" />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
