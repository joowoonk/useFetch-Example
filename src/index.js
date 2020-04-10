import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch"

import "./styles.scss";

function App() {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  console.log("earaewr",res)
  if (!res.response) {
    return <div>Loading...</div>
  }
  const dogName = res.response.status
  const imageUrl = res.response.message
  return (
    <div className="App">
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
