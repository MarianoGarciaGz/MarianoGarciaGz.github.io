import React from "react";
import "./CardProjects.scss";

const CardProject = (props) => {
  const { title, info, img, time, link } = props;
  return (
    <div className="pcard card h-100">
      <img
        src={img}
        className="pcard-img card-img-top rounded-3 rounded-bottom"
        alt="..."
      />
      <div className="card-body p-3 d-flex flex-column">
        <h5 className="h5 card-title text-capitalize">{title}</h5>
        <p className="card-text">{info}</p>
        <a
          className={`btn btn-outline-primary w-100 mt-auto ${
            !link ? "disabled" : ""
          }`}
          href={link || "#"}
          target="_blank"
        >
          {link ? "Visitar el sitio" : "No disponible"}
        </a>
      </div>
    </div>
  );
};

export default CardProject;
