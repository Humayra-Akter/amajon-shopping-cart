import React, { useState } from "react";

const StaffVolunteer = () => {
  // Dummy data for available volunteers
  const [availableVolunteers, setAvailableVolunteers] = useState([
    { name: "John Doe", email: "john@example.com", joinDate: "2024-08-15" },
    { name: "Jane Smith", email: "jane@example.com", joinDate: "2024-09-01" },
    { name: "Sam Brown", email: "sam@example.com", joinDate: "2024-09-05" },
  ]);

  // Dummy data for volunteers assigned to a project
  const [projectVolunteers, setProjectVolunteers] = useState([]);

  // Dummy data for volunteers assigned to an event
  const [eventVolunteers, setEventVolunteers] = useState([]);

  // Function to appoint a volunteer for a project
  const appointForProject = (index) => {
    const selectedVolunteer = availableVolunteers[index];
    setProjectVolunteers([
      ...projectVolunteers,
      { ...selectedVolunteer, time: "3 months" },
    ]);
    removeFromAvailable(index);
  };

  // Function to appoint a volunteer for an event
  const appointForEvent = (index) => {
    const selectedVolunteer = availableVolunteers[index];
    setEventVolunteers([
      ...eventVolunteers,
      { ...selectedVolunteer, time: "2 weeks" },
    ]);
    removeFromAvailable(index);
  };

  // Remove volunteer from available list
  const removeFromAvailable = (index) => {
    setAvailableVolunteers(availableVolunteers.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-10 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Available Volunteers Table */}
        <h2 className="text-2xl font-bold mb-6">Available Volunteers</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg mb-8">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Join Date</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {availableVolunteers.map((volunteer, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{volunteer.name}</td>
                <td className="py-3 px-6 text-left">{volunteer.email}</td>
                <td className="py-3 px-6 text-left">{volunteer.joinDate}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => appointForProject(index)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded mr-2"
                  >
                    Appoint for Project
                  </button>
                  <button
                    onClick={() => appointForEvent(index)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded"
                  >
                    Appoint for Event
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Volunteers in Project Table */}
        <h2 className="text-2xl font-bold mb-6">Volunteers in Project</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg mb-8">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {projectVolunteers.map((volunteer, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{volunteer.name}</td>
                <td className="py-3 px-6 text-left">{volunteer.email}</td>
                <td className="py-3 px-6 text-left">{volunteer.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Volunteers in Event Table */}
        <h2 className="text-2xl font-bold mb-6">Volunteers in Event</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {eventVolunteers.map((volunteer, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{volunteer.name}</td>
                <td className="py-3 px-6 text-left">{volunteer.email}</td>
                <td className="py-3 px-6 text-left">{volunteer.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffVolunteer;
