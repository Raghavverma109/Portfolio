import React from 'react';
import TechStack3D from './TechStack3D';
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from '@/components/ui/scroll-based-velocity';
import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiTailwindcss,
  SiReact, SiNextdotjs, SiBootstrap, SiMui,
  SiNodedotjs, SiExpress, SiSupabase, SiSocketdotio,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiPostman, SiDocker, SiVercel,
} from 'react-icons/si';

const Skills = () => {
  // Row 1: Languages + Frontend
  const row1 = [
    { icon: SiC, label: 'C', color: '#A8B9CC' },
    { icon: SiCplusplus, label: 'C++', color: '#00599C' },
    { icon: SiPython, label: 'Python', color: '#3776AB' },
    { icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
    { icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, label: 'CSS3', color: '#1572B6' },
    { icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
  ];

  // Row 2: Frameworks / Libraries
  const row2 = [
    { icon: SiReact, label: 'ReactJS', color: '#61DAFB' },
    { icon: SiNextdotjs, label: 'Next.js', color: '#000000' },
    { icon: SiReact, label: 'React Native', color: '#61DAFB' },
    { icon: SiBootstrap, label: 'Bootstrap', color: '#7952B3' },
    { icon: SiMui, label: 'Material UI', color: '#007FFF' },
    { icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
    { icon: SiExpress, label: 'Express.js', color: '#000000' },
    { icon: SiSupabase, label: 'Supabase', color: '#3ECF8E' },
    { icon: SiSocketdotio, label: 'Socket.IO', color: '#010101' },
  ];

  // Row 3: Databases + Tools
  const row3 = [
    { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
    { icon: SiMysql, label: 'SQL', color: '#4479A1' },
    { icon: SiPostgresql, label: 'PostgreSQL', color: '#4169E1' },
    { icon: SiGit, label: 'Git', color: '#F05032' },
    { icon: SiGithub, label: 'GitHub', color: '#181717' },
    { icon: SiPostman, label: 'Postman', color: '#FF6C37' },
    { icon: SiDocker, label: 'Docker', color: '#2496ED' },
    { icon: SiVercel, label: 'Vercel', color: '#000000' },
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

        <div className="relative">
          <ScrollVelocityContainer className="gap-y-8">
            <ScrollVelocityRow baseVelocity={12} direction={1}>
              {row1.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mx-3 select-none">
                  <Icon style={{ color }} className="w-7 h-7 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={12} direction={-1}>
              {row2.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mx-3 select-none">
                  <Icon style={{ color }} className="w-7 h-7 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={12} direction={1}>
              {row3.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 mx-3 select-none">
                  <Icon style={{ color }} className="w-7 h-7 shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
