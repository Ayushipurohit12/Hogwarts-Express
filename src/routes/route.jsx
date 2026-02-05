import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../component/navbar/navbar";
import Home from "../pages/Home";
import Journey from "../component/journey/Journey";
import Features from "../component/feature/feature";
import Contact from "../component/contact/contact";
import Footer from "../component/footer/footer";

function AppRoutes({ changeTheme, currentTheme }) {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.replace("/", "") || "home";
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar changeTheme={changeTheme} currentTheme={currentTheme} />
      <div id="home">
        <Home changeTheme={changeTheme} currentTheme={currentTheme} />
      </div>
      <div id="journey">
        <Journey />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
       <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default AppRoutes;
