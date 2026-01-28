import React from "react";
import AboutPage from "./AboutPage";
import FeaturesPages from "./Features";
import ContactPages from "./Contact";
import FooterPages from "./footer";
import Home from "./Home";

function Pages({ changeTheme, currentTheme }) {
  return (
    <>
      <Home changeTheme={changeTheme} currentTheme={currentTheme} />
      <AboutPage />
      <FeaturesPages />
      <ContactPages />
      <FooterPages />
    </>
  );
}

export default Pages;
