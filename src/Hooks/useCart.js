// import { useEffect, useState } from "react";
// import { getStoredCart } from "../utilities/fakedb";

// const useCart = () => {
//   const [cart, setCart] = useState([]);
//   useEffect(() => {
//     const storedCart = getStoredCart();
//     const savedCart = [];
//     const keys = Object.keys(storedCart);
//     fetch("http://localhost:5000/productByKeys", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(keys),
//     })
//       .then((res) => res.json())
//       .then((products) => {
//         for (const id in storedCart) {
//           const addedProduct = products.find((product) => product._id === id);
//           if (addedProduct) {
//             const quantity = storedCart[id];
//             addedProduct.quantity = quantity;
//             savedCart.push(addedProduct);
//           }
//         }
//         setCart(savedCart);
//       });
//   }, []);
//   return [cart, setCart];
// };
// export default useCart;
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
