import React from "react";
import styles from "./GeneratedAvatar.module.scss";

type generatedAvatarType = {
  name: string;
  color?: string;
  className?: string;
};

const GeneratedAvatar: React.FC<generatedAvatarType> = ({
  name,
  color,
  className,
}) => {
  const imageUrl = `https://eu.ui-avatars.com/api/?name=${name.replace(
    " ",
    "+"
  )}&background=${color ? color : "random"}`;

  return (
    <div
      className={`${styles.avatar} ${className && className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  );
};

export default GeneratedAvatar;
