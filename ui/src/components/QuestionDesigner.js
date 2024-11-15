import { useState } from "react";
import "./QuestionDesigner.css";

function QuestionDesigner({ onAddQuestion }) {
  const [questionType, setQuestionType] = useState("multiple-choice");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([""]);

  const questionTypes = [
    { id: "multiple-choice", label: "Multiple Choice" },
    { id: "checkbox-list", label: "Checkbox List" },
    { id: "short-text", label: "Short Text" },
    { id: "long-text", label: "Long Text" },
  ];

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    const newQuestion = {
      type: questionType,
      text: questionText,
      options:
        questionType === "multiple-choice" || questionType === "checkbox-list"
          ? options
          : [],
    };
    onAddQuestion(newQuestion);
    setQuestionText("");
    setOptions([""]);
  };

  return (
    <div className="question-designer">
      <h3>Question Designer</h3>

      <div className="form-group">
        <label>Question Type</label>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          className="form-control"
        >
          {questionTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Question Text</label>
        <input
          type="text"
          placeholder="Enter question text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          className="form-control"
        />
      </div>

      {(questionType === "multiple-choice" ||
        questionType === "checkbox-list") && (
        <div className="form-group">
          <label>Options</label>
          {options.map((option, index) => (
            <div key={index} className="option-row">
              <input
                type="text"
                value={option}
                onChange={(e) => updateOption(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                className="form-control"
              />
              <button
                onClick={() => removeOption(index)}
                className="delete-option-btn"
              >
                ×
              </button>
            </div>
          ))}
          <button onClick={addOption} className="add-option-btn">
            + Add Option
          </button>
        </div>
      )}

      <button onClick={handleSubmit} className="add-question-btn">
        + Add Question
      </button>
    </div>
  );
}

export default QuestionDesigner;
