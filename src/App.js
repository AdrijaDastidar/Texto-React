import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar title="Texto" />
      <div className="container">
        <TextForm heading="Welcome To Texto" />
      </div>
    </>
    // <Router>
    //   <Navbar title="Texto" />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/About" element={<About />} />
    //       <Route path="/Contact" element={<Contact />} />
    //       <Route path="/" element={<TextForm heading="Welcome to texto" />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
