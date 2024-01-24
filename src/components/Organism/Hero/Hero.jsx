import React from "react";
import mariano from "@img/mariano.png";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero container-fluid d-flex align-items-center">
      <div className="row mx-auto">
        <div
          className="col-12 col-lg-6 hero-div d-flex align-items-center"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-once="true"
        >
          <h1 className="hero-title h1 text-center text-lg-start display-1 mx-auto mx-lg-0">
            Front-end{" "}
            <strike
              className="hero-strike lh-lg"
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
          className="col-12 col-lg-6 hero-back-img d-flex align-items-center"
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-once="true"
        >
          <div
            className=""
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <img
              className="hero-front-img align-self-center"
              src={mariano}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
