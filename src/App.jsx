import React from "react";

import Header from "@layout/Header/Header";
import Footer from "@layout/Footer/Footer";
import Hero from "@components/Organism/Hero/Hero";
import About from "@components/Organism/About/About";
import Projects from "@components/Organism/Projects/Projects";
import Technologies from "@components/Organism/Technologies/Technologies";

import Section from "@layout/Section/Section";

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Technologies></Technologies>
        <Projects></Projects>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
