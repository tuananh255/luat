import { useNavigate } from "react-router-dom";
import "./CardService.css";
import { FaChevronRight } from "react-icons/fa";

interface CardServiceProps {
  type?: boolean;
  item: {
    heading: string;
    description: string;
    image: string;
  };
  index: number;
}
export default function CardService({
  type = false,
  item,
  index,
}: CardServiceProps) {
  const navigate = useNavigate();

  return (
    <div
      key={index}
      style={{
        height: "600px",
        width: "350px",
        zIndex: 99999999,
        padding: "30px",
      }}
      className={`slickcontainer bg-bg-nen hoverScale ${
        type === false ? "" : "my-5"
      } max-w-sm overflow-hidden flex flex-col  justify-between border border-gray-200 
       rounded-2xl shadow dark:border-gray-700`}
    >
      <div
        className="flex flex-col "
        // style={{ height: "calc(600px - 400px) " }}
      >
        <div className="">
          <div className="flex justify-between items-center">
            <span className="grow shrink basis-0 text-20 text-28  text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
              {item.heading}
            </span>
            <div
              className="homp-arrow"
              onClick={() => {
                navigate("/nhan-su/luat-su-rieng");
              }}
            >
              <FaChevronRight />
            </div>
          </div>
          <p className="text-[#606670] text-14 font-normal pt-3 font-open-sans leading-tight">
            {item.description}
          </p>
        </div>
      </div>
      <div style={{ height: "250px", width: "100%" }} className="mt-5">
        <img src={item.image} alt={item.heading} />
      </div>
    </div>
  );
}
