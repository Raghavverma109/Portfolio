import React, { useRef, useEffect, useState, useCallback } from 'react';

const skillsData = [
  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', level: 5, description: 'Building modern web applications with React ecosystem' },
  { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-400', level: 5, description: 'Expert in ES6+, async programming, and modern JS frameworks' },
  { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-400', level: 4, description: 'Backend development, data analysis, and automation' },
  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-400', level: 4, description: 'Server-side JavaScript and API development' },
  { name: 'Database', icon: '🗄️', color: 'from-purple-400 to-pink-400', level: 4, description: 'SQL/NoSQL databases, optimization, and data modeling' },
  { name: 'Cloud', icon: '☁️', color: 'from-blue-300 to-indigo-400', level: 3, description: 'AWS, Azure, containerization, and cloud architecture' },
  { name: 'AI/ML', icon: '🤖', color: 'from-orange-400 to-red-400', level: 3, description: 'Machine learning algorithms and neural networks' },
  { name: 'Mobile', icon: '📱', color: 'from-pink-400 to-purple-400', level: 3, description: 'React Native and cross-platform mobile development' },
  { name: 'DevOps', icon: '🔧', color: 'from-gray-400 to-blue-400', level: 3, description: 'CI/CD, Docker, Kubernetes, and deployment automation' },
  { name: 'UI/UX', icon: '🎨', color: 'from-purple-500 to-pink-500', level: 4, description: 'User interface design and user experience optimization' },
];

const Skills3D = () => {
  const containerRef = useRef(null);
  const [mouseRotation, setMouseRotation] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(0.5);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  // Responsive sizing calculations
  const getResponsiveSize = useCallback(() => {
    const minSize = Math.min(screenSize.width, screenSize.height);
    if (minSize < 480) return { container: 300, card: 80, radius: 180 }; // Mobile
    if (minSize < 768) return { container: 400, card: 100, radius: 220 }; // Tablet
    if (minSize < 1024) return { container: 500, card: 120, radius: 280 }; // Small desktop
    return { container: 600, card: 140, radius: 340 }; // Large desktop
  }, [screenSize]);

  const sizes = getResponsiveSize();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMobile) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientY / innerHeight - 0.5) * (isMobile ? 20 : 40);
      const y = (e.clientX / innerWidth - 0.5) * (isMobile ? 40 : 80);
      setMouseRotation({ x: -x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!touchStart.x || !touchStart.y) return;
    
    const touch = e.touches[0];
    const deltaX = (touch.clientX - touchStart.x) / screenSize.width;
    const deltaY = (touch.clientY - touchStart.y) / screenSize.height;
    
    setMouseRotation({
      x: -deltaY * 60,
      y: deltaX * 120
    });
  };

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && !selectedSkill) {
        setAutoRotate((prev) => prev + animationSpeed);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [isHovered, animationSpeed, selectedSkill]);

  const handleSkillClick = (skill, index) => {
    setSelectedSkill(selectedSkill === index ? null : index);
    setAnimationSpeed(selectedSkill === index ? 0.5 : 0.1);
  };

  // Generate background particles based on screen size
  const particleCount = isMobile ? 30 : 80;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              width: isMobile ? '2px' : '4px',
              height: isMobile ? '2px' : '4px',
              backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#ffffff',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '40px 40px' : '60px 60px',
          }}
        />
      </div>

      {/* Central glow effect */}
      <div 
        className="absolute bg-gradient-radial from-black-500/30 to-transparent rounded-full blur-3xl animate-pulse"
        style={{
          width: sizes.container * 0.8,
          height: sizes.container * 0.8,
        }}
      />

      {/* 3D Skills Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setTouchStart({ x: 0, y: 0 })}
        className="relative cursor-pointer touch-none"
        style={{
          width: sizes.container,
          height: sizes.container,
          transform: `rotateX(${mouseRotation.x}deg) rotateY(${mouseRotation.y + autoRotate}deg)`,
          transformStyle: 'preserve-3d',
          transition: isHovered && !isMobile ? 'transform 0.2s ease-out' : 'none',
        }}
      >
        {skillsData.map((skill, i) => {
          const angle = (360 / skillsData.length) * i;
          const totalRotation = angle + autoRotate;
          const opacity = Math.cos(totalRotation * (Math.PI / 180)) * 0.4 + 0.7;
          const scale = Math.cos(totalRotation * (Math.PI / 180)) * 0.15 + 1;
          const isSelected = selectedSkill === i;

          return (
            <div
              key={i}
              onClick={() => handleSkillClick(skill, i)}
              className={`absolute rounded-2xl shadow-2xl border-2 cursor-pointer transform-gpu transition-all duration-500 ${
                isSelected ? 'border-white/80 z-20' : 'border-white/30'
              }`}
              style={{
                width: sizes.card,
                height: sizes.card,
                transform: `rotateY(${angle}deg) translateZ(${isSelected ? sizes.radius + 60 : sizes.radius}px) scale(${isSelected ? 1.2 : scale})`,
                transformStyle: 'preserve-3d',
                opacity: isSelected ? 1 : opacity,
                background: `linear-gradient(135deg, ${skill.color.split(' ').join(', ')})`,
              }}
            >
              {/* Skill card content */}
              <div className="w-full h-full flex flex-col items-center justify-center text-white relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent transform rotate-45 translate-x-full animate-pulse" />
                </div>
                
                {/* Icon */}
                <div 
                  className="mb-1 transform transition-transform duration-300 hover:scale-110"
                  style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}
                >
                  {skill.icon}
                </div>
                
                {/* Skill name */}
                <div 
                  className="font-bold text-center px-1 tracking-wide"
                  style={{ fontSize: isMobile ? '0.6rem' : '0.75rem' }}
                >
                  {skill.name}
                </div>
                
                {/* Skill level indicator */}
                <div className="mt-1 flex space-x-0.5">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className={`rounded-full ${
                        j < skill.level ? 'bg-white' : 'bg-white/30'
                      }`}
                      style={{
                        width: isMobile ? '3px' : '6px',
                        height: isMobile ? '3px' : '6px',
                      }}
                    />
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Selection glow effect */}
                {isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl animate-pulse" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced control panel */}
      <div className={`absolute ${isMobile ? 'bottom-4' : 'bottom-8'} left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/20`}>
        <button
          onClick={() => setAnimationSpeed(animationSpeed === 0 ? 0.5 : 0)}
          className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium px-2 py-1 rounded-full hover:bg-white/10"
        >
          {animationSpeed === 0 ? '▶️' : '⏸️'} {!isMobile && (animationSpeed === 0 ? 'Play' : 'Pause')}
        </button>
        <div className="w-px h-4 bg-white/20 my-auto" />
        <button
          onClick={() => setAnimationSpeed(prev => prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5)}
          className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium px-2 py-1 rounded-full hover:bg-white/10"
          disabled={animationSpeed === 0}
        >
          {animationSpeed === 0.5 ? '1x' : animationSpeed === 1 ? '2x' : '4x'}
        </button>
        {!isMobile && (
          <>
            <div className="w-px h-4 bg-white/20 my-auto" />
            <button
              onClick={() => setSelectedSkill(null)}
              className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium px-2 py-1 rounded-full hover:bg-white/10"
            >
              Reset
            </button>
          </>
        )}
      </div>

      {/* Enhanced skill details panel */}
      {selectedSkill !== null && (
        <div className={`absolute ${isMobile ? 'top-4 left-4 right-4' : 'top-8 left-8 max-w-sm'} bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-white/30 shadow-2xl`}>
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-2xl">{skillsData[selectedSkill].icon}</span>
            <div>
              <h3 className="text-white text-lg font-bold">{skillsData[selectedSkill].name}</h3>
              <div className="flex space-x-1 mt-1">
                {[...Array(5)].map((_, j) => (
                  <div
                    key={j}
                    className={`w-2 h-2 rounded-full ${
                      j < skillsData[selectedSkill].level ? 'bg-yellow-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            {skillsData[selectedSkill].description}
          </p>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-white/60 hover:text-white transition-colors duration-200 text-sm bg-white/10 px-3 py-1 rounded-full hover:bg-white/20"
          >
            ✕ Close
          </button>
        </div>
      )}

      {/* Mobile instruction hint */}
      {isMobile && !selectedSkill && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
          Tap skills to explore • Drag to rotate
        </div>
      )}

      {/* Performance indicator */}
      <div className="absolute top-4 right-4 text-white/40 text-xs">
        {skillsData.length} Skills
      </div>
    </div>
  );
};

export default Skills3D;