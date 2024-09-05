import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AdminProfile = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState({});
  const [updatedCustomer, setUpdatedCustomer] = useState({});
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData?.email === user?.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
              setUpdatedCustomer({ ...matchingUser });
            }
          }
        });
    }
  }, [user]);

  const handleCancelEdit = () => {
    setEditable(false);
    setUpdatedCustomer({ ...loggedUser });
  };

  const handleUpdateInfo = (field, value) => {
    setUpdatedCustomer((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    fetch(`http://localhost:5000/user/${loggedUser?.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEditable(false);
      });
  };

  return (
    <div
      className="mt-10 min-h-screen p-4"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <div
     
        className="max-w-3xl mx-auto border-4 border-accent bg-white rounded p-6 shadow-md"
      >
        <h2 className="text-2xl text-secondary    text-center font-bold mb-7">
          Your Profile
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label className="block    font-bold mb-2">Name:</label>
            <input
              type="text"
              value={loggedUser.name}
              onChange={(e) => handleUpdateInfo("name", e.target.value)}
              className={`w-full px-3 py-2 border rounded shadow appearance-none ${
                editable ? "" : "bg-gray-100"
              }`}
              readOnly={!editable}
            />
          </div>
          <div className="mb-4">
            <label className="block     font-bold mb-2">Email:</label>
            <input
              type="email"
              value={loggedUser.email}
              onChange={(e) => handleUpdateInfo("email", e.target.value)}
              className={`w-full px-3 py-2 border rounded shadow appearance-none ${
                editable ? "" : "bg-gray-100"
              }`}
              readOnly={!editable}
            />
          </div>
        </div>{" "}
        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label className="block    font-bold mb-2">Password:</label>
            <input
              type="password"
              value={loggedUser.password}
              onChange={(e) => handleUpdateInfo("password", e.target.value)}
              className={`w-full px-3 py-2 border rounded shadow appearance-none ${
                editable ? "" : "bg-gray-100"
              }`}
              readOnly={!editable}
            />
          </div>

          <div className="mb-4">
            <label className="block    font-bold mb-2">Role:</label>
            <input
              type="text"
              value={loggedUser.role}
              readOnly
              className="w-full px-3 py-2 border rounded shadow appearance-none bg-gray-100"
            />
          </div>
        </div>
        <div className="flex items-end justify-end">
          {!editable && (
            <button
              onClick={handleEdit}
              className="bg-primary hover:bg-secondary hover:text-primary text-secondary    font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
          )}

          {editable && (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
