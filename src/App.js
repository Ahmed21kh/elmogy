import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/rouet";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
