import { useState, useEffect } from 'react';

const useAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAnimation =
      sessionStorage.getItem('show_landing_animation') !== '1';

    if (showAnimation) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('show_landing_animation', '1');
      }, 6000);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible;
};

export default useAnimation;
