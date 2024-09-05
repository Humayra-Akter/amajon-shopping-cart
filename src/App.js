import { Route, Routes } from "react-router-dom";
import "./App.css";
import Abouts from "./components/Abouts/Abouts";
import Header from "./components/header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/home/Home";
import ReviewItem from "./components/ReviewItem/ReviewItem";

function App() {
  return (
    <div>
      {/* <Header></Header> */}
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

        
    
            {/* <Route path="customerDashboard" element={<DashboardCustomer />}> */}
              {/* <Route index element={<CustomerProfile />}></Route> */}
              {/* <Route path="orderHistory" element={<OrderHistory />}></Route> */}
            
            {/* </Route> */}
 
      </Routes>
    </div>
  );
}

export default App;
