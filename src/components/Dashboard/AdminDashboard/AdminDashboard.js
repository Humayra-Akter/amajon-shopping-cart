import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div
        className="drawer lg:drawer-open"
        style={{
          fontFamily: "'Concert One', cursive",
        }}
      >
        <input
          id="admin-drawer-2"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-left">
          <h1 className="w-full h-full font-extrabold text-left text-5xl text-secondary    pl-4 pt-7">
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
          <ul className="menu p-4 h-full bg-primary text-base-content">
            <li>
              <Link
                to="/adminDashboard"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full pt-20 uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Profile
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/orderHistory"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Order History
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/adminCabin"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Admin Cabin
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/adminDonation"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold  text-center text-sm text-secondary"
              >
                👉 Admin Donation
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/adminFeedback"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Admin Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/adminPrice"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Admin Price
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/appointments"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Appointments
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/notifications"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Notifications
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/loyalty"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Loyalty & Rewards
              </Link>
            </li>
            <li>
              <Link
                to="/adminDashboard/wishlist"
                className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none w-full uppercase h-full font-bold    text-center text-sm text-secondary"
              >
                👉 Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
