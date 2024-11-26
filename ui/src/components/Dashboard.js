import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ surveys }) => {
  const navigate = useNavigate();

  const handleNewSurvey = () => {
    navigate("/survey-designer"); // Adjust the route as necessary
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Saved Surveys</h1>
      <ul>
        {surveys.map((survey, index) => (
          <li key={index} className="border p-4 mb-2">
            {survey.title} {/* Assuming each survey has a title property */}
          </li>
        ))}
      </ul>
      <button
        onClick={handleNewSurvey}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        New Survey
      </button>
    </div>
  );
};

export default Dashboard;
