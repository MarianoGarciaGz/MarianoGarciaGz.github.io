import React from "react";

const SocialLink = (props) => {
  const { icon, href, className, target } = props;
  return (
    <a
      className={`text-capitalize ${className}`}
      href={href}
      target={`${!target ? "_blank" : ""}`}
    >
      <i className={`bi bi-${icon} me-1`}></i> {props.children}
    </a>
  );
};

export default SocialLink;
