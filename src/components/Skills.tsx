import React from 'react';
import TechStack3D from './TechStack3D';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++','Python','JavaScript','TypeScript'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend ',
      skills: [ 'HTML5', 'CSS3','JavaScript','Tailwind CSS '],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Framework / Libraries ',
      skills: ['ReactJS', 'Next.js', 'React native', 'Bootstrap', 'Material UI'],
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Backend ',
      skills: ['Node.js', 'Express.js','Supabase', 'RESTful APIs','Socket.IO'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL','PostgreSQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub','Postman','Docker', 'Vercel','Render'],
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

        <div className="mb-16 relative">
          <TechStack3D />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full shadow-md pointer-events-none animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-6-6m0 0l6-6m-6 6h12" />
            </svg>
            <span className="text-xs font-semibold text-gray-600 tracking-wide">Drag to rotate &amp; explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6m0 0l-6-6m6 6H3" />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} transition-all duration-300 group-hover:h-2`}></div>
              
              <div className="p-8 pt-10">
                <h4 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-700 hover:bg-white hover:border-gray-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
