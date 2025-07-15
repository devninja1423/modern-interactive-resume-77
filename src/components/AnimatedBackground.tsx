
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900 opacity-95" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute particle opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            <div 
              className="w-1 h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-cyan rounded-full"
              style={{
                transform: `scale(${0.8 + Math.random() * 2})`,
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Elegant gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-portfolio-purple/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-portfolio-blue/8 to-transparent rounded-full blur-3xl animate-bounce-slow" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-portfolio-cyan/6 to-transparent rounded-full blur-2xl floating-element" />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
    </div>
  );
};

export default AnimatedBackground;
