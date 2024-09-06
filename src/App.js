import { Route, Routes } from "react-router-dom";
import "./App.css";
import Abouts from "./components/Abouts/Abouts";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/home/Home";
import ReviewItem from "./components/ReviewItem/ReviewItem";
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard";
import EventManagement from "./components/Dashboard/AdminDashboard/EventManagement";
import ProjectManagement from "./components/Dashboard/AdminDashboard/ProjectManagement";
import StaffManagement from "./components/Dashboard/AdminDashboard/StaffManagement";
import TaskManagement from "./components/Dashboard/AdminDashboard/TaskManagement";
import Volunteer from "./components/Dashboard/AdminDashboard/Volunteer";
import Donor from "./components/Dashboard/AdminDashboard/Donor";
import Transaction from "./components/Dashboard/AdminDashboard/Transaction";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<Abouts />}></Route>
        <Route path="/review" element={<ReviewItem />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="adminDashboard" element={<AdminDashboard />}>
          <Route index element={<EventManagement />} />
          <Route path="projectManagement" element={<ProjectManagement />} />
          <Route path="staffManagement" element={<StaffManagement />} />
          <Route path="taskManagement" element={<TaskManagement />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="donor" element={<Donor />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
