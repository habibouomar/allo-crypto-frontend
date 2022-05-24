import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profil from "../pages/Profil";
import Crypto from "../pages/Crypto";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

export class Router extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/cryptomonaie" element={<Crypto />} />
        </Routes>
      </>
    );
  }
}
