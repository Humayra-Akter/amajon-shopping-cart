import React, { useState } from "react";

const NeedyProfile = () => {
  const [staffInfo, setStaffInfo] = useState({
    name: "John Doe",
    address: "123 Main St, Cityville",
    age: 28,
    salary: 50000,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffInfo({
      ...staffInfo,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Staff Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={staffInfo.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          ) : (
            <p>{staffInfo.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={staffInfo.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          ) : (
            <p>{staffInfo.address}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Age</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={staffInfo.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          ) : (
            <p>{staffInfo.age}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary</label>
          <p>{`$${staffInfo.salary}`}</p>
        </div>
        <div className="text-center">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedyProfile;
