import React, { Component } from "react";

// class MyComponent extends React.Component {

class MyComponent extends Component {
  state = {
    name: "Sarah",
    city: "Paris"
  };

  render() {
    return (
      <div>
        <h2>Hello {this.state.name} </h2>
        <p>Welcome to {this.props.city} </p>
      </div>
    );
  }
}

export default MyComponent;
