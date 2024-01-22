import React from "react";
import "./CardTech.scss";

const CardTech = (props) => {
  const { title, img, number } = props;
  return (
    <div
      className="col"
      data-aos="fade-up"
      data-aos-delay={`${number * 50}`}
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="CardTech card rounded-3 shadow-none">
        <img
          src={img}
          className="CardTech-img mx-auto mt-3 p-0 pb-2 card-img-top"
          alt="..."
        />
        <div className="card-body p-3 d-flex flex-column">
          <h5 className="CardTech-h5 h5 card-title text-center">{title}</h5>
          <p className="CardTech-p card-text m-0">I know:</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CardTech;
