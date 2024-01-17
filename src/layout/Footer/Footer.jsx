import React from "react";
import H2 from "@components/Atoms/H2/H2";

const Footer = () => {
  return (
    <footer className="bg-gray" id="contact">
      <div className="container-xl">
        <H2>Contact</H2>
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="footer__h3 h3">@MarianoGarciaGz</h3>
            <a href="">
              <i className="bi bi-facebook"></i>facebook
            </a>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="footer__h3 h3">Sections</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
