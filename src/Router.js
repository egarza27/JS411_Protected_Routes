import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute component={Home} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<ProtectedRoute component={About} />} />
      <Route path="/car/:id" element={<ProtectedRoute component={Car} />} />
    </Routes>
  );
};

export default Router;
