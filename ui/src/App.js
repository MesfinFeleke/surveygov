import React, { useState } from "react";
import NavBar from "./components/NavBar";
import QuestionDesigner from "./components/QuestionDesigner";
import QuestionPreview from "./components/QuestionPreview";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="app">
      <NavBar />
      <div className="app-content">
        <div className="survey-workspace">
          <QuestionDesigner onAddQuestion={handleAddQuestion} />
          <QuestionPreview questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default App;
