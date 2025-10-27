
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certificates = [
    {
      title: 'Smart India Hackathon 2024',
      issuer: 'Ministry of Education, Government of India',
      date: 'December, 2024',
      description: 'Participation in the Grand Finale of Smart India Hackathon 2024 held on December 11–12',
      image: 'images/SIH24.jpg', // Make sure to replace this with the correct image path
      link: '#' // You can replace this with a certificate verification link if available
    },
    {
      title: 'Certificate of Internship', // The title on the certificate
      issuer: 'OutriX', // The issuing organization
      date: 'Oct 1, 2025', // The completion date of the internship
      description: 'Successfully completed 1 Month Internship as a MERN Stack Developer at OutriX (Sep 1 – Oct 1, 2025). The remote internship included hands-on training, project work, and skill enhancement.', // Detailed description summarizing the role and duration
      image: 'images/OutriX_Internship.jpg', // Placeholder: Update this with your certificate image path
      link: '#' // You can replace this with the certificate reference link if OutriX provided a verification page (Ref: OX925MD379)
    },
    {
      title: 'AWS Essentials: A Complete Beginner\'s Guide', // Title of the course 
      issuer: 'Udemy', // Issuing platform 
      date: 'Aug. 9, 2025', // Completion date 
      description: 'Completed a 5.5 total hour course covering AWS essentials for beginners, instructed by Learnify IT.', // Detailed description 
      image: 'images/AWS_Essentials.jpg', // Placeholder: Update this with your AWS certificate image path
      link: 'ude.my/UC-1a53cfbc-3332-4e19-81b2-7086eb0856c2' // Certificate verification URL 
    },
    {
      title: 'Introduction to Deep Learning', // Title of the course [cite: 5]
      issuer: 'Infosys Springboard', // Issuing platform [cite: 7]
      date: 'September 25, 2025', // Completion date [cite: 6, 9]
      description: 'Successfully completed the Introduction to Deep Learning course provided by Infosys Springboard.', // Detailed description
      image: 'images/Infosys_DeepLearning.jpg', // Placeholder: Update this with your certificate image path
      link: 'https://verify.onwingspan.com' // Verification link (as indicated by the QR code text) [cite: 10]
    },

    {
      title: 'Core Java Course',
      issuer: 'Softpro India Computer Limited',
      date: 'April,2024',
      description: 'Comprehensive Java programming fundamentals and OOP concepts',
      image: 'images/Java.jpg',
      link: '#'
    },
    {
      title: 'Adobe Coding Interview Questions',
      issuer: 'Codechef',
      date: 'Dec,2024',
      description: 'Advanced DSA Questions and best practices',
      image: 'images/codeChef.jpg',
      link: '#'
    },
    {
      title: 'API 101 using Postman',
      issuer: 'SoarX',
      date: 'April, 2024',
      description: 'Participation in API 101 using Postman organized by SoarX and Postman Student Leader',
      image: 'images/postman.png',
      link: '#' // Replace with actual certificate verification link if needed
    },
  {
  title: 'Postman API Fundamentals Student Expert', // Title of the certification [cite: 17]
  issuer: 'Postman', // Issuing organization [cite: 22, 23]
  date: 'July 13, 2025', // Awarded date [cite: 20, 21]
  description: 'Certified in API Fundamentals, demonstrating expertise in utilizing Postman for API testing, design, and documentation.', // Detailed description
  image: 'images/Postman_API_Fundamentals_Badge.png', // Placeholder: Update this with the path to your badge image   [cite_start]link: 'https://postman.com' // Link to the issuer's website or a verification page (if available) [cite: 13]
},
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
