import React from "react";

interface ButtonProps {
  title?: string;
  from?: string;
  to?: string;
  color?: string;
  text?: string;

  onClick?: () => void;
}
import "./ButtonCustom.css";
const ButtonCustom: React.FC<ButtonProps> = ({
  title,
  from,
  to,
  color,
  text,
  onClick,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${from}, ${to})`,
  };

  return (
    <div className="flex justify-start mt-4">
      <div
        className="relative send-button  py-2.5 rounded-xl justify-center items-center gap-3 inline-flex"
        style={gradientStyle}
        onClick={onClick}
      >
        <div
          className={`w-max ${color} ${text} flex text-center text-base px-3 justify-center items-center font-bold font-space-grotesk leading-normal`}
        >
          {title}
        </div>
        <span
          className={`arrow ${color} ${text} absolute right-5`}
          style={{ fontSize: "25px" }}
        >
          →
        </span>
      </div>
    </div>
  );
};

export default ButtonCustom;
