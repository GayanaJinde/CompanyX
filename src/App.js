import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register/Register";
import Company from "./components/Company/Company";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/NonAssigned/View.js";


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>{<Navbar />}{<Header />}</>}/>
          <Route path="/register" element={<>{<Navbar />}{<Register/>}</>}/>
          <Route path="/employees" element={<>{<Navbar />}{<Company/>}</>}/>
          <Route path="/view" element={<>{<Navbar />}{<View/>}</>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
