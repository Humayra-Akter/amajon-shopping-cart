import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="admin-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <h1 className="w-full h-full font-extrabold text-left text-5xl pl-4 pt-7">
            Dashboard
          </h1>
          <Outlet />
          <label
            htmlFor="admin-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed left-0 top-0 h-screen">
          <label htmlFor="admin-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 h-full bg-gray-100 text-base-content">
            <li>
              <Link
                to="/adminDashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold text-center text-sm"
              >
                👉 Event Management
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/projectManagement"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Project Management
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/staffManagement"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Staff Management
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/taskManagement"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Task Management
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/needyPeopleManagement"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Needy People
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/volunteer"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Volunteer
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/donor"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Donor
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/transaction"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Transaction
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold text-center text-sm"
              >
                👉 Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
