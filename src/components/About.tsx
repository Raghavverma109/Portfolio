import React from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';
import AnimatedBeamMultipleOutputDemo from './AnimatedBeamMultipleOutputDemo';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies with hands-on experience in MERN stack development.'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Strong algorithmic thinking with 190+ problems solved on LeetCode and active participation in hackathons.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Proven ability to work in teams, as demonstrated by Top 5 finish in Smart India Hackathon among 500+ teams.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on creating impactful solutions that solve real-world problems, especially in sustainable technology.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Animated Beam — full-height background pinned to right edge of section */}
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2 pointer-events-none mr-0 md:mr-[5%] mt-[4%] select-none z-0 opacity-50">
        <AnimatedBeamMultipleOutputDemo className="w-full h-full" />
      </div>
    

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I recently completed my B.Tech in Computer Science in 2026 with a CGPA of 8.1,
              backed by a strong foundation in full-stack development and a passion for creating
              innovative solutions that make a real-world impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve meaningful problems.
              From developing AI-driven agricultural solutions to creating user-friendly web applications,
              I enjoy the entire process of bringing ideas to life through code.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me solving algorithmic challenges,
              or exploring the latest developments in web technologies and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">8.1 CGPA</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-800 font-semibold">190+ LeetCode</span>
              </div>
              <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 font-semibold">SIH-24 Finalist</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-end min-h-[500px] w-full">
            {/* Foreground Cards Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full opacity-60">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50 dark:border-gray-800/50 hover:bg-white/95 dark:hover:bg-gray-900/95 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <highlight.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
