
import React from 'react';
import { Trophy, Code, Award, BookOpen } from 'lucide-react';

const Experience = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Smart India Hackathon 2024 - Finalist',
      subtitle: 'Top 5 Runner-up',
      description: 'Secured top position among 500+ teams for solving challenging problem statement',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Code,
      title: 'LeetCode Progress',
      subtitle: '190+ Problems Solved',
      description: 'Consistent problem-solving in Data Structures and Algorithms',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      title: 'Hackathon Participation',
      subtitle: 'Multiple Events',
      description: 'Active participant in various hackathons and coding competitions',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const coursework = [
    'Operating System',
    'Data Structure and Algorithm',
    'Computer Networks',
    'Object Oriented Programming',
    'Discrete Structure and Theory of Logic'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <achievement.icon className={achievement.color} size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-blue-600 font-semibold mb-3">{achievement.subtitle}</p>
                <p className="text-gray-600">{achievement.description}</p>
                
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Experience</h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6">
                <Code className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Developer</h4>
                <p className="text-blue-600 font-semibold mb-4">Project-based Experience</p>
                <p className="text-gray-600 leading-relaxed">
                  Gained hands-on experience working on full-stack projects, developing both frontend and backend solutions. 
                  Focused on creating scalable web applications using modern technologies like React, Node.js, and MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Relevant Coursework</h3>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                  <BookOpen className="text-blue-600 mr-3" size={16} />
                  <span className="text-gray-700 font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
