import React from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Weather from "./routes/Weather";
import CryptoUpdate from "./routes/CryptoUpdate";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />}  />
        <Route path="/crypto-update" element={<CryptoUpdate />} />
      </Routes>
    </>
  );
}

export default App;
