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
import StaffDashboard from "./components/Dashboard/StaffDashboard/StaffDashboard";
import StaffProfile from "./components/Dashboard/StaffDashboard/StaffProfile";
import StaffProject from "./components/Dashboard/StaffDashboard/StaffProject";
import StaffEvent from "./components/Dashboard/StaffDashboard/StaffEvent";
import StaffVolunteer from "./components/Dashboard/StaffDashboard/StaffVolunteer";
import DonorDashboard from "./components/Dashboard/DonorDashboard/DonorDashboard";
import NeedyPeople from "./components/Dashboard/NeedyPeople/NeedyPeople";
import NeedyProfile from "./components/Dashboard/NeedyPeople/NeedyProfile";
import NeedyHistory from "./components/Dashboard/NeedyPeople/NeedyHistory";
import ApplyHelp from "./components/Dashboard/NeedyPeople/ApplyHelp";
import StaffTask from "./components/Dashboard/StaffDashboard/StaffTask";
import NeedyPeopleManagement from "./components/Dashboard/AdminDashboard/NeedyPeopleManagement";
import VolunteerDashboard from "./components/Dashboard/VolunteerDashboard/VolunteerDashboard";
import VolunteerProfile from "./components/Dashboard/VolunteerDashboard/VolunteerProfile";
import PendingTask from "./components/Dashboard/VolunteerDashboard/PendingTask";
import CompletedTask from "./components/Dashboard/VolunteerDashboard/CompletedTask";

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
        <Route path="/signup" element={<SignUp />}></Route>{" "}
        <Route
          path="/adminDashboard"
          element={
            <RequireAuth>
              <AdminDashboard />
            </RequireAuth>
          }
        >
          <Route index element={<EventManagement />} />
          <Route path="projectManagement" element={<ProjectManagement />} />
          <Route path="staffManagement" element={<StaffManagement />} />
          <Route path="taskManagement" element={<TaskManagement />} />
          <Route
            path="needyPeopleManagement"
            element={<NeedyPeopleManagement />}
          />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="donor" element={<Donor />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
        <Route path="staffDashboard" element={<StaffDashboard />}>
          <Route index element={<StaffProfile />} />
          <Route path="staffProject" element={<StaffProject />} />
          <Route path="staffEvent" element={<StaffEvent />} />
          <Route path="taskManagement" element={<StaffTask />} />
          <Route path="staffVolunteer" element={<StaffVolunteer />} />
        </Route>
        <Route path="volunteerDashboard" element={<VolunteerDashboard />}>
          <Route index element={<VolunteerProfile />} />
          <Route path="pendingTask" element={<PendingTask />} />
          <Route path="completedTask" element={<CompletedTask />} />
        </Route>
        <Route path="needyPeople" element={<NeedyPeople />}>
          <Route index element={<NeedyProfile />} />
          <Route path="applyHelp" element={<ApplyHelp />} />
          <Route path="needyHistory" element={<NeedyHistory />} />
        </Route>
        <Route path="/donorDashboard" element={<DonorDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
