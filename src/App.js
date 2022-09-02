import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Header
} from "./components"; 

class App extends Component {

  render(){
    return (
      <div>
        <header className="header-bg">
          <Navbar />
          <Register/>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
