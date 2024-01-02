import { User } from "./User";
import React from "react";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constr");
//   }
//   componentDidMount() {
//     console.log("Parent componentDidMount");
//   }
//   render() {
//     console.log("Parent render");
//     return (
//       <div>
//         <h1>Class Component:</h1>
//         <UserClass name={"Vinu"} location="India" />
//       </div>
//     );
//   }
// }
const About = () => {
  return (
    <div>
      {/* <h1>Functional Component:</h1>
      <User /> */}
      <h1>Class Component:</h1>
      <User name={"Vinu"} location="India" />
    </div>
  );
};
export default About;
