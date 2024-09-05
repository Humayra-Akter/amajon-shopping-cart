import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";

const Orders = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const updatedCart = cart.filter((pd) => pd._id !== product._id);
    setCart(updatedCart);
    const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
    delete storedCart[product._id];
    localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <div className="product-review-section col-span-2 grid grid-cols-2 gap-4">
          {cart.map((product) => (
            <ReviewItem
              key={product._id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))}
        </div>
        <div>
          <Cart cart={cart}>
            <button
              className="h-10 mt-6 bg-[#efba6a] rounded-r-xl rounded-l-xl gap-3 w-full flex items-center justify-center hover:bg-[#cc7a00] px-3"
              onClick={() => navigate("/shipment")}
            >
              Proceed Shipping
              <FontAwesomeIcon icon={faTruckFast} />
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
