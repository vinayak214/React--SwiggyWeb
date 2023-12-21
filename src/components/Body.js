import ResCard from "./ResCard";
import { resList } from "../utils/data";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredResto, setRfilteredResto] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   "json!!!!!!",
    //   json.data.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setRestData(
      //optional chainingg
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRfilteredResto(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const showTopRes = () => {
    const filteredList = restData.filter((item) => item.rating > 4);
    setRestData(filteredList);
  };
  const filterRest = (value) => {
    console.log("filtered", restData);
    const filteredResto = restData.filter((item) =>
      item.info.name.toLowerCase().includes(value.toLowerCase())
    );
    setRfilteredResto(filteredResto);
  };

  if (restData.length === 0) {
    return <Shimmer />;
  }
  return restData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            // onReset={(e) => setSearchText(e.target.value)}
            className="searc-box"
          ></input>
          <button
            onClick={() => {
              filterRest(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            showTopRes();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResto.map((resDetails) => (
          <ResCard restData={resDetails} key={resDetails.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
