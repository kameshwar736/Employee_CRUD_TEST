
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [empData, setEmpData] = useState({
    empId: "",
    empName: "",
    empMobile: "",
  });

  const handleChange = (e) => {
    setEmpData({
      ...empData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const sendData = await axios.post(
        "http://localhost:5000/emp/newEmp",
        empData
      );

      console.log(sendData.data);
      alert("Employee data added successfully!");

      setEmpData({
        empId: "",
        empName: "",
        empMobile: "",
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.msg || "Failed to create employee");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Create Employee
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Enter employee details below
        </p>

        <form onSubmit={handleClick} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Employee ID"
            name="empId"
            value={empData.empId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Enter Employee Name"
            name="empName"
            value={empData.empName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            name="empMobile"
            value={empData.empMobile}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
