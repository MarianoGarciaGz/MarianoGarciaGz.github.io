import React from "react";
import "./About.scss";
import draw from "@img/draw.png";
import H2 from "@components/Atoms/H2/H2";
// import H2 from "../../Atoms/H2.jsx/H2";

const About = () => {
  return (
    <>
      <H2>About</H2>
      <div className="row">
        <div className="col-12 col-md-6 align-self-center">
          <p className="about-text lead my-5 text-center text-md-start">
            A multifaceted professional with expertise in{" "}
            <strong className="about-strong fw-bold">audio engineering</strong>,{" "}
            <strong className="about-strong fw-bold">development</strong>, and{" "}
            <strong className="about-strong fw-bold">design</strong>, dedicated
            to crafting immersive digital experiences that resonate profoundly
            with users and clients.
          </p>
          <div>
            <a className="btn btn-primary" href="">
              {" "}
              <i className="bi bi-github"></i>
              Github
            </a>
            <a className="btn btn-secondary" href="">
              <i className="bi bi-cloud-fill"></i>
              SoundCloud
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img className="about-img" src={draw} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
