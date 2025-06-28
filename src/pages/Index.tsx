
import React from 'react';
import Navigation from '../components/Navigation';
import NetworkBackground from '../components/NetworkBackground';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import { Github, Linkedin, Mail, Phone, Radius } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <NetworkBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
              <div className="animate-fade-in">
                <p className="text-lg text-gray-600 mb-4">Hi There,</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  I'm <span className="text-blue-600">Raghav</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-orange-500">Verma</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  I Am Into <span className="text-red-600 font-semibold">Full-Stack Development</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold 
                             hover:bg-yellow-500 transform hover:-translate-y-1 transition-all duration-300 
                             shadow-lg hover:shadow-xl"
                  >
                    My Projects ⚡
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold 
                             hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="https://github.com/Raghavverma109/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center 
                             hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="raghav.verma.3262@gmail.com"
                    className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center 
                             hover:bg-yellow-500 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raghav-verma-71870627a/"
                    className="w-12 h-12 bg-[#0a66c2] text-white rounded-full flex items-center justify-center 
                             hover:bg-yellow-500 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="tel:+919773829247"
                    className="w-12 h-12 bg-blue-600 text-black rounded-full flex items-center justify-center 
                             hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image Placeholder */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 
                              flex items-center justify-center shadow-2xl animate-float">
                  <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-white flex items-center justify-center">
                    <div className="text-8xl rounded-full" >
                      <img src="../../public/DP.jpg" alt="Raghav photo" className='rounded-full' />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg 
                              flex items-center justify-center shadow-lg animate-float"
                     style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">⚛️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-lg 
                              flex items-center justify-center shadow-lg animate-float"
                     style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💻</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue-400 rounded-lg 
                              flex items-center justify-center shadow-lg animate-float"
                     style={{ animationDelay: '1.5s' }}>
                  <span className="text-xl">🚀</span>
                </div>
              </div>
            </div>
          </div>

    
        </div>
      </section>

      {/* All other sections */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
