import React, { useState } from "react";
import { Plus, X } from "lucide-react";

function QuestionDesigner({ onAddQuestion, onSaveSurvey }) {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [questionType, setQuestionType] = useState("multiple-choice");
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState([""]);

  const questionTypes = [
    { id: "multiple-choice", label: "Multiple Choice" },
    { id: "checkbox-list", label: "Checkbox List" },
    { id: "text", label: "Long Text" },
    { id: "short-text", label: "Short Text" },
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

  const handleSave = () => {
    if (onSaveSurvey) {
      onSaveSurvey(surveyTitle);
    } else {
      console.error("onSaveSurvey is not a function");
    }
  };

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-sm"
      style={{ flex: "0 0 33.33%" }}
    >
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Survey Title</h3>
      <input
        type="text"
        placeholder="Enter survey title"
        value={surveyTitle}
        onChange={(e) => setSurveyTitle(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-1 focus:ring-navy-800 focus:border-navy-800 text-sm p-1.5 mb-4"
      />
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Question Designer
        <div className="bg-navy-900 text-white p-2 rounded-md mt-2 text-sm font-normal">
          Design your own questions!
        </div>
      </h3>

      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Question Type
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-1 focus:ring-navy-800 focus:border-navy-800 text-sm p-1.5"
          >
            {questionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Question Text
          </label>
          <input
            type="text"
            placeholder="Enter question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-1 focus:ring-navy-800 focus:border-navy-800 text-sm p-1.5"
          />
        </div>

        {(questionType === "multiple-choice" ||
          questionType === "checkbox-list") && (
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Options
            </label>
            <div className="space-y-2">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-1 focus:ring-navy-800 focus:border-navy-800 text-sm p-1.5"
                  />
                  <button
                    onClick={() => removeOption(index)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={addOption}
                className="inline-flex items-center gap-1 text-sm text-navy-800 hover:text-navy-600 font-medium mt-1"
              >
                <Plus size={14} />
                Add Option
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-navy-800 transition-colors w-full justify-center"
        >
          <Plus size={14} />
          Add Question
        </button>

        <button
          onClick={handleSave}
          className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-600 transition-colors w-full justify-center"
        >
          Save Survey
        </button>
      </div>
    </div>
  );
}

export default QuestionDesigner;
