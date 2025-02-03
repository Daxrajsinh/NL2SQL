const DataTable = ({ data }) => {
  if (!data.length) return <p className="text-center text-gray-500">No data available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-primary text-white">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-6 py-3 text-left text-sm font-semibold">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={`hover:bg-gray-100 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
              {Object.values(row).map((value, index) => (
                <td key={index} className="px-6 py-3 text-sm font-medium">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
