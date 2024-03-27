import React, { useState, useEffect } from 'react';
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
    if (isVisible) {
      journals.forEach((j, index) => {
        setTimeout(
          () => setIsVisible((prev) => ({ ...prev, [index]: true })),
          4000 + index * 200
        );
      });
    }
  }, [isVisible, journals]);

  return (
    <div className="index-card-component">
      {journals.map((journal, index) => (
        <animated.div
          key={journal.name}
          className="index-card"
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
      ))}
    </div>
  );
};

export default IndexCard;