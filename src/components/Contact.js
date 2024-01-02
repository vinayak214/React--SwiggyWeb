import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-4 p-4 ">Contact Us page!</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 ,m-2"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 ,m-2"
          placeholder="Message"
        ></input>
        <button className="border border-black p-2 m-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
