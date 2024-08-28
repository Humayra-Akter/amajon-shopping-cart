import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import login from "../../images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] mt-20 flex justify-center items-center mx-auto">
        <img src={login} className="w-96 h-96" />
      </div>
      <div className="w-[500px] mt-20 border-2 border-[#95a0a7] rounded-lg p-10 flex justify-center items-center mr-auto -ml-32">
        <div>
          <h2 className="text-3xl text-center mb-4 font-semibold text-[#2a414f]">
            Login
          </h2>
          <form onSubmit={handleUserSignIn}>
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
            <p style={{ color: "red" }}>{error?.message}</p>
            <input
              className="w-[400px] rounded-lg h-10 text-xl cursor-pointer bg-orange-300 hover:bg-orange-400"
              type="submit"
              value="Login"
            />
            {loading && <p>Loading...</p>}
          </form>
          <p className="mt-2 flex items-center justify-center">
            New to Ema-john?{" "}
            <Link className="text-orange-400 font-bold" to="/signup">
              Create New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
