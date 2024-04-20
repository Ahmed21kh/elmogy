import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
