
import React from 'react';
import Skills3D from './Skills3D';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++',"Java",'Python','JavaScript','TypeScript ', '...so on'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend ',
      skills: [ 'HTML5', 'CSS3','JavaScript','Tailwind CSS '],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Framework / Libraries ',
      skills: ['ReactJS', 'Next.js', 'React native', 'Bootstrap'],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Backend ',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub','Postman', 'Vercel'],
      color: 'from-gray-600 to-gray-800'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Interactive Skills Showcase</h3>
          <Skills3D />
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 w-full bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h4>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center p-2 bg-white rounded-md hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
