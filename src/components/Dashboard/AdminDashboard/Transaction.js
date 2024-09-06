import React, { useState, useMemo } from "react";

// Sample data for transactions with additional fields
const initialTransactions = [
  {
    id: 1,
    type: "in",
    amount: 500,
    senderReceiver: "Alice",
    date: "2024-09-01",
    campaignName: "Campaign A",
    transactionType: "event",
  },
  {
    id: 2,
    type: "in",
    amount: 200,
    senderReceiver: "Bob",
    date: "2024-09-02",
    campaignName: "Campaign B",
    transactionType: "project",
  },
  {
    id: 3,
    type: "out",
    amount: 300,
    senderReceiver: "Charlie",
    date: "2024-09-03",
    campaignName: "Campaign A",
    transactionType: "event",
  },
  {
    id: 4,
    type: "out",
    amount: 100,
    senderReceiver: "David",
    date: "2024-09-04",
    campaignName: "Campaign C",
    transactionType: "project",
  },
];

const Transaction = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [filter, setFilter] = useState("");

  // Sorting function
  const sortedTransactions = useMemo(() => {
    let sortableTransactions = [...transactions];
    if (sortConfig.key) {
      sortableTransactions.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTransactions;
  }, [transactions, sortConfig]);

  // Filtering function
  const filteredTransactions = sortedTransactions.filter((transaction) =>
    Object.values(transaction).some((value) =>
      value.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>

      <input
        type="text"
        placeholder="Filter by any field..."
        value={filter}
        onChange={handleFilterChange}
        className="mb-4 p-2 border rounded"
      />

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("type")}
            >
              Type
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("amount")}
            >
              Amount
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("senderReceiver")}
            >
              Sender/Receiver
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("campaignName")}
            >
              Campaign Name
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("transactionType")}
            >
              Type (Event/Project)
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="py-2 px-4">
                <span
                  className={`${
                    transaction.type === "in"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type}
                </span>
              </td>
              <td className="py-2 px-4">{transaction.amount}</td>
              <td className="py-2 px-4">{transaction.senderReceiver}</td>
              <td className="py-2 px-4">{transaction.date}</td>
              <td className="py-2 px-4">{transaction.campaignName}</td>
              <td className="py-2 px-4">{transaction.transactionType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
