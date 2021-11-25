import React from "react";
import styles from "./Button.module.scss";

type buttonType = {
  className?: string;
  onClick: () => void;
};

const Button: React.FC<buttonType> = ({ children, className, onClick }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
