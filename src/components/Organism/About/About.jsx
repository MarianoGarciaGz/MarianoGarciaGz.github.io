import React from "react";
import "./About.scss";
import draw from "@img/draw.png";
import H2 from "@components/Atoms/H2/H2";
import Section from "@layout/Section/Section";

const About = () => {
  return (
    <Section container="xxl" name="about" className="About">
      <H2>About</H2>
      <div className="row" data-aos="fade-up">
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
            <a className="About-btn btn btn-primary me-3 mb-2 mb-sm-0" href="https://github.com/MarianoGarciaGz">
              {" "}
              <i className="bi bi-github me-2"></i>
              Github
            </a>
            <a
              className="About-btn.orange btn btn-secondary me-3 mb-2 mb-sm-0"
              href="https://soundcloud.com/dowdyprogrammer"
            >
              <i className="bi bi-cloud-fill me-2"></i>
              SoundCloud
            </a>
            <a
              className="About-btn btn btn-success me-3 mb-2 mb-sm-0"
              href="https://open.spotify.com/intl-es/artist/2k5EgJml0LNzElMQpj0QOW"
            >
              <i className="bi bi-spotify me-2"></i>
              Spotify
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img className="about-img" src={draw} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default About;
