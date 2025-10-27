import React, { useEffect } from 'react';
import { Trophy, Code, Award, BookOpen } from 'lucide-react';
import { FaCalendarAlt, FaBook } from 'react-icons/fa';


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

const academicData = [
  {
    title: "Bachelor's in Computer Science",
    institute: "ABES Institute of Technology",
    duration: "2022–2026",
    score: "7.98 CGPA",
    status: "On-Going",
  },
  {
    title: "Senior Secondary School (CBSE)",
    institute: "Dharam Samaj Bal Mandir Senior Secondary School",
    duration: "2020–2022",
    score: "89%",
    status: "Completed",
  },
  {
    title: "High School (CBSE)",
    institute: "Dharam Samaj Bal Mandir Senior Secondary School",
    duration: "2018–2020",
    score: "85%",
    status: "Completed",
  },
];

const statusColors = {
  "Completed": "bg-purple-600",
  "On-Going": "bg-blue-400",
};

const Experience = () => {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    const colors = [
      "rgb(34,197,94)", "rgb(59,130,246)", "rgb(236,72,153)",
      "rgb(245,158,11)", "rgb(139,92,246)"
    ];

    for (let i = 0; i < 40; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 8 + 8;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.style.position = "absolute";
      bubble.style.borderRadius = "50%";
      bubble.style.opacity = "0.3";
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;

      const xMove = Math.random() * 20 - 10;
      const yMove = Math.random() * 30 + 20;

      const duration = Math.random() * 10 + 8;
      bubble.style.animation = `floatBubble ${duration}s ease-in-out infinite`;
      bubble.style.setProperty('--x-move', `${xMove}px`);
      bubble.style.setProperty('--y-move', `-${yMove}px`);

      container.appendChild(bubble);
    }
  }, []);

  return (
    <section id="experience" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Bubble Background */}
      <div id="bubble-container" className="absolute inset-0 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Achievements */}
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

        {/* Professional Experience */}
      

<div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
    Professional Experience
  </h3>
  <div className="bg-white rounded-lg shadow-lg p-8">
    <div className="flex items-start">
      {/* Icon: Keeping the current style and icon (Code) for development */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6">
        <Code className="text-blue-600" size={24} />
      </div>
      <div>
        {/* Job Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          MERN Stack Developer Intern
        </h4>
        
        {/* Company and Dates */}
        <p className="text-blue-600 font-semibold mb-2">
          OutriX
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Sep 2025 – Oct 2025 (1 months)
        </p>

        {/* Bulleted Description */}
        <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-1">
          <li>
            Developed **full-stack MERN applications** with a strong focus on backend architecture and **REST API design**.
          </li>
          <li>
            **Led database schema design** for scalable features and implemented **secure APIs** using Express.js.
          </li>
          <li>
            Followed **Agile methodology** with sprint-based deliveries, actively collaborating with peers on code debugging and feature integration.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        {/* Academic Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Journey</h3>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {academicData.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-md p-6 border border-purple-100 hover:border-purple-300  transform transition duration-300  hover:scale-[1.10] hover:shadow-4xl hover:z-10"
                style={{
                  boxShadow:
                    item.status === "Completed"
                      ? "0 8px 30px rgba(139,92,246,0.2)"
                      : "0 8px 20px rgba(59,130,246,0.2)",
                }}
              >

                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.institute}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-3">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-blue-600" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaBook className="text-purple-600" />
                    {item.score}
                  </div>
                  <div
                    className={`ml-auto text-white px-3 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bubble Float Animation */}
      <style>
        {`
          @keyframes floatBubble {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(var(--x-move), var(--y-move)) scale(1.2); }
            100% { transform: translate(0, 0) scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;
