import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("shopping-cart")) || {};

    const fetchCartProducts = async () => {
      const keys = Object.keys(storedCart);
      if (keys.length) {
        const response = await fetch("http://localhost:5000/productsByKeys", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(keys),
        });
        const products = await response.json();

        const updatedCart = products.map((product) => {
          return {
            ...product,
            quantity: storedCart[product._id],
          };
        });
        setCart(updatedCart);
      }
    };

    fetchCartProducts();
  }, []);

  return [cart, setCart];
};

export default useCart;
