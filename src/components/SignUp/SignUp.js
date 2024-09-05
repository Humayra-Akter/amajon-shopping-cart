import React, { useState } from "react";
import signup from "../../images/Signup.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "../header/Header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/inventory");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (password.length < 8) {
      setError("Password must include 8 character");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="w-[500px] mt-20 flex justify-center items-center mx-auto">
          <img src={signup} className="w-96 h-96" />
        </div>
        <div className="w-[500px] mt-20 border-2 border-[#95a0a7] rounded-lg p-10 flex justify-center items-center mr-auto -ml-32">
          <div>
            <h2 className="text-3xl text-center mb-4 font-semibold text-[#2a414f]">
              Signup
            </h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-5">
                <label className="block ml-1 pb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
                  onBlur={handleEmailBlur}
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block ml-1 pb-1" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-[400px] h-10 border-2 border-[#95a0a7] rounded-lg text-lg"
                  onBlur={handlePasswordBlur}
                  type="password"
                  name="password"
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
                  onBlur={handleConfirmPasswordBlur}
                  type="password"
                  name="confirm-password"
                  id=""
                  required
                />
              </div>
              <p style={{ color: "red" }}>{error}</p>
              <input
                className="w-[400px] rounded-lg h-10 text-xl cursor-pointer bg-orange-300 hover:bg-orange-400"
                type="submit"
                value="Signup"
              />
            </form>
            <p className="mt-2 flex items-center justify-center">
              Already have an account?
              <Link className="text-orange-400 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
