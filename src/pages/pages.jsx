import React from "react";
import Home from "./home";
import AboutPage from "./AboutPage";
import FeaturesPages from "./Features";
import ContactPages from "./Contact";

function Pages({ changeTheme, currentTheme }) {
  return (
    <>
      <Home changeTheme={changeTheme} currentTheme={currentTheme} />
      <AboutPage />
      <FeaturesPages />
      <ContactPages />
    </>
  );
}

export default Pages;
