import { useState } from "react";
import QuestionDesigner from "./QuestionDesigner";
import Dashboard from "./Dashboard";

function SurveyDesigner() {
  const [questions, setQuestions] = useState([]);
  const [surveys, setSurveys] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const onSaveSurvey = (surveyTitle) => {
    const newSurvey = {
      title: surveyTitle,
      questions: questions,
    };

    setSurveys([...surveys, newSurvey]);
    console.log("Survey saved:", newSurvey);
  };

  return (
    <div className="survey-designer">
      <h1>Survey Designer</h1>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "0 0 33.33%", position: "sticky", top: 0 }}>
          <QuestionDesigner
            onAddQuestion={addQuestion}
            onSaveSurvey={onSaveSurvey}
          />
        </div>
        <div style={{ flex: "1" }}>
          <Dashboard surveys={surveys} />
        </div>
      </div>
    </div>
  );
}

export default SurveyDesigner;
