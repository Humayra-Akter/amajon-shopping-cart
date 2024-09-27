import React, { useState } from "react";

const ApplyHelp = () => {
  // Dummy data for ongoing projects
  const ongoingProjects = [
    {
      name: "Food Assistance",
      description: "Providing food to families in need.",
    },
    {
      name: "Medical Aid",
      description:
        "Helping with medical expenses for underprivileged families.",
    },
    {
      name: "Educational Support",
      description: "Supporting children’s education in low-income families.",
    },
  ];

  // State for managing the form visibility and form data
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    familyMembers: "",
    familyIncome: "",
    requestedAmount: "",
  });

  // Function to open the form for a selected project
  const handleApply = (project) => {
    setSelectedProject(project);
    setIsFormOpen(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", {
      project: selectedProject,
      formData,
    });
    // Reset form after submission
    setIsFormOpen(false);
    setFormData({
      familyMembers: "",
      familyIncome: "",
      requestedAmount: "",
    });
  };

  return (
    <div className="mt-10 p-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for Help</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ongoingProjects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <button
                onClick={() => handleApply(project)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        {isFormOpen && (
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Apply for {selectedProject?.name}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Family Member Numbers
                </label>
                <input
                  type="number"
                  name="familyMembers"
                  value={formData.familyMembers}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Family Income (Monthly)
                </label>
                <input
                  type="number"
                  name="familyIncome"
                  value={formData.familyIncome}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Requested Amount
                </label>
                <input
                  type="number"
                  name="requestedAmount"
                  value={formData.requestedAmount}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyHelp;
