import React from "react";

const SignUP = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-200 mt-6 mb-3">
        <span className="text-gray-600">Hope </span>
        <span className="text-red-600">Horizon</span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="account"
              >
                Select Account
              </label>
              <select
                id="account"
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Choose your account</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="volunteer">Volunteer</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center text-gray-400">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
            <p className="text-gray-400 text-center mt-4">
              Don’t have an account yet?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Sign up
              </a>
            </p>
            <div className="my-4 flex items-center">
              <div className="border-t border-gray-500 flex-grow mr-2"></div>
              <span className="text-gray-400">or continue via</span>
              <div className="border-t border-gray-500 flex-grow ml-2"></div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                google
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                facebook
              </button>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                linked in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
