import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Usercontext from "./utils/Usercontext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

/** lazy loading --- when app loads it wont load the grocery page. when clicked on grocery only it will loads the code */

const Grocery = lazy(() => import("./components/Grocery"));

export const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <Usercontext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </Usercontext.Provider>
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
