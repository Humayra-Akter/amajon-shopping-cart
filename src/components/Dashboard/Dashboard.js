import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="drawer lg:drawer-open"
      style={{
        fontFamily: "'Concert One', cursive",
      }}
    >
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <h1 className="w-full h-full font-extrabold text-left text-5xl   o text-secondary pl-4 pt-7">
          Dashboard
        </h1>
        <Outlet />
        <label
          for="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-52 h-full bg-primary text-base-content">
          <li>
            <Link
              to="/dashboard"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 Admin
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/customers"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 customers
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/staff"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 staff
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/vet"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase   o h-full font-bold text-center text-sm text-secondary font mono "
            >
              👉 veterinarian
            </Link>
          </li>

          
    

          <li>
            <Link
              to="/dashboard/donation"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 donation
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/feedback"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 feedback
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/rescuer"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 rescuer
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/cabin"
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
            >
              👉 cabin
            </Link>
          </li>
          <li>
            <Link
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
              to="/dashboard/daycareAnimal"
            >
              👉 daycare Animal
            </Link>
          </li>
          <li>
            <Link
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold   o text-center text-sm text-secondary font mono "
              to="/dashboard/rescuedAnimal"
            >
              👉 rescued Animal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
