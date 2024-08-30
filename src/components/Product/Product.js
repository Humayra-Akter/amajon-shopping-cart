import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  return (
    <div className="w-[305px] h-[500px] border border-[#95a0a7] rounded-lg relative">
      <img className="w-[286px] h-[286px] flex items-center justify-center rounded-lg m-2" src={img} alt="" />
      <div className="my-3 p-5">
        <p className="font-normal text-xl text-[#0e161a] mt-2">{name}</p>
        <p className="mt-1">Price : ${price}</p>
        <p className="mt-1">
          <small>Seller : {seller}</small>
        </p>
        <p className="mt-1">
          <small>Ratings : {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="h-12 w-[303px] bg-[#ffe0b3] rounded-r-xl rounded-l-xl absolute bottom-0 flex items-center justify-center hover:bg[#daa520]"
      >
        <h4 className="mr-1">Add to Cart </h4>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
