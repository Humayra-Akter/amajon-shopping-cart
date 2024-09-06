import React, { useState } from "react";

const initialDonors = [
  {
    id: 1,
    name: "Alice Johnson",
    nid: "123456789",
    email: "alice@example.com",
    phone: "123-456-7890",
    dob: "1990-01-01",
    gender: "Female",
  },
  {
    id: 2,
    name: "Bob Smith",
    nid: "987654321",
    email: "bob@example.com",
    phone: "098-765-4321",
    dob: "1985-05-15",
    gender: "Male",
  },
  {
    id: 3,
    name: "Mary Curry",
    nid: "983434321",
    email: "mary@example.com",
    phone: "098-765-4313",
    dob: "1995-09-15",
    gender: "Female",
  },
  {
    id: 4,
    name: "Nick Johnas",
    nid: "9876579874",
    email: "nick@example.com",
    phone: "098-945-4321",
    dob: "2002-12-15",
    gender: "Male",
  },
];

const Donor = () => {
  const [donors, setDonors] = useState(initialDonors);
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });
  const [filter, setFilter] = useState("");

  // Sorting function
  const sortedDonors = React.useMemo(() => {
    let sortableDonors = [...donors];
    if (sortConfig.key) {
      sortableDonors.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableDonors;
  }, [donors, sortConfig]);

  // Filtering function
  const filteredDonors = sortedDonors.filter((donor) =>
    Object.values(donor).some((value) =>
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
      <h2 className="text-2xl font-bold mb-4">Donor Management</h2>

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
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("nid")}
            >
              NID
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("email")}
            >
              Email
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("phone")}
            >
              Phone
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("dob")}
            >
              DOB
            </th>
            <th
              className="py-2 px-4 cursor-pointer"
              onClick={() => handleSort("gender")}
            >
              Gender
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donor) => (
            <tr key={donor.id} className="border-t">
              <td className="py-2 px-4">{donor.name}</td>
              <td className="py-2 px-4">{donor.nid}</td>
              <td className="py-2 px-4">{donor.email}</td>
              <td className="py-2 px-4">{donor.phone}</td>
              <td className="py-2 px-4">{donor.dob}</td>
              <td className="py-2 px-4">{donor.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donor;
