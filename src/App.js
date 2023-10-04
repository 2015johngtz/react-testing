//Imports
import React from "react";
import "./App.css";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Resume from "./components/pages/Resume/Resume";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import HorizontalScroll from 'react-scroll-horizontal'
import hero from "./images/HeroImage.png";
import CardMedia from "@mui/material/CardMedia";

// Function that renders components with useState
const App = () => {
  const [currentPage, setCurrentPage] = useState("About")
  return (
    <div id="image-rel" className="app">

      {/* MY IMAGE HOME CODE */}
      <div className="image-container">
        <CardMedia
        component="img"
        className="color-img"
        style={{
          height: "600px",
          width: "180px",
          marginLeft: "10px",
          position: "absolute",
          bottom: "0px",
          left: "10px",
          zIndex: 1, // Ensure it's above other content
        }}
        image={hero}
        alt="About Me"
        />
      </div>

      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <HorizontalScroll>
          <div className="main-wrap">
            <div id="about" className="main bg">
              <About />
            </div>
            <div id="portfolio" className="main bg1">
              <Portfolio />
            </div>
            <div id="hire-me" className="main bg3">
              <Contact />
            </div>
          </div>
        </HorizontalScroll>
      <Footer />

    </div>
  );
};

// Export
export default App;
