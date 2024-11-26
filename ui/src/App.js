import React, { useState } from "react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import QuestionDesigner from "./components/QuestionDesigner";
import SurveyPreview from "./components/SurveyPreview";
import Dashboard from "./components/Dashboard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [surveys, setSurveys] = useState([]);

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleDeleteQuestion = (indexToDelete) => {
    setQuestions(questions.filter((_, index) => index !== indexToDelete));
  };

  return (
    <ThemeProvider attribute="class">
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <NavBar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/survey-designer"
                element={
                  <div style={{ display: "flex", width: "100%" }}>
                    <div
                      style={{ flex: "0 0 33.33%", position: "sticky", top: 0 }}
                    >
                      <QuestionDesigner onAddQuestion={handleAddQuestion} />
                    </div>
                    <div style={{ flex: "1", overflowY: "auto" }}>
                      <SurveyPreview
                        questions={questions}
                        onDeleteQuestion={handleDeleteQuestion}
                      />
                    </div>
                  </div>
                }
              />
              <Route
                path="/dashboard"
                element={<Dashboard surveys={surveys} />}
              />
              <Route
                path="/"
                element={
                  <SurveyPreview
                    questions={questions}
                    onDeleteQuestion={handleDeleteQuestion}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
