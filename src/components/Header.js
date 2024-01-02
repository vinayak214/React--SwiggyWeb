import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const data = useContext(Usercontext);

  //seelector
  const cartItems = useSelector((store) => store.cart.items); // to read the value from the store

  return (
    <div className="flex justify-between items-center">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo"></img>
      </div>
      <div>
        <ul className="flex p-4 m-4 gap-5">
          <li>Online{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart">Cart-({cartItems?.length})items</Link>
          </li>
          <li>User:{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
