import React from "react";

function QuestionPreview({ questions }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">
        Survey Preview
      </h3>
      {questions.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No questions added yet.
        </p>
      ) : (
        <div className="space-y-8">
          {questions.map((question, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-medium text-lg mb-4">
                {index + 1}. {question.text}
              </p>
              {(question.type === "multiple-choice" ||
                question.type === "checkbox-list") && (
                <div className="space-y-3 ml-6">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type={
                          question.type === "multiple-choice"
                            ? "radio"
                            : "checkbox"
                        }
                        name={`question-${index}`}
                        className="mr-3 h-4 w-4 text-navy-900"
                      />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              )}
              {(question.type === "text" || question.type === "short-text") && (
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:ring-2 focus:ring-navy-800 focus:border-navy-800 outline-none"
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
