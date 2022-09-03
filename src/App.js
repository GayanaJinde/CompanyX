import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Header
} from "./components"; 

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>{<Navbar />}{<Header />}</>}/>
          <Route path="/register" element={<>{<Navbar />}{<Register/>}</>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
