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
            <h3 className="footer__h3 h3">@MarianoGarciaGz</h3>
            <SocialLink icon="github" href="https://github.com/MarianoGarciaGz">
              Github
            </SocialLink>
            <SocialLink
              icon="instagram"
              href="https://www.instagram.com/marianogarciagz"
            >
              instagram
            </SocialLink>
            <SocialLink
              icon="linkedin"
              href="https://www.linkedin.com/in/marianogarciagz/"
            >
              linkedin
            </SocialLink>
            <SocialLink
              icon="youtube"
              href="https://www.youtube.com/@marianogarciagz"
            >
              youtube
            </SocialLink>
            <SocialLink
              icon="cloud-fill"
              href="https://soundcloud.com/dowdyprogrammer"
            >
              soundcloud
            </SocialLink>
            <SocialLink
              icon="spotify"
              href="https://open.spotify.com/intl-es/artist/2k5EgJml0LNzElMQpj0QOW?si=Mm2WzVEKRhquHSztP4HG3w"
            >
              spotify
            </SocialLink>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer__h3 h3">Sections</h3>
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
