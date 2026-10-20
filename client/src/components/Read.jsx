
import axios from "axios";
import { useState } from "react";

const Read = () => {
  const [empData, setEmpData] = useState([]);

  const handleClick = async () => {
    try {
      const getAllData = await axios.get(
        "https://employee-crud-test.onrender.com/emp/getAllEmployee"
      );

      setEmpData(getAllData.data.empData);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch employee details");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">
          Employee Details
        </h1>

        <p className="text-gray-500 text-center mb-6">
          View all registered employees
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View All Employees
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {empData?.map((e) => (
            <div
              key={e._id}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-4 text-blue-600">
                Employee {e.empId}
              </h2>

              <div className="space-y-2 text-gray-700 break-words">
                <p>
                  <span className="font-medium">MongoDB ID:</span> {e._id}
                </p>

                <p>
                  <span className="font-medium">Employee ID:</span> {e.empId}
                </p>

                <p>
                  <span className="font-medium">Name:</span> {e.empName}
                </p>

                <p>
                  <span className="font-medium">Mobile:</span> {e.empMobile}
                </p>
              </div>
            </div>
          ))}
        </div>

        {empData.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            Click "View All Employees" to load employee details.
          </p>
        )}
      </div>
    </div>
  );
};

export default Read;
