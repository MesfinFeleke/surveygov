import React from "react";
import { Trash2 } from "lucide-react";

function QuestionPreview({ questions, onDeleteQuestion }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Survey Preview
      </h3>
      {questions.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          No questions added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-3 shadow-sm group"
            >
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium text-sm">
                  {index + 1}. {question.text}
                </p>
                <button
                  onClick={() => onDeleteQuestion(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100"
                  title="Delete question"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              {(question.type === "multiple-choice" ||
                question.type === "checkbox-list") && (
                <div className="space-y-1.5 ml-3">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type={
                          question.type === "multiple-choice"
                            ? "radio"
                            : "checkbox"
                        }
                        name={`question-${index}`}
                        className="mr-2 h-3.5 w-3.5 text-navy-900"
                      />
                      <span className="text-gray-700 text-sm">{option}</span>
                    </div>
                  ))}
                </div>
              )}
              {(question.type === "text" || question.type === "short-text") && (
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-1.5 mt-1 focus:ring-1 focus:ring-navy-800 focus:border-navy-800 outline-none text-sm"
                  placeholder="Enter your answer"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionPreview;
