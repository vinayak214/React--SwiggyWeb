import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Ooops !!!</h1>
      <h2>Something went Wrong</h2>
      <h3>{err.statu}</h3>
    </div>
  );
};

export default Error;
