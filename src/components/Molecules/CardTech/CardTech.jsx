import React from "react";
import "./CardTech.scss";

const CardTech = (props) => {
  const { title, img } = props;
  return (
    <div className="CardTech card rounded-3 h-100 shadow-none">
      <img
        src={img}
        className="CardTech-img mx-auto mt-3 p-2 card-img-top"
        alt="..."
      />
      <div className="card-body p-3 d-flex flex-column">
        <h5 className="CardTech-h5 h5 card-title text-center">{title}</h5>
        {props.children}
      </div>
    </div>
  );
};

export default CardTech;
