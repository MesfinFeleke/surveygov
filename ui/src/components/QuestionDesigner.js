import { useState } from "react";
import { Plus, X } from "lucide-react";

function QuestionDesigner({ onAddQuestion }) {
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        Question Designer
        <div className="bg-blue-500 text-white p-4">
          If this text has a blue background and white text with padding,
          Tailwind is working!
        </div>
      </h3>

      <div className="space-y-4">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question Type
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {questionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question Text
          </label>
          <input
            type="text"
            placeholder="Enter question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {(questionType === "multiple-choice" ||
          questionType === "checkbox-list") && (
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    onClick={() => removeOption(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
              <button
                onClick={addOption}
                className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500"
              >
                <Plus size={16} />
                Add Option
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus size={16} />
          Add Question
        </button>
      </div>
    </div>
  );
}

export default QuestionDesigner;
