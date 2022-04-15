import React from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Weather from "./routes/Weather";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </>
  );
}

export default App;
