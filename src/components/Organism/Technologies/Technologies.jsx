import React from "react";

import H2 from "@components/Atoms/H2/H2";
import Section from "@layout/Section/Section";

import CardTech from "@components/Molecules/CardTech/CardTech";

/* technologies images logos */
import fl from "@img/logos/fl.png";
import js from "@img/logos/js.png";
import css from "@img/logos/css.png";
import git from "@img/logos/git.png";
import html from "@img/logos/html.png";
import scss from "@img/logos/scss.png";
import figma from "@img/logos/figma.png";
import react from "@img/logos/react.png";
import vegas from "@img/logos/vegas.png";
import bs from "@img/logos/bootstrap.png";
import python from "@img/logos/python.svg";
import photoshop from "@img/logos/photoshop.png";

const techData = [
  {
    title: "html",
    img: html,
    content: ["SEO", "Semantic"],
  },
  {
    title: "css",
    img: css,
    content: ["Dark mode", "Media querys", "BEM methodology"],
  },
  {
    title: "JavaScript",
    img: js,
    content: ["Good practices", "ES6 Features", "Async/Await"],
  },
  {
    title: "Scss",
    img: scss,
    content: ["Dark mode", "Suit CSS methodology", "BEM methodology"],
  },
  {
    title: "React",
    img: react,
    content: [
      "Atomic Design",
      "State Management (Redux, Context)",
      "React Hooks",
    ],
  },
  {
    title: "Python",
    img: python,
    content: ["Data Analysis", "Web Development with Django", "Automation"],
  },
  {
    title: "Bootstrap",
    img: bs,
    content: ["Responsive Design", "Component Library Usage"],
  },
  {
    title: "Git",
    img: git,
    content: [
      "Version Control",
      "Branching Strategies",
      "Collaborative Workflows",
    ],
  },
  {
    title: "Photoshop",
    img: photoshop,
    content: ["Photo Editing", "Graphic Design", "Digital Art"],
  },
  {
    title: "Figma",
    img: figma,
    content: ["UI/UX Design", "Collaborative Design", "Prototyping"],
  },
  {
    title: "Fl Studio",
    img: fl,
    content: ["Music production", "Audio editing", "Sound designs"],
  },
  {
    title: "Vegas Pro",
    img: vegas,
    content: ["Video Editing", "Motion Graphics", "Special Effects"],
  },
];

const Technologies = () => {
  return (
    <Section container="xxl" name="technologies">
      <H2>Technologies</H2>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xxl-6 g-2 g-lg-3 justify-content-center">
        {techData.map((tech, index) => (
          <CardTech
            title={tech.title}
            img={tech.img}
            key={index}
            number={index}
          >
            <p className="CardTech-p card-text">
              {tech.content.map((item, i) => (
                <React.Fragment key={i}>
                  <i className="bi bi-arrow-return-right me-1"></i>
                  {item}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </CardTech>
        ))}
      </div>
    </Section>
  );
};

export default Technologies;
