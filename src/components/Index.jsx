import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IndexCard from './IndexCard';
import usePageVisit from '../hooks/usePageVisit';
import '../styles/index-component.css';

const Index = () => {
  const hasVisited = usePageVisit('index');
  const [isVisible, setIsVisible] = useState(false);

  const props1 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(-100px)',
    config: { tension: 400, friction: 20 },
    delay: hasVisited ? 0 : 800,
    immediate: hasVisited,
  });

  const props2 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
    config: { tension: 400, friction: 20 },
    delay: hasVisited ? 0 : 1600,
    immediate: hasVisited,
  });

  const props3 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(100px)',
    config: { tension: 400, friction: 20 },
    delay: hasVisited ? 0 : 2400,
    immediate: hasVisited,
  });

  const props4 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
    fontSize: 10,
    config: { tension: 400, friction: 20 },
    delay: hasVisited ? 0 : 3200,
    immediate: hasVisited,
  });

  const props5 = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0px)' : 'translateX(-100px)',
    fontSize: 10,
    config: { tension: 400, friction: 20 },
    delay: hasVisited ? 0 : 4000,
    immediate: hasVisited,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="index-component">
      <div className="index-text">
        <animated.p style={props1}>a photographer based in Leeds</animated.p>
        <animated.p style={props2}>mainly shooting film</animated.p>
        <a
          href="https://instagram.com/echium_photo"
          target="_blank"
          rel="noreferrer"
        >
          <animated.p style={props4} className="index-link">
            follow me on instagram
          </animated.p>
        </a>
        <a
          href="https://www.flickr.com/photos/200586606"
          target="_blank"
          rel="noreferrer"
        >
          <animated.p style={props5} className="index-link">
            or flickr
          </animated.p>
        </a>
        <animated.p style={props3}>see what i&apos;ve been up to:</animated.p>
      </div>
      <div className="index-cards">
        <IndexCard />
      </div>
    </div>
  );
};

export default Index;
