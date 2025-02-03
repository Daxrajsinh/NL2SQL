import { useState } from "react";
import DataInputForm from "../components/DataInputForm";
import DataTable from "../components/DataTable";
import ChartRenderer from "../components/ChartRenderer";
import { fetchGeneratedSQL } from "../api/api";
import ErrorBoundary from "../components/ErrorBoundary";

const Home = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("");
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [summary, setSummary] = useState("");

  const handleQuerySubmit = async (question) => {
    const response = await fetchGeneratedSQL(question);

    if (response) {
      console.log("🔹 API Response:", response);
      setData(response.data);
      setChartType(response.best_chart);
      setSelectedColumns(response.selected_columns);
      setSummary(response.summary || "No summary available.");
    }
  };

  return (
    <div className="w-screen h-screen bg-white text-black flex flex-col items-center p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-4">Natural Language to SQL Visualizer</h1>

      {/* Main Layout - Grid */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-6xl h-full">
        
        {/* Left Side: Query Input & Query Result */}
        <div className="flex flex-col space-y-4">
          
          {/* Query Input Box */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <DataInputForm onSubmit={handleQuerySubmit} />
          </div>

          {/* Query Result Table */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-1 overflow-auto">
            <h2 className="text-lg font-semibold text-black mb-2">Query Result</h2>
            <DataTable data={data} />
          </div>
        </div>

        {/* Right Side: Chart & Summary */}
        <div className="flex flex-col space-y-4">
          
          {/* Chart Visualization */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex-1">
            <h2 className="text-lg font-semibold text-black mb-2">Chart Visualization</h2>
              <ChartRenderer data={data} chartType={chartType} selectedColumns={selectedColumns} />
          </div>

          {/* Summary */}
          {summary && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-black mb-2">Summary</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
