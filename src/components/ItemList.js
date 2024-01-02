import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log("ItemList::", items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>-${item.card.info.price / 100}</span>
            </div>
            <p className="text-xs font-bold p-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12 -4">
            <div className="absolute">
              <button
                className="p-2 mx-10 rounded-lg bg-black text-white shadow-lg items-center"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
