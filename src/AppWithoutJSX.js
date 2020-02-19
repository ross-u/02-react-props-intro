/* 
EXAMPLE:
Creating React component without JSX (using the method React.createElement).

`React.createElement` syntax :
    React.createElement( component, props, ...children ) 
*/

import React from "react";
import "./App.css";

const element = React.createElement;

class AppWithoutJSX extends React.Component {
  render() {
    return element("div", { className: "App" }, [
      element("h1", null, "Hello Ironhackers"),
      element("h3", null, "React without JSX")
    ]);
  }

  /*
  // The above example can be written with JSX in a much cleaner way:

  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      	<h3>React Intro</h3>
      </div>
    );
  } 

    */
}

export default AppWithoutJSX;
