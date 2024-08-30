import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

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
    <div className="shop-container">
      <div className="product-review-section">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")}>
            Proceed Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
