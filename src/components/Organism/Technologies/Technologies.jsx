import React from "react";

import H2 from "@components/Atoms/H2/H2";
import Section from "@layout/Section/Section";

import CardTech from "../../Molecules/CardTech/CardTech";

import html from "@img/logos/html.png";
import css from "@img/logos/css.png";
import scss from "@img/logos/scss.png";
import js from "@img/logos/js.png";
import react from "@img/logos/react.png";
import python from "@img/logos/python.svg";
import bs from "@img/logos/bootstrap.png";
import git from "@img/logos/git.png";

const Technologies = () => {
  return (
    <Section container="fluid" name="technologies">
      <H2>Technologies</H2>
      <div className="row justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="html" img={html}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="css" img={css}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Suit CSS
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="JavaScript" img={js}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="Scss" img={scss}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="React" img={react}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="Python" img={python}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="Bootstrap" img={bs}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> SEO <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <CardTech title="Git" img={git}>
            <p className="CardTech-p card-text">
              <i class="bi bi-arrow-return-right me-1"></i> Good practices
              <br />
              <i class="bi bi-arrow-return-right me-1"></i>Semantic
            </p>
          </CardTech>
        </div>
      </div>
    </Section>
  );
};

export default Technologies;
