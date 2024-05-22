import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import getJournals from '../firebase';
import '../styles/index-card.css';

const IndexCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const journalsData = await getJournals();
        journalsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setJournals(journalsData);
        setIsVisible(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJournals();
  }, []);

  useEffect(() => {
    if (isVisible && journals.length > 0) {
      journals.forEach((j, index) => {
        setTimeout(
          () => setIsVisible((prev) => ({ ...prev, [index]: true })),
          4800 + index * 200
        );
      });
    }
  }, [isVisible, journals]);

  return (
    <div className="index-card-component">
      {journals.map((journal, index) => (
        <Link key={journal.path} to={journal.path}>
          <animated.div
            className={`index-card ${index % 2 !== 0 ? 'odd' : 'even'}`}
            title={`take me to ${journal.name}`}
            style={{
              opacity: isVisible[index] ? 1 : 0,
              transform: isVisible[index]
                ? 'translateY(0px)'
                : 'translateY(600px)',
              transition: 'opacity 0.5s, transform 0.5s',
            }}
          >
            <img src={journal.thumb} alt={`${journal.name} thumb`} />
            <h5>{journal.name}</h5>
          </animated.div>
        </Link>
      ))}
    </div>
  );
};

export default IndexCard;
