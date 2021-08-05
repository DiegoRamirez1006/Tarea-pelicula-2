import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import Agregar from "./Agregar";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Agregar/>
      </div>
    );
  }
}
export default App;
