import React from "react";

const VolunteerProfile = () => {
  const user = {
    userId: "U12345",
    nid: "1234567890",
    email: "john.doe@example.com",
    name: "John Doe",
    phone: "+880123456789",
    dob: "1995-07-14",
    gender: "Male",
  };

  return (
    <div className="mt-10 min-h-screen p-4">
      <div className="max-w-2xl mx-auto p-6 bg-gray-200 rounded-lg shadow-xl">
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">User ID:</span>
              <span className="text-gray-900 font-medium">{user.userId}</span>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">NID:</span>
              <span className="text-gray-900 font-medium">{user.nid}</span>
            </div>{" "}
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Email:</span>
              <span className="text-gray-900 font-medium">{user.email}</span>
            </div>{" "}
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="text-gray-900 font-medium">{user.name}</span>
            </div>{" "}
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Phone:</span>
              <span className="text-gray-900 font-medium">{user.phone}</span>
            </div>{" "}
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Date of Birth:</span>
              <span className="text-gray-900 font-medium">{user.dob}</span>
            </div>{" "}
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Gender:</span>
              <span className="text-gray-900 font-medium">{user.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
