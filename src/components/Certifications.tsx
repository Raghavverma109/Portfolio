
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certificates = [
    {
      title: 'Smart India Hackathon 2024',
      issuer: 'Ministry of Education, Government of India',
      date: 'December, 2024',
      description: 'Participation in the Grand Finale of Smart India Hackathon 2024 held on December 11–12',
      image: '/images/SIH24.jpg', // Make sure to replace this with the correct image path
      link: '#' // You can replace this with a certificate verification link if available
    },

    {
      title: 'Core Java Course',
      issuer: 'Softpro India Computer Limited',
      date: 'April,2024',
      description: 'Comprehensive Java programming fundamentals and OOP concepts',
      image: '/images/Java.jpg',
      link: '#'
    },
    {
      title: 'Adobe Coding Interview Questions',
      issuer: 'Codechef',
      date: 'Dec,2024',
      description: 'Advanced DSA Questions and best practices',
      image: '/images/codeChef.jpg',
      link: '#'
    },
    {
      title: 'API 101 using Postman',
      issuer: 'SoarX',
      date: 'April, 2024',
      description: 'Participation in API 101 using Postman organized by SoarX and Postman Student Leader',
      image: '/images/postman.png',
      link: '#' // Replace with actual certificate verification link if needed
    },
    // {
    //   title: 'Full Stack Web Development',
    //   issuer: 'Online Course',
    //   date: '2024',
    //   description: 'Complete MERN stack development course with practical projects',
    //   image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    //   link: '#'
    // },
    // {
    //   title: 'Data Structures & Algorithms',
    //   issuer: 'Coding Platform',
    //   date: '2024',
    //   description: 'Advanced problem-solving and algorithmic thinking certification',
    //   image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    //   link: '#'
    // }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continuous learning through professional certifications and courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-68 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {cert.date}
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cert.description}</p>

                <a
                  href={cert.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
