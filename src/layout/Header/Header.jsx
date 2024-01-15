import React, { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";

const Header = () => {
  const { header } = useContext(GlobalContext);
  const { menu } = header;

  return (
    <>
      <header
        className="header container-fluid fixed-top"
        data-aos="fade-down"
        data-aos-delay="1500"
      >
        <nav className="header-nav nav navbar navbar-expand-md p-0">
          <div className="d-flex align-items-center ">
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
          <button
            className="header-btn navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="header-i bi bi-list"></i>
          </button>
          <div className="nav-collapse collapse navbar-collapse" id="navbarNav">
            <ul className="nav-ul navbar-nav text-center ms-auto">
              {menu.map(({ id, href, title }) => (
                <li key={id} className="nav-li nav-item">
                  <a href={href} className="header-a nav-link fs-4">
                    {title}
                  </a>
                </li>
              ))}
              <ul className="hero__list list-inline d-md-none m-0">
                <li className="list-inline-item ">
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
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
