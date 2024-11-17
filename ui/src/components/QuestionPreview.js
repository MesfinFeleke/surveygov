import React from "react";
import "./QuestionPreview.css";

function QuestionPreview({ questions }) {
  if (!questions || questions.length === 0) {
    return (
      <div className="question-preview">
        <h3>Survey Preview</h3>
        <div className="no-questions">No questions added yet.</div>
      </div>
    );
  }

  return (
    <div className="question-preview">
      <h3>Survey Preview</h3>
      <div className="questions-list">
        {questions.map((question, index) => (
          <div key={index} className="preview-question">
            <div className="question-text">
              {index + 1}. {question.text}
            </div>

            {(question.type === "multiple-choice" ||
              question.type === "checkbox-list") && (
              <div className="options-list">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="option">
                    <input
                      type={
                        question.type === "multiple-choice"
                          ? "radio"
                          : "checkbox"
                      }
                      name={`question-${index}`}
                      disabled
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {question.type === "text" && (
              <input
                type="text"
                className="text-input"
                placeholder="Enter your answer"
                disabled
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionPreview;
