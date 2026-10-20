
import { useNavigate } from "react-router-dom";

const Home = () => {
  const goto = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Employee CRUD
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Create, read, update and delete employees
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => goto("/create")}
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Create Employee
          </button>

          <button
            onClick={() => goto("/read")}
            className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Read Employees
          </button>

          <button
            onClick={() => goto("/update")}
            className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
          >
            Update Employee
          </button>

          <button
            onClick={() => goto("/delete")}
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Delete Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
