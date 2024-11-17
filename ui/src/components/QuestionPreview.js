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
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <p className="font-medium mb-2">
                {index + 1}. {question.text}
              </p>
              {(question.type === "multiple-choice" ||
                question.type === "checkbox-list") && (
                <div className="space-y-2 ml-4">
                  {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center">
                      <input
                        type={
                          question.type === "multiple-choice"
                            ? "radio"
                            : "checkbox"
                        }
                        name={`question-${index}`}
                        className="mr-2"
                      />
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              )}
              {(question.type === "text" || question.type === "short-text") && (
                <input
                  type="text"
                  className="w-full border rounded-md p-2 mt-1"
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
