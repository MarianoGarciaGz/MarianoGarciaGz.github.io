import React from "react";
import mariano from "@img/mariano-photo.png";
import ball from "@img/svg/blob.svg";

import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      {/* Ball background */}
      <div className="hero__photo hero__photo--ball position-absolute d-flex justify-content-center align-items-center vh-100 z-0">
        <img className="hero__img-ball w-50" src={ball} alt="ball" />
      </div>

      {/* Text */}
      <div
        className="hero__text-container position-absolute d-flex w-100 h-100 justify-content-center align-items-center z-1"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h1 className="hero__title h1 text-center align-self-center display-1">
          Full-stack{" "}
          <strike
            className="hero__strike lh-lg"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
          >
            developer
          </strike>{" "}
          <br />
          <em
            className="hero__em"
            data-aos="zoom-out-right"
            data-aos-delay="500"
            data-aos-once="true"
          >
            &
          </em>{" "}
          <strong
            className="hero__strong"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-once="true"
          >
            music producer
          </strong>
        </h1>
      </div>

      {/* Mariano photo */}
      <div className="hero__photo hero__photo--mariano d-flex justify-content-center align-items-center vh-100 z-2">
        <img className="hero__img-front w-50 p-5" src={mariano} alt="mariano" />
      </div>
    </section>
  );
};

export default Hero;
