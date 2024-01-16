import React from "react";
import H2 from "@components/Atoms/H2/H2";

const Footer = () => {
  return (
    <footer className="bg-gray" id="contact">
      <H2>Contact</H2>
      <div className="d-flex align-items-center">
        <span className="header-span me-4 fs-1">@MarianoGarciaGz</span>
        <ul className="hero__list list-inline m-0 d-none d-md-flex">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/marianogargz">
              <i className="hero__bi bi bi-github"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.facebook.com/marianogargz">
              <i className="hero__bi bi bi-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/marianogarciagz">
              <i className="hero__bi bi bi-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/marianogarciagz/">
              <i className="hero__bi bi bi-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/marianogarciagz/">
              <i className="hero__bi bi bi-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="">
              <i className="hero__bi bi bi-spotify"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="">
              <i className="hero__bi bi bi-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
