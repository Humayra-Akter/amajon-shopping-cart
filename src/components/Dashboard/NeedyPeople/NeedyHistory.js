import React from "react";

const NeedyHistory = () => {
  // Dummy data for transaction history
  const historyData = [
    {
      campaignName: "Food Assistance",
      receivedAmount: "$500",
      date: "2024-01-15",
    },
    {
      campaignName: "Medical Aid",
      receivedAmount: "$300",
      date: "2024-02-10",
    },
    {
      campaignName: "Educational Support",
      receivedAmount: "$200",
      date: "2024-03-05",
    },
  ];

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Previous Transaction History
        </h2>

        {/* Transaction History Table */}
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Campaign Name</th>
              <th className="px-4 py-2 border">Received Amount</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border text-center">
                  {entry.campaignName}
                </td>
                <td className="px-4 py-2 border text-center">
                  {entry.receivedAmount}
                </td>
                <td className="px-4 py-2 border text-center">{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NeedyHistory;
