import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar title="Texto" />
      <div className="container">
        <Routes>
          <Route extact path="/About" element={<About />} />
          <Route extact path="/Contact" element={<Contact />} />
          <Route
            extact
            path="/Texto-React-Project"
            element={<TextForm heading="Welcome to texto" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
