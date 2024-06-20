// BackToTop.js

import React, { useState, useEffect } from 'react';
import './BackToTop.css'; 

const BackToTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`back-to-top ${showArrow ? 'visible' : ''}`} onClick={scrollToTop}>
      ↑
    </div>
  );
};

export default BackToTop;
