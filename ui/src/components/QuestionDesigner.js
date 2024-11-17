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
    <div className="p-8 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-8 text-gray-800">
        Question Designer
        <div className="bg-navy-900 text-white p-3 rounded-md mt-3 text-sm font-normal">
          Design your own questions!
        </div>
      </h3>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Question Type
          </label>
          <select
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-navy-800 focus:border-navy-800 sm:text-sm p-2.5"
          >
            {questionTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Question Text
          </label>
          <input
            type="text"
            placeholder="Enter question text"
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-navy-800 focus:border-navy-800 sm:text-sm p-2.5"
          />
        </div>

        {(questionType === "multiple-choice" ||
          questionType === "checkbox-list") && (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Options
            </label>
            <div className="space-y-3">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-navy-800 focus:border-navy-800 sm:text-sm p-2.5"
                  />
                  <button
                    onClick={() => removeOption(index)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
              <button
                onClick={addOption}
                className="inline-flex items-center gap-2 text-sm text-navy-800 hover:text-navy-600 font-medium mt-2"
              >
                <Plus size={16} />
                Add Option
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-800 transition-colors w-full justify-center"
        >
          <Plus size={16} />
          Add Question
        </button>
      </div>
    </div>
  );
}

export default QuestionDesigner;
