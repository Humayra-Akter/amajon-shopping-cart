import React, { useState } from "react";

const StaffTask = () => {
  // Dummy data for staff tasks
  const [tasks, setTasks] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      joinDate: "2024-08-15",
      isComplete: true,
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      joinDate: "2024-09-01",
      isComplete: false,
    },
    {
      name: "Sam Brown",
      email: "sam@example.com",
      joinDate: "2024-09-05",
      isComplete: true,
    },
    {
      name: "Emily Davis",
      email: "emily@example.com",
      joinDate: "2024-09-10",
      isComplete: false,
    },
  ]);

  return (
    <div className="mt-10 p-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Staff Tasks</h2>

        {/* Tasks Table */}
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Join Date</th>
              <th className="py-3 px-6 text-left">Task Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{task.name}</td>
                <td className="py-3 px-6 text-left">{task.email}</td>
                <td className="py-3 px-6 text-left">{task.joinDate}</td>
                <td className="py-3 px-6 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      task.isComplete ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {task.isComplete ? "Done" : "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTask;
