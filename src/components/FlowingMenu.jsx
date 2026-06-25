import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff'
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        setActiveIndex(null);
        return;
      }

      // Find the menu item closest to the center of the screen
      const menuWrap = document.querySelector('.menu');
      if (!menuWrap) return;

      const itemsList = menuWrap.querySelectorAll('.menu__item');
      let closestIdx = null;
      let minDistance = Infinity;
      const centerY = window.innerHeight / 2;

      itemsList.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        const itemCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      if (closestIdx !== null && minDistance < window.innerHeight * 0.35) {
        setActiveIndex(closestIdx);
      } else {
        setActiveIndex(null);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="menu-wrap" style={{ backgroundColor: 'transparent' }}>
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            speed={speed}
            textColor={textColor}
            bgColor={bgColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isActive={activeIndex === idx}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, speed, textColor, bgColor, marqueeBgColor, marqueeTextColor, borderColor, institute, duration, score, isActive }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const imageUrls = typeof image === 'string'
    ? image.split(',').map(s => s.trim()).filter(Boolean)
    : (Array.isArray(image) ? image : [image]);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;

      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee__part');
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  // Mobile scroll auto-hover logic
  useEffect(() => {
    if (window.innerWidth > 1024) return;

    if (isActive) {
      if (!marqueeRef.current || !marqueeInnerRef.current) return;
      gsap
        .timeline({ defaults: animationDefaults })
        .set(marqueeRef.current, { y: '-101%' }, 0)
        .set(marqueeInnerRef.current, { y: '101%' }, 0)
        .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    } else {
      if (!marqueeRef.current || !marqueeInnerRef.current) return;
      gsap
        .timeline({ defaults: animationDefaults })
        .to(marqueeRef.current, { y: '-101%' }, 0)
        .to(marqueeInnerRef.current, { y: '101%' }, 0);
    }
  }, [isActive, animationDefaults]);

  const handleMouseEnter = ev => {
    if (window.innerWidth <= 1024) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = ev => {
    if (window.innerWidth <= 1024) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor, backgroundColor: bgColor }}>
      <a
        className="menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {[...Array(repetitions)].map((_, idx) => (
              <div className="marquee__part" key={idx} style={{ color: marqueeTextColor }}>
                <div className="marquee__text-container">
                  <span className="marquee__span">{text}</span>
                  {(institute || duration) && (
                    <span className="marquee__details">
                      {institute}{institute && duration ? ' • ' : ''}{duration}
                    </span>
                  )}
                  {score && <span className="marquee__score">Score: {score}</span>}
                </div>
                <div
                  className="marquee__img"
                  style={{ backgroundImage: `url(${imageUrls[idx % imageUrls.length]})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
