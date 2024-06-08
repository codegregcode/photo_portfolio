import { useState, useEffect } from 'react';

const usePageVisit = (key) => {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(key);
    if (visited) {
      setHasVisited(true);
    }
  }, [key]);

  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.setItem(key, 'true');
    };

    if (!hasVisited) {
      window.addEventListener('beforeunload', handleUnload);
      return () => {
        window.removeEventListener('beforeunload', handleUnload);
      };
    }

    return undefined;
  }, [key, hasVisited]);

  return hasVisited;
};

export default usePageVisit;
