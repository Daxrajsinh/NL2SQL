import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchGeneratedSQL = async (question) => {
  try {
    const response = await api.post("/generate_sql/", { question });

    console.log("🔹 API Response:", response.data); // ✅ Debugging API response

    return response.data; // ✅ Includes `best_chart` dynamically selected by backend
  } catch (error) {
    console.error("🚨 API Error:", error.response?.data || error.message);
    return null;
  }
};

export default api;
