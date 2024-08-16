// import React from 'react';
import { Link } from "react-router-dom";
import "./Breadcrumb.css"; // Tạo file CSS riêng biệt để quản lý các kiểu

interface BreadcrumbProps {
  slug?: string;
  title1?: string;
  title2?: string;
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ slug, title1, title2 }) => {
  return (
    <div className="mt-[100px] h-6 justify-start items-start gap-3 flex pd-bread ">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb flex align-items-center">
          <li className="breadcrumb-item text-sm font-semibold font-open-sans leading-tight">
            <Link
              to={`/${slug}`}
              className="text-[#7e899c] text-14 text-decoration-none"
            >
              {title1}
            </Link>
          </li>
          <li
            style={{ color: "#1cb0ad" }}
            className="breadcrumb-item active  text-sm font-semibold font-open-sans leading-tight "
            aria-current="page"
          >
            {title2}
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default Breadcrumb;
