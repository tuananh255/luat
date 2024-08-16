import { CSSProperties, FC } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Sử dụng icon từ Ant Design

interface CustomPrevArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  customStyle?: CSSProperties;
}

const CustomPrevArrow: FC<CustomPrevArrowProps> = (props) => {
  const { className, style, onClick, customStyle } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...customStyle,
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ color: "white" }} />
    </div>
  );
};

interface CustomNextArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  customStyle?: CSSProperties;
}
const CustomNextArrow: FC<CustomNextArrowProps> = (props) => {
  const { className, style, onClick, customStyle } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...customStyle,
      }}
      onClick={onClick}
    >
      <RightOutlined style={{ color: "white" }} />
    </div>
  );
};
export { CustomPrevArrow, CustomNextArrow };
