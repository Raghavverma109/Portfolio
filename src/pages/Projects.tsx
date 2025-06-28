
import React from 'react';
import Navigation from '../components/Navigation';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sustainable Fertilizer Usage Optimizer',
      description: 'AI-driven solution recommending optimal fertilizer types based on soil health, crop type, and weather patterns with IoT hardware integration.',
      tech: ['React Native', 'AI/ML', 'Power BI', 'MongoDB', 'IoT Sensors'],
      features: [
        'NPK sensor-embedded vending machine hardware',
        'Real-time soil analysis and crop recommendations',
        'Government administrative dashboard',
        'Multi-district nutrient deficiency tracking'
      ],
      gradient: 'from-green-400 to-blue-500'
    },
    {
      title: 'Wanderlust',
      description: 'Full-stack travel platform built with MERN stack for listing and booking hotels globally with interactive user interface.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      features: [
        'Global hotel listing and search functionality',
        'User authentication and booking system',
        'Responsive design with Bootstrap',
        'RESTful API architecture'
      ],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Node Hotel Application',
      description: 'RESTful web application for hotel management with complete CRUD operations and role-based access control.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Passport.js', 'bcrypt'],
      features: [
        'Staff and menu item management',
        'Role-based access (chef, waiter, manager)',
        'Secure authentication with bcrypt',
        'Custom data models with validations'
      ],
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development, 
              AI/ML integration, and modern web technologies.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
