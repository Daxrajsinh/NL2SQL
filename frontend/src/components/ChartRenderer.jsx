import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid,
  PieChart, Pie, Legend,
  AreaChart, Area
} from "recharts";
import { Card } from "@tremor/react";
import { useState, useEffect } from "react";

const ChartRenderer = ({ data, chartType, selectedColumns }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // To capture the error message

  // useEffect(() => {
  //   setHasError(false);
  //   setErrorMessage("");  // Reset error message when data or chart type changes
  // }, [chartType]);

  // Debugging: Log the data and chart type to inspect the issue
  console.log('Chart Data:', data);
  console.log('Chart Type:', chartType);

  try {
    if (!data || data.length === 0) {
      return <p className="text-gray-600 text-center">No data available.</p>;
    }
    
    if (!chartType || !["Bar", "Pie", "Line", "Area"].includes(chartType)) {
      return <p className="text-gray-600 text-center">Invalid chart type.</p>;
    }
    

    const xAxisKey = selectedColumns?.x_axis; // Correct way to access
    const yAxisKey = selectedColumns?.y_axis;

    if (!xAxisKey || !yAxisKey) {
      return <p className="text-gray-600 text-center">No valid columns for chart.</p>;
    }

    return (
      <Card className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{chartType} Chart</h2>

        <ResponsiveContainer width="100%" height={300}>
          {chartType === "Bar" && (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={yAxisKey} fill="#3b82f6" />
            </BarChart>
          )}

          {chartType === "Line" && (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={yAxisKey} stroke="#10b981" />
            </LineChart>
          )}

          {chartType === "Pie" && (
            <PieChart>
              <Pie data={data} dataKey={yAxisKey} nameKey={xAxisKey} fill="#ef4444" label />
              <Tooltip />
              <Legend />
            </PieChart>
          )}

          {chartType === "Area" && (
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey={yAxisKey} fill="#6366f1" />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </Card>
    );
  } catch (error) {
    console.error("🚨 Chart Rendering Error:", error);
    setHasError(true);
    setErrorMessage(error.message); // Set the error message to display
  }

  return hasError ? <p className="text-red-500">⚠️ {errorMessage}</p> : null;
};

export default ChartRenderer;
