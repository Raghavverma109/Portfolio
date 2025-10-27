
import React from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate MERN-Stack Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a B.Tech Computer Science student with a strong foundation in full-stack development 
              and a passion for creating innovative solutions. Currently maintaining an 8.0 CGPA while 
              actively working on projects that make a real-world impact.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve meaningful problems. 
              From developing AI-driven agricultural solutions to creating user-friendly web applications, 
              I enjoy the entire process of bringing ideas to life through code.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you'll find me participating in hackathons, solving algorithmic challenges, 
              or exploring the latest developments in web technologies and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">8.0 CGPA</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
