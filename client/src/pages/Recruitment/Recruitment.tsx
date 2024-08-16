import { useEffect, useState } from "react";
import "./Recruitment.css";
import Slider from "react-slick";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { useInView } from "react-intersection-observer";

import { Select } from "antd";
import td2 from "../../assets/imgs/Rectangle 17.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslationContext } from "../../context/TranslationContext";

const Recruitment = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);
  const [hoveredIndex3, setHoveredIndex3] = useState<number | null>(null);
  const t = useTranslationContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3.5);

  const dataLuatSu = [
    {
      heading: t("luatsurieng"),
      description: t("desLuatSuRieng"),
    },
    {
      heading: t("luatsutranhtung"),
      description: t("desTranhTung"),
    },
    {
      heading: t("luatsuhinhsu"),
      description: t("desHinhSu"),
    },
    {
      heading: t("luatsudansu"),
      description: t("desDanSu"),
    },
    {
      heading: t("luatsunhadat"),
      description: t("desNhaDat"),
    },
    {
      heading: t("luatsulaodong"),
      description: t("desLaoDong"),
    },

    {
      heading: t("luatsutuvanhopdong"),
      description: t("desLuatSuTuVanHopDong"),
    },
    {
      heading: t("luatsuhonnhavagiading"),
      description: t("desLuatSuHonNhanVaGiaDinh"),
    },
    {
      heading: t("luatsudanhnghiepvadautu"),
      description: t("desLuatSuDanhNghiepVaDauTu"),
    },
    {
      heading: t("luatsutuvanvaxaydung"),
      description: t("desLuatSuTuVanVaXayDung"),
    },
    {
      alt: t("luatsuhanghaivabhqt"),
      heading: t("luatsuhanghaivabhqt"),
      description: t("desLuatSuNguoiNuocNgoaiTaiVN"),
    },
    {
      heading: t("luatsunguoinuocngoaitaiVN"),
      description: t("desLuatSuNguoiNuocNgoaiTaiVN"),
    },
  ];
  const items = [
    {
      number: "01",
      title: t("chedongodai"),
      description: t("chungtoicamket"),
    },
    {
      number: "02",
      title: t("nghiphep"),
      description: t("chungtoicamket"),
    },
    {
      number: "03",
      title: t("dtphattrien"),
      description: t("chungtoicamket"),
    },
  ];
  const item2 = [
    {
      number: "04",
      title: t("cohoithangtien"),
      description: t("chungtoicamket"),
    },
    {
      number: "05",
      title: t("cnvtt"),
      description: t("chungtoicamket"),
    },
    {
      number: "06",
      title: t("teambuilding"),
      description: t("chungtoicamket"),
    },
  ];
  const item3 = [
    {
      number: "01",
      title: t("tichcuc"),
      description: t("chungtoicamket"),
    },
    {
      number: "02",
      title: t("ketnoi"),
      description: t("chungtoicamket"),
    },
    {
      number: "03",
      title: t("phattrien"),
      description: t("chungtoicamket"),
    },
    {
      number: "04",
      title: t("tantam"),
      description: t("chungtoicamket"),
    },
    {
      number: "05",
      title: t("thaucam"),
      description: t("chungtoicamket"),
    },
    {
      number: "06",
      title: t("nenep"),
      description: t("chungtoicamket"),
    },
  ];
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1.2);
        setCheck(true);
      } else {
        setCheck(false);
        setSlidesToShow(3);
      }
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    centerMode: false,
  };
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });
  const { ref: refA8, inView: inViewA8 } = useInView({ triggerOnce: true });

  return (
    <div>
      <div
        className={`${
          check === true ? "py-24" : "py-24 "
        }  bg-white flex-col flex justify-center items-center td`}
      >
        <div className="w-350 w-1440">
          <div className="h-[406px] py-16 flex-col justify-start items-start gap-2.5 flex">
            <div className="w-full h-[278px] flex-col justify-start items-center gap-12 flex gap-recu">
              <div className="flex-col w-full justify-start items-center gap-6 flex">
                <div className="h-[102px] w-full flex-col justify-start items-center gap-3 flex">
                  <div className="w-full justify-start items-center inline-flex flex gap-3 mobile-re">
                    <div className="text-center text-[#002740] text-[56px] text-32 font-bold font-space-grotesk ">
                      {t("cohoinghenghieptai")}
                    </div>
                    <div>
                      <ProfessionalBanner title="Apollo Lawyers" />
                    </div>
                  </div>
                </div>
                <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-open-sans leading-7 des-recrui">
                  {t("tgdoingu")}
                </div>
              </div>
              <ButtonCustom
                title={t("ungtuyenngay")}
                to="#48d1cc"
                color="text-white"
                from="#40e0d0"
              />
            </div>
          </div>
          <div className="w-full  py-20 justify-start items-center inline-flex ax">
            <div className="grow shrink basis-0   rounded-2xl shadow justify-start items-center flex gnqd">
              <img
                ref={refA1}
                className={`  ${
                  inViewA1 ? "animate-slide-left" : ""
                } img-rec grow shrink basis-0  rounded-tl-2xl rounded-bl-2xl`}
                src={td2}
              />
              <div
                ref={refA2}
                className={`  ${
                  inViewA2 ? "animate-slide-bottom" : ""
                } grow dvcls shrink basis-0 px-10 py-20 bg-[#f4f4f4]/95 rounded-tr-2xl rounded-br-2xl flex-col justify-start items-start gap-10 inline-flex`}
              >
                <div className=" h-[296px] flex-col justify-start items-start gap-6 flex">
                  <div className="w-full flex-col justify-start items-start gap-4 flex gncenter">
                    <div className=" text-[#9ea8b6] text-16 text-2xl font-bold font-space-grotesk leading-loose text-gk">
                      {t("gianhapquandoi")}
                    </div>
                    <div className="text-32 desc-gn text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]">
                      {t("banla1manhghep")}
                    </div>
                    <div className="descs-gn text-[#606670] text-base font-normal font-open-sans leading-7">
                      {t("tgdoingu")}
                    </div>
                  </div>
                </div>
                <div>
                  <ButtonCustom
                    title={t("xemvitriungtuyen")}
                    to="#48d1cc"
                    color="text-white"
                    from="#40e0d0"
                    onClick={() => navigate("/tuyen-dung/luat-su-rieng")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  py-20 justify-start items-start gap-16 inline-flex why">
            <div
              ref={refA2}
              className={`  ${
                inViewA2 ? "animate-slide-bottom" : ""
              }  w-[440px] why-heading w-350 flex-col justify-start items-start gap-6 inline-flex`}
            >
              <div
                className="w-full text-[#002740] text-5xl text-32 font-bold text-mobile font-space-grotesk leading-[56px]"
                dangerouslySetInnerHTML={{
                  __html: t("taisaochonap"),
                }}
              ></div>
              <div className="desc-why text-[#606670] text-base font-normal font-open-sans leading-7">
                {t("chungtoicungcapmtlv")}
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
              <div
                ref={refA3}
                className={`  ${
                  inViewA3 ? "animate-slide-right" : ""
                }  why-col justify-start items-center gap-6 inline-flex`}
              >
                {items.map((item, index) => (
                  <div
                    className="hover-item"
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div>
                      {hoveredIndex === index ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                          className="items-why bg-[#48d1cc] hover-containerre text-white p-4 h-[200px] w-[250px] rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex"
                        >
                          <p className="text-clamp-recrui">
                            {item.description}
                          </p>
                        </motion.div>
                      ) : (
                        <div className="items-why h-[200px] w-[250px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                          <div className="text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                            {item.number}
                          </div>
                          <div className="text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                            {item.title}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={refA4}
                className={`  ${
                  inViewA4 ? "animate-slide-left" : ""
                }  why-col justify-start items-center gap-6 inline-flex`}
              >
                {item2.map((item, index) => (
                  <div
                    className="hover-item"
                    key={index}
                    onMouseEnter={() => setHoveredIndex2(index)}
                    onMouseLeave={() => setHoveredIndex2(null)}
                  >
                    <div>
                      {hoveredIndex2 === index ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1 }}
                          className="items-why bg-[#48d1cc] hover-containerre text-white p-4 h-[200px] w-[250px] rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex"
                        >
                          <p className="text-clamp-recrui">
                            {item.description}
                          </p>
                        </motion.div>
                      ) : (
                        <div className="items-why h-[200px] w-[250px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                          <div className="text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                            {item.number}
                          </div>
                          <div className="text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                            {item.title}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20 flex-col justify-center items-center gap-2.5 flex">
          <div className="w-full relative">
            <div
              ref={refA4}
              className={`  ${
                inViewA4 ? "animate-slide-top" : ""
              }   h-[284px] outw w-full px-[100px] pt-12 pb-[100px] left-0 top-0 absolute bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] flex-col justify-start items-center gap-6 inline-flex`}
            >
              <div className="text-32 text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                {t("vitrituyendung")}
              </div>
              <div className="w-[654px] des-das w-350 text-center text-white text-base font-normal font-open-sans leading-7">
                {t("haygianhapdnap")}
              </div>
            </div>
            {/* <div className="w-full px-[100px] left-0 top-[200px] absolute justify-center items-center gap-6 inline-flex"> */}
            <div
              ref={refA5}
              className={`  ${
                inViewA5 ? "animate-slide-bottom" : ""
              }   w-full px[100px] absolute left-0 top-[200px] ab-top`}
            >
              <Slider {...settings}>
                {dataLuatSu.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="grow shrink basis-0 h-[352px] w-[315px] p-6 bg-white rounded-2xl shadow flex-col justify-between items-end flex"
                    >
                      <div className="h-[max] flex-col justify-start items-start gap-6 flex">
                        <div className="h-[max] flex-col justify-start items-start gap-2 flex">
                          <div>
                            <div className=" text-[#606670] text-base font-semibold font-open-sans leading-normal">
                              4/8/2024
                            </div>
                            <div className=" text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                              {data.heading}
                            </div>
                          </div>
                          <div className="text-clamp-recrui text-[#606670] text-base font-normal font-open-sans leading-7 ">
                            {data.description}
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col justify-end">
                        <ButtonCustom
                          title={t("xemchitiet")}
                          to="#48d1cc"
                          color="text-white"
                          from="#40e0d0"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="w-1440 w-350 pt-[600px] py-20 flex-col justify-start items-center gap-16 flex asds1">
          <div
            ref={refA6}
            className={`  ${
              inViewA6 ? "animate-slide-top" : ""
            } w-[654px] w-350 flex-col justify-start items-center gap-6 flex`}
          >
            <div className=" text-center text-[#002740] text-5xl text-32 font-bold font-space-grotesk leading-[56px]">
              {t("camnhandcsukhacbiet")}
            </div>
            <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-open-sans leading-7">
              {t("chungtoicungcapmtlv")}
            </div>
          </div>
          <div
            ref={refA7}
            className={`  ${
              inViewA7 ? "animate-slide-bottom" : ""
            } w-full tcs justify-start items-start gap-4 flex`}
          >
            <div className="grow tcss2 shrink basis-0 h-[184px] justify-between items-center gap-4 flex">
              {item3.map((item, index) => (
                <div
                  className="hover-item"
                  key={index}
                  onMouseEnter={() => setHoveredIndex3(index)}
                  onMouseLeave={() => setHoveredIndex3(null)}
                >
                  <div>
                    {hoveredIndex3 === index ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="items-why bg-[#48d1cc] hover-containerre text-white p-4 h-[184px] w-[184px] rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex"
                      >
                        <p className="text-clamp-recrui">{item.description}</p>
                      </motion.div>
                    ) : (
                      <div className="items-why h-[184px] w-[184px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                          {item.number}
                        </div>
                        <div className="text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                          {item.title}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={refA8}
          className={`  ${
            inViewA8 ? "animate-slide-bottom" : ""
          } h-[max] w-1440 w-350 formasd py-3 flex-col justify-center items-center gap-2.5 flex`}
        >
          <div className=" h-[max] px-[200px] dsdss py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
            <div className="teas-form h-[136px] flex-col justify-start items-center gap-6 flex">
              <div className=" text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                {t("apluonchaodonban")}
              </div>
              <div className="w-[654px] text-p w-350 text-center text-white text-base font-normal font-open-sans leading-7">
                {t("chungtoiratmong")}
              </div>
            </div>
            <div className=" w-[840px] form-c w-350 h-max flex-col justify-start items-start gap-[17px] flex">
              <div className="w-full formas h-[94px] flex-col justify-center items-start gap-4 flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    {t("hoten")}
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="w-full block px-2 py-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
                  <label
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative w-full">
                <input
                  type="text"
                  id="floating_outlined"
                  className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=" "
                />
                <label
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  {t("sdt")}
                </label>
              </div>
              <div className="w-full h-9 ">
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
                  className="w-full block py-2 px-2 text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                  placeholder=""
                ></textarea>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-focus:text-[#606670] peer-focus:dark:text-[#606670] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  {t("ndtn")}
                </label>
              </div>
            </div>
            <ButtonCustom
              title={t("ungtuyenngay")}
              to="#fff"
              from="#fff"
              color="text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
