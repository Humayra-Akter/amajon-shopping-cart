import React, { useState } from "react";

const NeedyPeopleManagement = () => {
  const [people] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      address: "123 Main St",
      project: "Education Support",
      applied: "Yes",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      address: "456 Oak Ave",
      project: "Healthcare Aid",
      applied: "No",
    },
    {
      name: "Mark Lee",
      email: "mark@example.com",
      address: "789 Pine Rd",
      project: "Food Distribution",
      applied: "Yes",
    },
  ]);

  const [financialRequests] = useState([
    { name: "Anna Taylor", annualIncome: "5000", requestedAmount: "2000" },
    { name: "Tom Hardy", annualIncome: "4000", requestedAmount: "1500" },
    { name: "Emily Clark", annualIncome: "6000", requestedAmount: "2500" },
  ]);

  return (
    <div className="mt-10 p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Needy People List</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Enrolled In (Project)</th>
            <th className="py-2 px-4 border-b">Applied</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.email}</td>
              <td className="py-2 px-4 border-b">{person.address}</td>
              <td className="py-2 px-4 border-b">{person.project}</td>
              <td className="py-2 px-4 border-b">{person.applied}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Financial Help Request Cards */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Financial Help Requests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialRequests.map((request, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2">{request.name}</h3>
            <p>
              <strong>Annual Income:</strong> ${request.annualIncome}
            </p>
            <p>
              <strong>Requested Amount:</strong> ${request.requestedAmount}
            </p>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2">
                Grant
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedyPeopleManagement;
