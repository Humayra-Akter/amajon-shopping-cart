import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../header/Header";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4">
        <div className="grid col-span-3 gap-11 mt-20 ml-20">
          <div className="grid grid-cols-3 gap-y-8">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            ))}
          </div>

          <div className="mr-2 bg-white border border-[#ffa500]">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={page === number ? "bg-[#ffa500] text-white" : ""}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
            <select onChange={(e) => setSize(e.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div>
          <Cart cart={cart}>
            <Link to="/orders">
              <button className="h-10 mt-6 bg-[#efba6a] rounded-r-xl rounded-l-xl gap-3 w-full flex items-center justify-center hover:bg-[#cc7a00] px-3">
                Review Button
                <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
