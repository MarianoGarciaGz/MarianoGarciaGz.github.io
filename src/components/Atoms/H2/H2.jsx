import React from "react";

const H2 = (props) => {
  return (
    <h2
      className="h2 display-1 text-center py-4 m-0"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-once="true"
    >
      {props.children}
    </h2>
  );
};

export default H2;
