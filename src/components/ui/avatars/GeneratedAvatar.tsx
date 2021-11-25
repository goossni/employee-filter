import React from "react";
import styles from "./GeneratedAvatar.module.scss";

type generatedAvatarType = {
  name: string;
  color?: string;
  textColor?: string;
  className?: string;
};

const GeneratedAvatar: React.FC<generatedAvatarType> = ({
  name,
  color,
  textColor,
  className,
}) => {
  const imageUrl = `https://eu.ui-avatars.com/api/?name=${name.replaceAll(
    " ",
    "+"
  )}&background=${color ? color : "random"}${
    textColor ? `&color=${textColor}` : ""
  }`;

  return (
    <div
      className={`${styles.avatar} ${className && className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default GeneratedAvatar;
