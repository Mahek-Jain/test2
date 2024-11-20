import React, { useState } from 'react';

const Accordion = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState(null); //managing currently open accordion item

  const toggleAccordion = (index) => { //to toggle accordion item
    setActiveIndex(activeIndex === index ? null : index); //if clicked item is already active, it closes it by setting activeIndex to null
  }; //else sets activeIndex to clicked item's index

  return (
    <div className="accordion">
      {categories.map((category, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            <h3>{category.title}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{category.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

