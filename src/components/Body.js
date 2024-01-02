import ResCard from "./ResCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/Usercontext";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredResto, setRfilteredResto] = useState([]);

  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(Usercontext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("value:::", json);
    setRestData(
      //optional chainingg
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRfilteredResto(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you're offline</h1>;
  }

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

  // if (restData.length === 0) {
  //   return <Shimmer />;
  // }
  return restData === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className=" m-4 bg-green-100 px-5 py-2 rounded-lg ease-in"
            onClick={() => {
              filterRest(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <span>Username:</span>
          <input
            value={loggedInUser}
            className="border border-black py-3"
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        {/* <button
          className="rounded-lg"
          onClick={() => {
            showTopRes();
          }}
        >
          Top Rated Restaurants
        </button> */}
      </div>
      <div className="flex px-4 m-4 flex-wrap">
        {filteredResto.map((resDetails) => (
          <Link
            key={resDetails.info.id}
            to={"/restaurants/" + resDetails.info.id}
          >
            <ResCard restData={resDetails} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
