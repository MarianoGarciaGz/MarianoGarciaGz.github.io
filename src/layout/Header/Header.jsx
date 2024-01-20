import React, { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import HeaderSocial from "@components/Atoms/HeaderSocial/HeaderSocial";

const Header = () => {
  const { header } = useContext(GlobalContext);
  const { menu } = header;

  return (
    <>
      <header
        className="header container-fluid fixed-top"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1500"
      >
        <nav className="header-nav nav navbar navbar-expand-md p-0">
          <div className="d-flex align-items-center ">
            <span className="header-span me-4 fs-1">@MarianoGarciaGz</span>
            <ul className="hero__list list-inline m-0 d-none d-md-flex">
              <HeaderSocial
                icon="github"
                href="https://github.com/MarianoGarciaGz"
              />

              <HeaderSocial
                icon="instagram"
                href="https://www.instagram.com/marianogarciagz"
              />

              <HeaderSocial
                icon="linkedin"
                href="https://www.linkedin.com/in/marianogarciagz/"
              />

              <HeaderSocial
                icon="youtube"
                href="https://www.youtube.com/@marianogarciagz"
              />

              <HeaderSocial
                icon="cloud-fill"
                href="https://soundcloud.com/dowdyprogrammer"
              />

              <HeaderSocial
                icon="spotify"
                href="https://open.spotify.com/intl-es/artist/2k5EgJml0LNzElMQpj0QOW?si=Mm2WzVEKRhquHSztP4HG3w"
              />
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
            <ul className="header-ul navbar-nav text-center ms-auto">
              {menu.map(({ id, href, title }) => (
                <li key={id} className="header-li nav-item">
                  <a href={href} className="header-a nav-link fs-4">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
