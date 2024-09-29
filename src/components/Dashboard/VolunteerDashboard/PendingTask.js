import React, { useState } from "react";

const PendingTask = () => {
  // Dummy data for tasks
  const [tasks, setTasks] = useState([
    {
      taskId: "T001",
      givenBy: "John Doe",
      campaignName: "Environment Awareness",
      date: "2024-09-25",
      description: "Organize a webinar on environment conservation.",
      isDone: false,
    },
    {
      taskId: "T002",
      givenBy: "Jane Smith",
      campaignName: "Health and Hygiene",
      date: "2024-09-28",
      description: "Distribute hygiene kits to local communities.",
      isDone: false,
    },
    {
      taskId: "T003",
      givenBy: "Michael Brown",
      campaignName: "Blood Donation Drive",
      date: "2024-09-30",
      description: "Coordinate with local blood banks for donations.",
      isDone: false,
    },
  ]);

  // Mark a task as done
  const handleDoneClick = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, isDone: true } : task
      )
    );
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Pending Tasks</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Task ID</th>
              <th className="border p-3 text-left">Given By</th>
              <th className="border p-3 text-left">Campaign Name</th>
              <th className="border p-3 text-left">Date</th>
              <th className="border p-3 text-left">Description</th>
              <th className="border p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.taskId}
                className={task.isDone ? "bg-green-100" : ""}
              >
                <td className="border p-3">{task.taskId}</td>
                <td className="border p-3">{task.givenBy}</td>
                <td className="border p-3">{task.campaignName}</td>
                <td className="border p-3">{task.date}</td>
                <td className="border p-3">{task.description}</td>
                <td className="border p-3">
                  <button
                    onClick={() => handleDoneClick(task.taskId)}
                    className={`px-4 py-2 rounded ${
                      task.isDone
                        ? "bg-gray-400"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                    disabled={task.isDone}
                  >
                    {task.isDone ? "Done" : "Mark as Done"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingTask;
