import React, { useState } from "react";

// Dummy data for multiple projects
const dummyProjects = [
  {
    projectName: "Website Redesign",
    time: "3 months",
    allocatedBudget: 15000,
    isFinished: false,
  },
  {
    projectName: "Mobile App Development",
    time: "6 months",
    allocatedBudget: 30000,
    isFinished: false,
  },
  {
    projectName: "E-commerce Platform",
    time: "4 months",
    allocatedBudget: 25000,
    isFinished: true,
  },
  {
    projectName: "CRM System Update",
    time: "5 months",
    allocatedBudget: 20000,
    isFinished: false,
  },
];

const StaffEvent = () => {
  // State to manage the project list
  const [projects, setProjects] = useState(dummyProjects);

  // Handle the "Finish" button for individual projects
  const handleFinish = (index) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, isFinished: true } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">{project.projectName}</h2>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold">
                Time Duration
              </label>
              <p>{project.time}</p>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 font-bold">
                Allocated Budget
              </label>
              <p>{`$${project.allocatedBudget}`}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleFinish(index)}
                disabled={project.isFinished}
                className={`px-4 py-2 text-white rounded-lg transition-colors duration-300 ${
                  project.isFinished
                    ? "bg-gray-400"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {project.isFinished ? "Finished" : "Finish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffEvent;
