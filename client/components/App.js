import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default App;
