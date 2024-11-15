function QuestionPreview({ questions }) {
  return (
    <div className="question-preview">
      <h2>Survey Preview</h2>
      {questions.map((question, index) => (
        <div key={index} className="preview-question">
          <h3>Question {index + 1}</h3>
          <p>{question.text}</p>

          {question.type === "multiple-choice" && (
            <div>
              {question.options.map((option, i) => (
                <div key={i}>
                  <input type="radio" name={`question-${index}`} /> {option}
                </div>
              ))}
            </div>
          )}

          {question.type === "checkbox-list" && (
            <div>
              {question.options.map((option, i) => (
                <div key={i}>
                  <input type="checkbox" /> {option}
                </div>
              ))}
            </div>
          )}

          {question.type === "short-text" && (
            <input type="text" placeholder="Enter your answer" />
          )}

          {question.type === "long-text" && (
            <textarea placeholder="Enter your answer" rows="4" />
          )}
        </div>
      ))}
    </div>
  );
}

export default QuestionPreview;
