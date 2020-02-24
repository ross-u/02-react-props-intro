import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.firstName} </h1>
      </div>
    );
  }
}
