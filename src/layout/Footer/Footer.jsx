import React from "react";
import H2 from "@components/Atoms/H2/H2";
import SocialLink from "@components/Atoms/SocialLink/SocialLink";

const Footer = () => {
  return (
    <footer className="bg-gray" id="contact">
      <div className="container-xl">
        <H2>Contact</H2>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="footer__h3 h3 mb-4">@MarianoGarciaGz</h3>
            <SocialLink
              className="mb-2"
              icon="github"
              href="https://github.com/MarianoGarciaGz"
            >
              Github
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="instagram"
              href="https://www.instagram.com/marianogarciagz"
            >
              instagram
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="linkedin"
              href="https://www.linkedin.com/in/marianogarciagz/"
            >
              linkedin
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="youtube"
              href="https://www.youtube.com/@marianogarciagz"
            >
              youtube
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="cloud-fill"
              href="https://soundcloud.com/dowdyprogrammer"
            >
              soundcloud
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="spotify"
              href="https://open.spotify.com/intl-es/artist/2k5EgJml0LNzElMQpj0QOW?si=Mm2WzVEKRhquHSztP4HG3w"
            >
              spotify
            </SocialLink>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer__h3 h3  mb-4">Sections</h3>
            <SocialLink className="mb-2" icon="house" href="#" target="_self">
              Home
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="cpu-fill"
              href="#"
              target="_self"
            >
              Technologies
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="journals"
              href="#"
              target="_self"
            >
              Projects
            </SocialLink>
            <SocialLink
              className="mb-2"
              icon="info-circle-fill"
              href="#"
              target="_self"
            >
              About
            </SocialLink>
          </div>
          <div className="col-12 mt-5 mb-2">
            <p className="text-center">
              Portfolio made by{" "}
              <a href="#">
                <strong className="fw-bold">@MarianoGarciaGz</strong>.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
