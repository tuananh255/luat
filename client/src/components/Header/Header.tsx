import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";
import { TFunction } from "i18next";
interface HeaderProps {
  type?: boolean;
  changeLanguage: (language: string) => void;
  t?: TFunction;
}

const Header: React.FC<HeaderProps> = ({ t, type, changeLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(false);
  const [toggleLanguage, setToggleLanguage] = useState<string>("vn");
  const navigate = useNavigate();
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(true);
      } else {
        setSlidesToShow(false);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "vn";

    if (savedLanguage !== toggleLanguage) {
      setToggleLanguage(savedLanguage);
      changeLanguage(savedLanguage);
    }
  }, [changeLanguage, toggleLanguage]);

  const translate = (key: string) => (t ? t(key) : key);

  const dataNav = [
    { slug: "trang-chu", name: translate("trangchu") },
    { slug: "gioi-thieu", name: translate("gioithieu") },
    { slug: "dich-vu", name: translate("dichvu") },
    { slug: "tuyen-dung", name: translate("tuyendung") },
    { slug: "nhan-su", name: translate("nhansu") },
    { slug: "bai-viet", name: translate("baiviet") },
  ];
  const handleLanguageChange = (language: string) => {
    if (changeLanguage) {
      changeLanguage(language);
      setToggleLanguage(language);
      localStorage.setItem("language", language);
    }
  };
  return (
    <div className="w-1263-header w-350 mx-auto">
      <div className="relative">
        <div className="absolute w-full" style={{ top: 0, left: 0, zIndex: 9 }}>
          <div
            className="w-full flex  py-4 justify-between items-center nav-mobile "
            style={{ background: "transparent" }}
          >
            <div
              style={{ flex: 1 }}
              className={`text-header text-start text-[#40e0d0] justify-center items-center ${
                !slidesToShow
                  ? "text-[32px] leading-10"
                  : "text-[22px] w-fit leading-9"
              } font-bold font-space-grotesk`}
            >
              Apolo Laywers
            </div>

            <div
              className="hidden md:flex gap-6 justify-center"
              style={{ flex: 3 }}
            >
              {dataNav.map((nav, index) => (
                <NavLink
                  key={index}
                  to={nav.slug}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-item active"
                      : type === true
                      ? "nav-item"
                      : "nav-item-black"
                  }
                >
                  {nav.name}
                </NavLink>
              ))}
            </div>

            <div
              className="hidden md:flex items-center gap-8  "
              style={{ flex: 1 }}
            >
              <div
                onClick={() => navigate("/lien-he")}
                className=" cursor-pointer px-6 py-2 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg justify-center items-center gap-3 flex"
              >
                <div className=" text-white text-base font-semibold font-open-sans leading-loose">
                  {translate("lienhe")}
                </div>
              </div>
              <div className="flex items-center icon-choose ">
                <div
                  onClick={() => handleLanguageChange("en")}
                  className={`px-3 cursor-pointer ${
                    toggleLanguage === "en"
                      ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] pt-3 pb-2.5 rounded-lg text-white"
                      : "bg-[#e7ecf1] text-[#002740] py-1"
                  } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                >
                  <div className="text-sm font-semibold font-open-sans leading-normal">
                    EN
                  </div>
                </div>

                <div
                  onClick={() => handleLanguageChange("vn")}
                  className={`px-3 cursor-pointer ${
                    toggleLanguage === "vn"
                      ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] pt-3 pb-2.5 rounded-lg text-white"
                      : "bg-[#e7ecf1] text-[#002740] py-1"
                  } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                >
                  <div className="text-sm font-semibold font-open-sans leading-normal">
                    VN
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            {slidesToShow && (
              <div className="flex ">
                <div className="flex items-center icon-choose ">
                  <div
                    onClick={() => handleLanguageChange("en")}
                    className={`px-3 cursor-pointer ${
                      toggleLanguage === "en"
                        ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] py-2 rounded-lg text-white"
                        : "bg-[#e7ecf1] text-[#002740] py-0.5"
                    } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                  >
                    <div className="text-sm font-semibold font-open-sans leading-normal">
                      EN
                    </div>
                  </div>

                  <div
                    onClick={() => handleLanguageChange("vn")}
                    className={`px-3 cursor-pointer ${
                      toggleLanguage === "vn"
                        ? "bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] text-white py-2 rounded-lg"
                        : "bg-[#e7ecf1] py-0.5"
                    } rounded-lg flex-col justify-center items-center gap-2.5 inline-flex`}
                  >
                    <div className="text-sm font-semibold font-open-sans leading-normal">
                      VI
                    </div>
                  </div>
                </div>
                <div className="ml-3 md:hidden flex items-center">
                  <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={`text-3xl ${type ? "text-white" : "text-black"}`}
                  >
                    &#9776;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{ zIndex: 999999999 }}
          className={`fixed inset-0 z-20 bg-gradient-to-t from-white via-[#00a99d] to-[#00a99d] transform ${
            toggleMenu ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex justify-between items-center p-4">
            <div className="text-white text-[32px] font-bold">
              Apolo Laywers
            </div>

            <button
              onClick={() => setToggleMenu(false)}
              className="text-white text-2xl"
            >
              &times;
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 mt-8">
            {dataNav.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.slug}
                className="nav-item-mobile text-lg font-semibold text-white"
                onClick={() => setToggleMenu(false)}
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col items-center mt-10">
            <button
              onClick={() => navigate("/lien-he")}
              className="px-6 py-2 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg text-white font-semibold"
            >
              Liên hệ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
