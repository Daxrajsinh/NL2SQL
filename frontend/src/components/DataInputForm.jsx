import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Importing FaPaperPlane icon
import { CircularProgress } from "@mui/material"; // Importing CircularProgress for a loading spinner

const DataInputForm = ({ onSubmit, loading }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question); // Trigger the onSubmit function passed from Home
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          disabled={loading} // Disable button while loading
          className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center disabled:opacity-50"
        >
          {loading ? (
            <CircularProgress size={24} style={{ color: "white" }} /> // Directly setting the color to white
          ) : (
            <FaPaperPlane /> // FaPaperPlane icon
          )}
        </button>
      </div>
    </form>
  );
};

export default DataInputForm;
