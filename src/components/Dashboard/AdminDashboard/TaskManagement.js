import React, { useState } from "react";

const TaskManagement = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      campaignName: "Marketing Campaign",
      head: "John Doe",
      appointedMembers: ["Alice", "Bob"],
      date: "2024-08-25",
    },
    {
      id: 2,
      campaignName: "Product Launch",
      head: "Jane Smith",
      appointedMembers: ["Tom", "Jerry"],
      date: "2024-09-10",
    },
    {
      id: 3,
      campaignName: "Charity Event",
      head: "Emily Davis",
      appointedMembers: ["Sam", "Chris"],
      date: "2024-07-15",
    },
  ]);

  const [filterText, setFilterText] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [showModal, setShowModal] = useState(false); 
  const [newTask, setNewTask] = useState({
    campaignName: "",
    head: "",
    appointedMembers: "",
    date: "",
  });

  // Filter tasks by campaign name
  const filteredTasks = tasks.filter((task) =>
    task.campaignName.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sort tasks by date
  const sortedTasks = filteredTasks.sort((a, b) => {
    return sortAsc
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  // Toggle sort order
  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  // Open and close modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle adding new task
  const handleAddTask = () => {
    const membersArray = newTask.appointedMembers
      .split(",")
      .map((member) => member.trim());
    const updatedTask = {
      ...newTask,
      id: tasks.length + 1,
      appointedMembers: membersArray,
    };
    setTasks([...tasks, updatedTask]);
    setNewTask({ campaignName: "", head: "", appointedMembers: "", date: "" });
    closeModal();
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Task Management</h2>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search by Campaign Name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      {/* Sort Button */}
      <button onClick={toggleSort} className="btn btn-primary mb-4">
        Sort by Date {sortAsc ? "↑" : "↓"}
      </button>

      {/* Add Task Button */}
      <button onClick={openModal} className="btn btn-success mb-4 ml-4">
        Add Task
      </button>

      {/* Task Table */}
      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Campaign Name</th>
            <th className="py-2 px-4">Head</th>
            <th className="py-2 px-4">Appointed Members</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="py-2 px-4">{task.campaignName}</td>
              <td className="py-2 px-4">{task.head}</td>
              <td className="py-2 px-4">{task.appointedMembers.join(", ")}</td>
              <td className="py-2 px-4">{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Campaign Name</label>
              <input
                type="text"
                value={newTask.campaignName}
                onChange={(e) =>
                  setNewTask({ ...newTask, campaignName: e.target.value })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Head</label>
              <input
                type="text"
                value={newTask.head}
                onChange={(e) =>
                  setNewTask({ ...newTask, head: e.target.value })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Appointed Members (comma separated)
              </label>
              <input
                type="text"
                value={newTask.appointedMembers}
                onChange={(e) =>
                  setNewTask({ ...newTask, appointedMembers: e.target.value })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={newTask.date}
                onChange={(e) =>
                  setNewTask({ ...newTask, date: e.target.value })
                }
                className="border p-2 w-full"
              />
            </div>

            <div className="flex justify-end">
              <button onClick={handleAddTask} className="btn btn-success mr-2">
                Add Task
              </button>
              <button onClick={closeModal} className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagement;
