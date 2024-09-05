import React from "react";
import Signin from "./Signin";
import SignUP from "./SignUP";
import Header from "../header/Header";

const Abouts = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2">
        <Signin />
        <SignUP />
      </div>
    </div>
  );
};

export default Abouts;
