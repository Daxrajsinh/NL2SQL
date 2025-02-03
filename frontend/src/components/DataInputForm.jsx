import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const DataInputForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(question);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        className="p-4 w-full bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
        placeholder="Enter your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        type="submit"
        className="bg-primary text-white p-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default DataInputForm;
