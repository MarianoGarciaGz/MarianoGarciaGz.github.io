import React from "react";

import Header from "./layout/Header/Header";
import Hero from "./components/Organism/Hero/Hero";
import About from "./components/Organism/About/About";
import Projects from "./components/Organism/Projects/Projects";

import Section from "./layout/Section/Section";

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Section name="about" container="xxl">
          <About></About>
        </Section>
        <Section name="projects" container="xxl">
          <Projects></Projects>
        </Section>
      </main>
    </>
  );
};

export default App;
