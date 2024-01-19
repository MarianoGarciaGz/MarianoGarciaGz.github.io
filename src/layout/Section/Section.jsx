import React from "react";

const Section = ({ name, className, container, children }) => {
  return (
    <section className={`${className} py-5`} id={name}>
      <div className={`container-${container}`}>{children}</div>
    </section>
  );
};

export default Section;
