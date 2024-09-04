import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-[#1c2b35] h-20 flex items-center px-36 justify-between">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        <Link
          className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
          to="/orders"
        >
          Orders
        </Link>
        <Link
          className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
          to="/inventory"
        >
          Inventory
        </Link>
        <Link
          className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
          to="/about"
        >
          About
        </Link>
        {user ? (
          <button
            className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <Link
            className="text-white font-normal text-lg ml-9 hover:text-[#daa520]"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
