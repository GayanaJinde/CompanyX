import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register/Register";
import Company from "./components/Company/Company";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/NonAssigned/View.js";
import CreateCompany from "./components/Company/CComponents/Organization/CreateCompany";

//server is running port 3000

class App extends Component {

  componentDidMount(){
    fetch('https://still-oasis-80942.herokuapp.com')
      .then(response => response.json())
      .then(console.log);
  }

  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>{<Navbar />}{<Header />}</>}/>
          <Route path="/register" element={<>{<Navbar />}{<Register/>}</>}/>
          <Route path="/employees" element={<>{<Navbar />}{<Company/>}</>}/>
          <Route path="/view" element={<>{<Navbar />}{<View/>}</>}/>
          <Route path="/create" element={<>{<Navbar />}{<CreateCompany/>}</>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
