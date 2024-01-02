import React, { useEffect } from "react";

export const User = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval!!");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("UseEffect Return!!");
    };
  }, []);
  return (
    <div className="user-card">
      <h2>Name:Vinayak</h2>
      <h3>Location:Bentonville</h3>
      <h4>Contact:Vinayak214@gmail.com</h4>
    </div>
  );
};
