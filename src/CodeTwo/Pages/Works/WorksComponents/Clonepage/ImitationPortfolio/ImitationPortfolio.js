import React from "react";
import "./ImitationPortfolio.scss";
import NavBar from "./Components/navbar/NavBar";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import Portforlio from "./Components/portforlio/Portforlio";
import Contact from "./Components/contact/Contact";

export default function ImitationPortfolio() {
  return (
    <div id="ImitationPortfolio">
    
      <section id="Homepage">
      <NavBar></NavBar>
        <Hero></Hero>
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services></Services>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portforlio />
      {/* <section id="Contact"><Contact/> </section> */}
    </div>
  );
}
