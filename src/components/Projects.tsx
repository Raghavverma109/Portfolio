
import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

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
      image: 'https://lirp.cdn-website.com/95eb6d0c/dms3rep/multi/opt/92-+Fertilizer+Innovations+for+Climate-Smart+Agriculture+A+Sustainable+Future-1920w.jpg',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-green-400 to-blue-500'
    },
    {
  title: 'Krishi Seva',
  description: 'A smart agriculture platform that collects real-time soil data from vending machines deployed across multiple districts, enabling centralized analysis of nutrient deficiencies. The system empowers government officials and researchers with a dedicated administrative website to track soil health trends and make informed policy decisions.',
  tech: ['HTML','CSS','JavaScript', 'AI/ML', 'Power BI', 'MongoDB', 'IoT Sensors'],
  features: [
    'Government administrative dashboard for centralized soil health monitoring',
    'Automatic data upload from IoT-based vending machines located in various districts',
    'District-wise nutrient deficiency mapping and analysis tools for researchers',
    'Real-time insights into regional agricultural conditions for policymaking',
    'Support for large-scale data aggregation from multi-location deployments',
    'Improves decision-making for crop advisory and fertilizer distribution',
    'Backed by Krishi Seva: 50% more efficient crop advisory, 35% more farmer registrations, 25% better weather alerts'
  ],
  image: '/images/krishiseva.png',
  liveUrl: '#',
  githubUrl: '#',
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
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-purple-400 to-pink-500'
    },
//     {
//   title: 'CreatorHub Platform',
//   description: 'A powerful and modern web platform for content creators to publish, manage, and grow their audience with advanced tools, analytics, and collaboration features.',
//   tech: ['Node.js', 'Express.js', 'MongoDB', 'Vue.js', 'Tailwind CSS', 'JWT', 'EJS'],
//   features: [
//     'Secure user registration, login, and role-based access (creator/admin)',
//     'Content creation and management (blogs, videos, tutorials)',
//     'Rich-text editor and media uploads',
//     'Analytics dashboard to track views, engagement, and performance',
//     'Responsive and clean UI/UX for creators and viewers',
//     'Admin panel for approving content and managing users'
//   ],
//   image: 'https://images.unsplash.com/photo-1612277793319-6d02d98311b2?w=600&h=400&fit=crop',
//   liveUrl: '#', // Replace with actual deployment URL
//   githubUrl: 'https://github.com/YourUsername/creatorhub-platform', // Replace with your actual GitHub repo
//   gradient: 'from-yellow-500 to-pink-600'
// },
    {
      title: 'Voting Application',
      description: 'A secure and scalable voting system built with Node.js, enabling users to vote for candidates with real-time vote counts and authentication via Aadhar number.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
      features: [
        'User sign-up and login using Aadhar number and password',
        'Role-based access: admin and users',
        'Vote for candidates (once only)',
        'Live vote count route sorted by vote totals',
        'Admin-only candidate management',
        'Secure password handling and update functionality'
      ],
      image: 'https://www.soteria-int.com/wp-content/uploads/2020/04/Voting-App-article-hacking.png',
      liveUrl: '#', // If you deploy it later, update this
      githubUrl: 'https://github.com/Raghavverma109/voting_app',
      gradient: 'from-green-400 to-blue-500'
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
      image: 'https://korvage.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-02-at-10.24.45-AM-1024x384.jpeg',
      liveUrl: '#',
      githubUrl: '#',
      gradient: 'from-orange-400 to-red-500'
    },
{
  title: 'Smart ToDo App',
  description: 'An intelligent and voice-assisted ToDo web application built for productivity, allowing users to manage daily tasks seamlessly with an intuitive interface.',
  tech: ['React.js', 'Next.js', 'MongoDB', 'Tailwind CSS', 'JavaScript', 'Web Speech API'],
  features: [
    'User registration and login with JWT authentication',
    'Create, edit, delete, and mark tasks as completed',
    'Task filtering (completed / pending)',
    'Voice-assisted task addition using Web Speech API',
    'Responsive and minimalist UI for a smooth user experience'
  ],
  image: 'https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fwide%2Fheaderui.en.png',
  liveUrl: '#', // Add your deployment link if available
  githubUrl: 'https://github.com/Raghavverma109/smart-todo',
  gradient: 'from-purple-500 to-indigo-600'
}



  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development,
            AI/ML integration, and modern web technologies.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                      >
                        <Eye size={16} className="mr-2" />
                        Live Preview
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-900 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
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

                    <div className="mb-6">
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

                  {/* Action Buttons */}
                  {/* <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Eye size={18} className="mr-2" />
                      Live Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-800 text-gray-800 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
