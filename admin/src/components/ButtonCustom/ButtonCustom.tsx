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
    <div className="w-full">
      <div
        className="relative w-full send-button px-10 py-2.5 rounded-xl justify-center items-center gap-3 inline-flex"
        style={gradientStyle}
        onClick={onClick}
      >
        <div
          className={`w-full ${color} ${text} flex text-center text-base justify-center items-center font-bold font-Space Grotesk leading-normal`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default ButtonCustom;
