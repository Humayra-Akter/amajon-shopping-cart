import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, email, phoneNumber };
    console.log(shipping);
  };

  return (
    <div className="w-[500px] mt-20 border-2 border-[#95a0a7] rounded-lg p-10 flex justify-center items-center mx-auto">
      <div>
        <h2 className="text-3xl text-center mb-4 font-semibold text-[#2a414f]">
          Shipping Information
        </h2>
        <form onSubmit={handleCreateUser}>
          <div className="mb-5">
            <label className="block ml-1 pb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
              onBlur={handleNameBlur}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block ml-1 pb-1" htmlFor="email">
              email
            </label>
            <input
              className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block ml-1 pb-1" htmlFor="address">
              Address
            </label>
            <input
              className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="mb-5">
            <label className="block ml-1 pb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
              onBlur={handlePhoneNumberBlur}
              type="text"
              name="phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            className="w-[400px] rounded-lg h-10 text-xl cursor-pointer bg-orange-300 hover:bg-orange-400"
            type="submit"
            value="Add Shipping"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
