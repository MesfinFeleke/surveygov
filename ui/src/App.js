import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";
import QuestionDesigner from "./components/QuestionDesigner";
import QuestionPreview from "./components/QuestionPreview";

function App() {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleDeleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <NavBar />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuestionDesigner onAddQuestion={handleAddQuestion} />
            <QuestionPreview
              questions={questions}
              onDeleteQuestion={handleDeleteQuestion}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
