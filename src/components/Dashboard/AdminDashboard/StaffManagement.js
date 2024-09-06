import React, { useState } from "react";

const StaffManagement = () => {
  // Dummy data for staff members
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      designation: "Manager",
      salary: "$4000",
      eventName: "Annual Meetup",
      projectName: "Project Alpha",
    },
    {
      id: 2,
      name: "Bob Smith",
      designation: "Developer",
      salary: "$3000",
      eventName: "Charity Fundraiser",
      projectName: "Project Beta",
    },
    {
      id: 3,
      name: "Charlie Davis",
      designation: "Designer",
      salary: "$3500",
      eventName: "Tech Expo",
      projectName: "Project Gamma",
    },
  ]);

  const [editingStaff, setEditingStaff] = useState(null);
  const [newStaff, setNewStaff] = useState({
    name: "",
    designation: "",
    salary: "",
    eventName: "",
    projectName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStaff({ ...newStaff, [name]: value });
  };

  const addStaff = () => {
    const newEntry = { ...newStaff, id: staff.length + 1 };
    setStaff([...staff, newEntry]);
    setNewStaff({
      name: "",
      designation: "",
      salary: "",
      eventName: "",
      projectName: "",
    });
  };

  const updateStaff = (id) => {
    const updatedStaff = staff.map((s) =>
      s.id === id ? { ...s, ...newStaff } : s
    );
    setStaff(updatedStaff);
    setEditingStaff(null);
  };

  const removeStaff = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to remove this staff member?"
    );
    if (confirmation) {
      setStaff(staff.filter((s) => s.id !== id));
    }
  };

  const editStaff = (staff) => {
    setEditingStaff(staff.id);
    setNewStaff(staff);
  };

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Staff Management</h2>

      <table className="min-w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Designation</th>
            <th className="py-2 px-4">Salary</th>
            <th className="py-2 px-4">Event Name</th>
            <th className="py-2 px-4">Project Name</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="py-2 px-4">{s.name}</td>
              <td className="py-2 px-4">{s.designation}</td>
              <td className="py-2 px-4">{s.salary}</td>
              <td className="py-2 px-4">{s.eventName}</td>
              <td className="py-2 px-4">{s.projectName}</td>
              <td className="py-2 px-4">
                {editingStaff === s.id ? (
                  <button
                    onClick={() => updateStaff(s.id)}
                    className="btn btn-success mr-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => editStaff(s)}
                    className="btn btn-warning mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => removeStaff(s.id)}
                  className="btn btn-error"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add / Edit Staff</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newStaff.name}
            onChange={handleInputChange}
            className="input input-bordered"
          />
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            value={newStaff.designation}
            onChange={handleInputChange}
            className="input input-bordered"
          />
          <input
            type="text"
            placeholder="Salary"
            name="salary"
            value={newStaff.salary}
            onChange={handleInputChange}
            className="input input-bordered"
          />
          <input
            type="text"
            placeholder="Event Name"
            name="eventName"
            value={newStaff.eventName}
            onChange={handleInputChange}
            className="input input-bordered"
          />
          <input
            type="text"
            placeholder="Project Name"
            name="projectName"
            value={newStaff.projectName}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>
        <button onClick={addStaff} className="btn btn-primary">
          Add Staff
        </button>
      </div>
    </div>
  );
};

export default StaffManagement;
