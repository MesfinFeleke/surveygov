import { useState, useRef, useEffect } from "react";
import QuestionDesigner from "./QuestionDesigner";
import QuestionPreview from "./QuestionPreview";

function SurveyDesigner() {
  const [questions, setQuestions] = useState([]);
  const previewRef = useRef(null);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollTop = previewRef.current.scrollHeight;
    }
  }, [questions]);

  return (
    <div className="survey-designer">
      <h1>Survey Designer</h1>
      <div
        className="survey-workspace"
        style={{ display: "flex", width: "100%" }}
      >
        <div style={{ flex: "0 0 33.33%", position: "sticky", top: 0 }}>
          <QuestionDesigner onAddQuestion={addQuestion} />
        </div>
        <div ref={previewRef} style={{ flex: "1", overflowY: "auto" }}>
          <QuestionPreview questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default SurveyDesigner;
