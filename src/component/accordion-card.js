import React, { useState } from 'react';
//not using card
const AccordionCard = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-cards">
      {categories.map((category, index) => (
        <div key={index} className="accordion-card">
          <div className="accordion-card-header" onClick={() => toggleAccordion(index)}>
            <h3>{category.title}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-card-content">
              <p>{category.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionCard;
