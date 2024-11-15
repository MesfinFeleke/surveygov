import React, { useState } from "react";

const MultipleChoiceQuestion = ({ question, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      }
      return [...prev, option];
    });
  };

  return (
    <div className="question-container">
      <h3>{question}</h3>
      <div className="options-container">
        {options.map((option, index) => (
          <label key={index} className="option-label">
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            {option}
          </label>
        ))}
        <div className="add-option">Add Option or Add Other</div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
