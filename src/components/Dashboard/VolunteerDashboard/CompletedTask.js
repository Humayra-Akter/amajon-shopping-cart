import React from "react";

const CompletedTask = () => {
  // Dummy data for completed tasks
  const completedTasks = [
    {
      taskId: "C001",
      givenBy: "John Doe",
      campaignName: "Tree Plantation Drive",
      date: "2024-09-15",
      description: "Plant 100 trees in the community park.",
    },
    {
      taskId: "C002",
      givenBy: "Jane Smith",
      campaignName: "Beach Cleanup",
      date: "2024-09-18",
      description: "Organize a beach cleanup with volunteers.",
    },
    {
      taskId: "C003",
      givenBy: "Michael Brown",
      campaignName: "Food Distribution",
      date: "2024-09-20",
      description: "Distribute food packages to low-income families.",
    },
  ];

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          Completed Tasks
        </h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3 text-left">Task ID</th>
              <th className="border p-3 text-left">Given By</th>
              <th className="border p-3 text-left">Campaign Name</th>
              <th className="border p-3 text-left">Date</th>
              <th className="border p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task) => (
              <tr key={task.taskId}>
                <td className="border p-3">{task.taskId}</td>
                <td className="border p-3">{task.givenBy}</td>
                <td className="border p-3">{task.campaignName}</td>
                <td className="border p-3">{task.date}</td>
                <td className="border p-3">{task.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedTask;
