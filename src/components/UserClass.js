import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummyName",
        location: "default",
      },
    };
    console.log("child Constr");
  }

  async componentDidMount() {
    console.log("child componentDidMount");
    const data = await fetch("https://api.github.com/users/vinayak214");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Update!!!");
  }

  componentWillUnmount() {}

  render() {
    console.log("child render");

    return (
      <div className="user-card">
        <h2>Name:{this.state.userInfo.login}</h2>
        <h3>Location:{this.state.userInfo.location}</h3>
        <h4>Contact:Vinayak214@gmail.com</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default UserClass;
