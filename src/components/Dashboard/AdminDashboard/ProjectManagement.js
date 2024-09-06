import React, { useState } from "react";

const ProjectManagement = () => {
  const initialProjects = [
    {
      id: 1,
      name: "Website Redesign",
      status: "Ongoing",
      coordinator: "Alice Johnson",
      appointedMembers: ["Chris Evans", "Emma Watson"],
      time: "9:00 AM - 5:00 PM",
      totalBudget: "BDT8000",
    },
    {
      id: 2,
      name: "Mobile App Development",
      status: "Upcoming",
      coordinator: "John Doe",
      appointedMembers: ["Tom Hardy", "Scarlett Johansson"],
      time: "11:00 AM - 6:00 PM",
      totalBudget: "BDT12000",
    },
    {
      id: 3,
      name: "Cloud Migration",
      status: "Completed",
      coordinator: "Sarah Parker",
      appointedMembers: ["James Bond", "Natasha Romanoff"],
      time: "9:00 AM - 4:00 PM",
      totalBudget: "BDT10000",
    },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const saveUpdatedProject = () => {
    const updatedProjects = projects.map((project) =>
      project.id === currentProject.id ? currentProject : project
    );
    setProjects(updatedProjects);
    closeModal();
  };

 const removeProject = (id) => {
   const confirmation = window.confirm(
     "Are you sure you want to remove this project?"
   );
   if (confirmation) {
     setProjects(projects.filter((project) => project.id !== id));
   }
 };


  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: "New Project",
      status: "New",
      coordinator: "New Coordinator",
      appointedMembers: ["New Member"],
      time: "TBA",
      totalBudget: "BDT0",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Project Management</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-xl border rounded-lg p-4 relative"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-bold">Status:</span> {project.status}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-bold">Coordinator:</span>{" "}
              {project.coordinator}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-bold">Appointed Members:</span>{" "}
              {project.appointedMembers.join(", ")}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-bold">Time:</span> {project.time}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-bold">Total Budget:</span>{" "}
              {project.totalBudget}
            </p>

            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => openModal(project)}
                className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => removeProject(project.id)}
                className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={addProject}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Project
        </button>
      </div>

      {/* Modal for editing projects */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">Edit Project</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Project Name
              </label>
              <input
                type="text"
                name="name"
                value={currentProject.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Status</label>
              <input
                type="text"
                name="status"
                value={currentProject.status}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Coordinator
              </label>
              <input
                type="text"
                name="coordinator"
                value={currentProject.coordinator}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Appointed Members
              </label>
              <input
                type="text"
                name="appointedMembers"
                value={currentProject.appointedMembers.join(", ")}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    appointedMembers: e.target.value.split(","),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Time</label>
              <input
                type="text"
                name="time"
                value={currentProject.time}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Total Budget
              </label>
              <input
                type="text"
                name="totalBudget"
                value={currentProject.totalBudget}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={saveUpdatedProject}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;
