import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // to read the value from the store

  console.log("cartItems::", cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>

      <div className="w-6/12 m-auto p-5">
        <button
          onClick={handleClearCart}
          className="rounded-lg bg-black text-white p-4"
        >
          Clear Cart
        </button>
        {/* {cartItems.length == 0 && <h1>Add items to Cart!!</h1>}
        <ItemList items={cartItems} /> */}

        {cartItems.length === 0 ? (
          <h1>Add items to Cart!!</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
