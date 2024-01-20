import React from "react";
import SocialLink from "@components/Atoms/SocialLink/SocialLink";

const HeaderSocial = (props) => {
  const { icon, href } = props;
  return (
    <li className="list-inline-item">
      <SocialLink icon={icon} href={href}></SocialLink>
    </li>
  );
};

export default HeaderSocial;
