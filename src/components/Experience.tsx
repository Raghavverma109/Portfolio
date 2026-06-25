import React, { useEffect } from 'react';
import { Trophy, Code, Award, BookOpen } from 'lucide-react';
import { FaCalendarAlt, FaBook, FaLinkedin } from 'react-icons/fa';
import AchievementCard from './AchievementCard';
import FlowingMenu from './FlowingMenu';
import './FlowingMenu.css';


const achievements = [
  {
    title: "Smart India Hackathon '24 Winner",
    description: "Secured a top 5 runner-up position among 500+ teams in the world's biggest hackathon.",
    imageUrl: '/images/SIH.jpg',
    readMoreLink: '#',
  },
  {
    title: 'LeetCode Progress',
    description: 'Consistent problem-solving with over 190+ Data Structures and Algorithms problems solved.',
    imageUrl: '/images/leetcode.png',
    readMoreLink: '#',
  },
  {
    title: 'Hackathon Participation',
    description: 'Active participant and winner in various hackathons and coding competitions.',
    imageUrl: '/images/hackathons.jpg',
    readMoreLink: '#',
  },
];

const academicData = [
  {
    title: "Bachelor's in Computer Science",
    institute: "ABES Institute of Technology, Ghaziabad",
    duration: "2022–2026",
    score: "8.1 CGPA",
    status: "Completed",
    // want to use two photos on each item
    image: '/images/college.jpg, /images/college.png',
    link: '#'
  },
  {
    title: "Senior Secondary School (CBSE)",
    institute: "Dharam Samaj Bal Mandir Senior Secondary School",
    duration: "2020–2022",
    score: "89%",
    status: "Completed",
    image: '/images/class12.jpeg, /images/class12th.jpg',
    link: '#'
  },
  {
    title: "High School (CBSE)",
    institute: "Dharam Samaj Bal Mandir Senior Secondary School",
    duration: "2018–2020",
    score: "85%",
    status: "Completed",
    image: '/images/class10.jpg, /images/class10.jpg',
    link: '#'
  },
];

const academicItems = academicData.map(item => ({
  link: item.link,
  text: item.title,
  image: item.image,
  institute: item.institute,
  duration: item.duration,
  score: item.score,
}));


const statusColors = {
  "Completed": "bg-purple-600",
  "On-Going": "bg-blue-400",
};

const Experience = () => {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;
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

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-t-3xl rounded-b-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex-shrink-0 flex items-center justify-center mr-6">
                  <Code className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Full Stack Developer Intern
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        SS Dynamics Solutions Pvt. Ltd.
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendarAlt className="mr-2" />
                        Feb 2026 – Present
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/posts/raghav-verma-71870627a_big-news-i-just-landed-my-first-job-ugcPost-7449877681900322816-VTjN?utm_source=share&utm_medium=member_android&rcm=ACoAAEQXoIQBe8BMxOlmn-VFbnrQB2d1ngEw520" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm font-semibold shadow-sm shrink-0">
                      <FaLinkedin size={18} />
                      View LinkedIn Post
                    </a>
                  </div>
                  <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                    <li>Built and enhanced 3+ web modules using MERN stack, improving UI responsiveness and performance.</li>
                    <li>Developed 2+ ERP dashboards using AL in Microsoft Dynamics 365 Business Central, handling business workflows and data reporting.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-t-3xl rounded-b-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center mr-6">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        MERN Stack Developer Intern
                      </h4>
                      <p className="text-blue-600 font-semibold mb-2">
                        OutriX
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendarAlt className="mr-2" />
                        Sep 2025 – Oct 2025
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/posts/raghav-verma-71870627a_mernstack-outrix-activity-7379918477861687297-8XYL?utm_source=share&utm_medium=member_android&rcm=ACoAAEQXoIQBe8BMxOlmn-VFbnrQB2d1ngEw520" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm font-semibold shadow-sm shrink-0">
                      <FaLinkedin size={18} />
                      View LinkedIn Post
                    </a>
                  </div>
                  <ul className="text-gray-600 leading-relaxed list-disc list-inside space-y-1">
                    <li>Developed full-stack MERN applications with a focus on backend and API design.</li>
                    <li>Led database schema design and implemented secure REST APIs.</li>
                    <li>Followed Agile methodology with sprint-based deliveries, collaborating with peers on code debugging.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center"> Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                imageUrl={achievement.imageUrl}
                readMoreLink={achievement.readMoreLink}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Academic Journey */}
      <div className="relative z-10 w-full mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic Journey</h3>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto px-4">
          Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
        </p>
        <div style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={academicItems}
            speed={15}
            textColor="#1e293b"
            bgColor="#f8fafc"
            marqueeBgColor="#0f172a"
            marqueeTextColor="#f8fafc"
            borderColor="#e2e8f0"
          />
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