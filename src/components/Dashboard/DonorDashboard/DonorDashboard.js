import React, { useState } from "react";

const DonorDashboard = () => {
  // Dummy data for donor profile, donation history, and campaigns
  const profile = {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, Cityville",
    phone: "+123-456-7890",
  };

  const donationHistory = [
    { campaignName: "Save the Children", donationAmount: 100 },
    { campaignName: "Clean Water Initiative", donationAmount: 50 },
    { campaignName: "Tree Plantation", donationAmount: 75 },
  ];

  const campaigns = [
    {
      name: "Food for All",
      description: "Provide meals to underprivileged communities.",
    },
    {
      name: "Build Schools",
      description: "Help build schools in rural areas.",
    },
    {
      name: "Healthcare Access",
      description: "Support healthcare services in remote regions.",
    },
  ];

  return (
    <div className="mt-10 p-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Address:</strong> {profile.address}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
        </div>

        {/* Donation History Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">Donation History</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Campaign Name</th>
                <th className="py-3 px-6 text-left">Donation Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {donationHistory.map((donation, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    {donation.campaignName}
                  </td>
                  <td className="py-3 px-6 text-left">
                    ${donation.donationAmount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Campaign List Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Campaign List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{campaign.name}</h3>
                <p className="mb-4">{campaign.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
