
import React from 'react';
import Navigation from '../components/Navigation';
import { GraduationCap, Award, Code } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
            
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Full-Stack Developer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full-Stack Developer with experience in building modern web applications. 
                Currently pursuing B.Tech in Computer Science Engineering with Data Science specialization, 
                I love creating innovative solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in technology spans across various domains including web development, 
                mobile applications, and machine learning. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <GraduationCap className="text-blue-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-600">B.Tech CSE (Data Science) - 8.0 CGPA</p>
                <p className="text-sm text-gray-500">ABES Institute of Technology</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Code className="text-orange-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Coding</h3>
                <p className="text-gray-600">190+ Problems Solved on LeetCode</p>
                <p className="text-sm text-gray-500">Data Structures & Algorithms</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Award className="text-green-600 mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Achievement</h3>
                <p className="text-gray-600">Top 5 Runner-up in Smart India Hackathon</p>
                <p className="text-sm text-gray-500">Among 500+ teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
