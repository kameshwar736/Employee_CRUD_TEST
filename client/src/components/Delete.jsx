
import axios from "axios";
import { useState } from "react";

const Delete = () => {
  const [empId, setEmpId] = useState("");

  const handleChange = (e) => {
    setEmpId(e.target.value);
  };

  const handleDelete = async () => {
    if (!empId) {
      alert("Please enter an employee ID");
      return;
    }

    try {
      await axios.delete(
        `https://employee-crud-test.onrender.com/emp/removeEmp/${empId}`
      );

      alert("Employee deleted successfully!");
      setEmpId("");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.msg || "Failed to delete employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Delete Employee
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Enter the employee ID you want to delete
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={empId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-red-500"
          />

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          >
            Delete Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
