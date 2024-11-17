import React, { useState } from "react";
import NavBar from "./components/NavBar";
import QuestionDesigner from "./components/QuestionDesigner";
import QuestionPreview from "./components/QuestionPreview";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <QuestionDesigner onAddQuestion={handleAddQuestion} />
          <QuestionPreview questions={questions} />
        </div>
      </div>
    </div>
  );
}

export default App;
