import { useState } from "react";
import QuestionDesigner from "./QuestionDesigner";
import QuestionPreview from "./QuestionPreview";

function SurveyDesigner() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="survey-designer">
      <h1>Survey Designer</h1>
      <div className="survey-workspace">
        <QuestionDesigner onAddQuestion={addQuestion} />
        <QuestionPreview questions={questions} />
      </div>
    </div>
  );
}

export default SurveyDesigner;
