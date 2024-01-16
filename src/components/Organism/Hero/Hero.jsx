import React from "react";
import blob from "@img/svg/blob.svg";
import img from "@img/hero.jpeg";
import mariano from "@img/mariano.png";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero d-flex container-fluid">
      <div className="row w-100">
        <div className="col-12 col-lg-6 hero-div d-flex align-items-center">
          <h1
            className="hero-title h1 text-center text-lg-start display-1 w-100"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-once="true"
          >
            Front-end{" "}
            <strike
              className="hero-strike"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-bottom"
            >
              developer
            </strike>{" "}
            <br />
            <em
              className="hero-em"
              data-aos="zoom-out-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              &
            </em>{" "}
            <strong
              className="hero-strong"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-once="true"
            >
              music producer
            </strong>
          </h1>
        </div>
        <div
          className="col-12 col-lg-6 align-self-center hero-back-img"
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-once="true"
        ></div>
        <div data-aos="fade-down" data-aos-delay="0" data-aos-once="true">
          <img className="hero-front-img" src={mariano} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
