import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Select } from "antd";
import mastercard from "../../assets/imgs/mastercard.png";
import vissa from "../../assets/imgs/vissa.png";
import paypal from "../../assets/imgs/paypal.png";
import iconfb from "../../assets/icon/fill/facebook_fill.png";
import iconins from "../../assets/icon/fill/ins_fill.png";
import iconlinkedin from "../../assets/icon/fill/linkedin_fill.png";
import iconthreads from "../../assets/icon/fill/threads_fill.png";
import iconyoutube from "../../assets/icon/fill/youtube_fill.png";
import iconpinterest from "../../assets/icon/fill/pinterest_fill.png";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./Footer.css";
import { useTranslationContext } from "../../context/TranslationContext";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Footer: React.FC = () => {
  const t = useTranslationContext();
  const isMobile = useIsMobile();
  type SectionType =
    | "headquarters"
    | "branch1"
    | "branch2"
    | "service"
    | "connect"
    | "branch3";
  const [expandedSection, setExpandedSection] = useState<SectionType | null>(
    null
  );
  const handleToggle = (section: SectionType) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  if (isMobile) {
    return (
      <div
        className="footermobile w-full py-20 bg-[#f3f3f3]"
        style={{ width: "100%" }}
      >
        <section>
          <Row>
            <Col
              sm={4}
              className="flex-col justify-start items-start gap-6 inline-flex"
            >
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="footer-text text-[#40e0d0] text-5xl font-bold font-space-grotesk leading-[56px]">
                  Apolo Laywers
                </div>
                <div className="self-stretch text-justify text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("desTinMoiNhat")}
                </div>
              </div>
              {[
                "headquarters",
                "branch1",
                "branch2",
                "service",
                "connect",
                "branch3",
              ].map((section) => (
                <div
                  className="self-stretch flex-col justify-start items-start gap-4 flex"
                  key={section}
                >
                  <div
                    className="add"
                    onClick={() => handleToggle(section as SectionType)}
                  >
                    <div className="text-add self-stretch text-[#002740] text-20 font-bold font-space-grotesk leading-9">
                      {section === "headquarters" && t("trusochinh")}
                      {section === "branch1" && t("chinhanh") + " " + "1"}
                      {section === "branch2" && t("chinhanh") + " " + "2"}
                      {section === "service" && t("dichvu")}

                      {section === "connect" && t("tuyendung")}
                      {section === "branch3" && t("dktuvan")}
                    </div>
                    {expandedSection === section ? (
                      <MdKeyboardArrowUp style={{ fontSize: "30px" }} />
                    ) : (
                      <MdKeyboardArrowDown style={{ fontSize: "30px" }} />
                    )}
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      expandedSection === section ? "max-h-screen" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                      {expandedSection === section && (
                        <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                          {section === "headquarters" && (
                            <>
                              <div className="self-stretch h-[47px]">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("diachi")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  Tầng 2,108 Trần Đình Xu, Phường Nguyễn Cư
                                  Trinh, Quận 1, TP Hồ Chí Minh
                                </span>
                              </div>
                              <div className="self-stretch">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("sdt")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  (028) 66.701.709 - 0903.419.479
                                </span>
                              </div>
                            </>
                          )}
                          {section === "branch1" && (
                            <>
                              <div className="self-stretch">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("diachi")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1,
                                  TP. Hồ Chí Minh
                                </span>
                              </div>
                              <div className="self-stretch">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("sdt")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  (028) 66.701.709 - 0903.419.479
                                </span>
                              </div>
                            </>
                          )}
                          {section === "branch2" && (
                            <>
                              <div className="self-stretch h-[47px]">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("diachi")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  Tầng 09 Tower K&M, số 33 Ung Văn Khiêm, Quận
                                  Bình Thạnh, TP. Hồ Chí Minh
                                </span>
                              </div>
                              <div className="self-stretch">
                                <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                  {t("sdt")}:
                                </span>
                                <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {" "}
                                  (028) 35.059.349 - 0903.600.347
                                </span>
                              </div>
                            </>
                          )}
                          {section === "service" && (
                            <>
                              <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsurieng")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsutranhtung")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsuhinhsu")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsudansu")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsunhadat")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsulaodong")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsutuvanhopdong")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsuhonnhavagiading")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsudanhnghiepvadautu")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsutuvanvaxaydung")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsuhanghaivabhqt")}
                                </div>
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("luatsunguoinuocngoaitaiVN")}
                                </div>
                                <div className="text-[#606670] text-base font-bold font-space-grotesk leading-normal">
                                  {t("xemthem")}...
                                </div>
                              </div>
                            </>
                          )}
                          {section === "connect" && (
                            <>
                              <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                  {t("guittungtuyen")}
                                </div>
                                <div className="self-stretch">
                                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                                    {t("diachi")}:
                                  </span>
                                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                                    {" "}
                                    contact@apolo.vn
                                  </span>
                                </div>
                              </div>
                            </>
                          )}
                          {section === "branch3" && (
                            <>
                              <div className="self-stretch text-[#606670] text-justify text-base font-normal font-open-sans leading-7">
                                {t("dienthongtintuvan")}
                              </div>
                              <div className=" flex-col justify-center items-start gap-[17px] flex w-full">
                                <div className="self-stretch flex-col justify-center items-start gap-4 inline-flex w-full">
                                  <div className="relative w-full">
                                    <input
                                      type="text"
                                      id="floating_outlined"
                                      className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                                      placeholder=" "
                                    />
                                    <label
                                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                                    >
                                      {t("hoten")}
                                    </label>
                                  </div>
                                  <div className="relative w-full">
                                    <input
                                      type="text"
                                      id="floating_outlined"
                                      className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                                      placeholder=" "
                                    />
                                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                      Email
                                    </label>
                                  </div>
                                </div>
                                <div className="relative w-full">
                                  <input
                                    type="text"
                                    id="floating_outlined"
                                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                                    placeholder=" "
                                  />
                                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                    {t("sdt")}
                                  </label>
                                </div>
                                <div className="w-full h-9">
                                  <Select
                                    showSearch
                                    className="bg-[#f3f3f3] h-full text-gray-900"
                                    style={{ width: "100%" }}
                                    dropdownStyle={{ background: "#f3f3f3" }}
                                    placeholder={t("alldv")}
                                    optionFilterProp="label"
                                    filterSort={(optionA, optionB) =>
                                      (optionA?.label ?? "")
                                        .toLowerCase()
                                        .localeCompare(
                                          (optionB?.label ?? "").toLowerCase()
                                        )
                                    }
                                    options={[
                                      {
                                        value: "1",
                                        label: "Not Identified",
                                      },
                                      {
                                        value: "2",
                                        label: "Closed",
                                      },
                                      {
                                        value: "3",
                                        label: "Communicated",
                                      },
                                      {
                                        value: "4",
                                        label: "Identified",
                                      },
                                      {
                                        value: "5",
                                        label: "Resolved",
                                      },
                                      {
                                        value: "6",
                                        label: "Cancelled",
                                      },
                                    ]}
                                  />
                                </div>
                                <div className="w-full relative">
                                  <textarea
                                    id="message"
                                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                                    placeholder=""
                                  ></textarea>
                                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                    {t("ndtn")}
                                  </label>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col
              sm={4}
              className="pt-4 flex-col justify-start items-start gap-6 inline-flex"
            >
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="add">
                  <div className="text-add self-stretch text-[#002740] text-20 font-bold font-space-grotesk leading-9">
                    {t("knvoichungtoi")}
                  </div>
                </div>
                <div className="justify-start items-center gap-3 inline-flex">
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconins} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconlinkedin} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconpinterest} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconthreads} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconyoutube} />
                    </div>
                  </div>
                  <div className="w-10 h-10 justify-center items-center flex">
                    <div className="w-10 h-10 relative">
                      <img src={iconfb} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              sm={4}
              className="flex-col justify-start items-start gap-6 inline-flex"
            >
              <div className="pt-4 self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="add">
                  <div className="text-add self-stretch text-[#002740] text-20 font-bold font-space-grotesk leading-9">
                    {t("chapnhantt")}
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-2 flex">
                  <div className="flex justify-start items-start gap-2">
                    <div className="flex justify-center items-center">
                      <img src={mastercard} />
                    </div>
                    <div className="flex justify-center items-center">
                      <img src={vissa} />
                    </div>
                    <div className="flex justify-center items-center">
                      <img src={paypal} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }

  return (
    <div className="footermobile  py-20 bg-[#f3f3f3]" style={{ width: "100%" }}>
      <section className="w-1440 mx-auto">
        <Row>
          <Col
            sm={4}
            className="flex-col justify-start items-start gap-6 inline-flex"
          >
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="footer-text text-[#40e0d0] text-5xl font-bold font-space-grotesk leading-[56px]">
                Apolo Laywers
              </div>
              <div className="self-stretch text-justify text-[#606670] text-base font-normal font-open-sans leading-7">
                {t("desTinMoiNhat")}
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className="self-stretch text-[#002740] text-28 text-20 font-bold font-space-grotesk leading-9">
                  {t("trusochinh")}
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[47px]">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("diachi")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    Tầng 2,108 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1, TP
                    Hồ Chí Minh
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("sdt")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    (028) 66.701.709 - 0903.419.479
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                  {t("chinhanh")} 1
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("diachi")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("sdt")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    (028) 66.701.709 - 0903.419.479
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className=" add self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                  {t("chinhanh")} 2
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[47px]">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("diachi")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    Tầng 09 Tower K&M, số 33 Ung Văn Khiêm, Quận Bình Thạnh, TP.
                    Hồ Chí Minh
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("sdt")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    (028) 35.059.349 - 0903.600.347
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                  {t("knvoichungtoi")}
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconins} />
                  </div>
                </div>
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconlinkedin} />
                  </div>
                </div>
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconpinterest} />
                  </div>
                </div>
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconthreads} />
                  </div>
                </div>
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconyoutube} />
                  </div>
                </div>
                <div className="w-10 h-10 justify-center items-center flex">
                  <div className="w-10 h-10 relative">
                    <img src={iconfb} />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={4}
            className="flex-col justify-start items-start gap-6 inline-flex"
          >
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                  {t("dichvu")}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsurieng")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsutranhtung")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsuhinhsu")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsudansu")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsunhadat")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsulaodong")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsutuvanhopdong")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsuhonnhavagiading")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsudanhnghiepvadautu")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsutuvanvaxaydung")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsuhanghaivabhqt")}
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("luatsunguoinuocngoaitaiVN")}
                </div>
                <div className="text-[#606670] text-base font-bold font-space-grotesk leading-normal">
                  {t("xemthem")}...
                </div>
              </div>
            </div>
            <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div className="add">
                <div className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                  {t("tuyendung")}
                </div>
              </div>
              <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                <div className="text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("guittungtuyen")}
                </div>
                <div className="self-stretch">
                  <span className="text-[#002740] text-base font-bold font-open-sans leading-7">
                    {t("diachi")}:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-open-sans leading-7">
                    {" "}
                    contact@apolo.vn
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            sm={4}
            className="flex-col justify-start items-start gap-6 inline-flex"
          >
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <span className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                {t("dktuvan")}
              </span>
              <div className="self-stretch text-[#606670] text-justify text-base font-normal font-open-sans leading-7">
                {t("dienthongtintuvan")}
              </div>
            </div>
            <div className=" flex-col justify-center items-start gap-[17px] flex w-full">
              <div className="self-stretch flex-col justify-center items-start gap-4 inline-flex w-full">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    {t("hoten")}
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    Email
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=" "
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  {t("sdt")}
                </label>
              </div>
              <div className="w-full h-9">
                <Select
                  showSearch
                  className="bg-[#f3f3f3] h-full text-gray-900"
                  style={{ width: "100%" }}
                  dropdownStyle={{ background: "#f3f3f3" }}
                  placeholder={t("alldv")}
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                    {
                      value: "5",
                      label: "Resolved",
                    },
                    {
                      value: "6",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
              <div className="w-full relative">
                <textarea
                  id="message"
                  className="w-full block py-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=""
                ></textarea>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#f3f3f3]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  {t("ndtn")}
                </label>
              </div>
            </div>
            <ButtonCustom
              title={t("gui")}
              color="text-white"
              from="#40e0d0"
              to="#48d1cc"
            />
            <div className="self-stretch h-[106px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#002740] text-28 text-20  font-bold font-space-grotesk leading-9">
                {t("chapnhantt")}
              </div>
              <div className="justify-start items-center gap-4 inline-flex">
                <img className="w-20 h-[54px]" src={mastercard} />
                <img className="w-20 h-[54px]" src={vissa} />
                <img className="w-20 h-[54px]" src={paypal} />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};
export default Footer;
