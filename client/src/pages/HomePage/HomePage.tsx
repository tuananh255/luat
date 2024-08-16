import apolovideo from "../../assets/video/APOLO LAWYERS.mp4";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PageMeta from "../../components/PageMeta/PageMeta";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import Slider from "react-slick";
import rieng from "../../assets/luatsu/rieng.png";
import tranhtung from "../../assets/luatsu/tranhtung.png";
import hinhsu from "../../assets/luatsu/hinhsu.png";
import dansu from "../../assets/luatsu/dansu.png";
import nhadat from "../../assets/luatsu/nhadat.png";
import laodong from "../../assets/luatsu/laodong.png";
import tuvanhopdong from "../../assets/luatsu/tuvanhopdong.png";
import honnhanvagiadinh from "../../assets/luatsu/honnhanvagiadinh.png";
import doanhnghiepvadautu from "../../assets/luatsu/doanhnghiepvadautu.png";
import hanghaivabaohiemquocte from "../../assets/luatsu/hanghaivabaohiemquocte.png";
import nguoinuocngoaitaivietnam from "../../assets/luatsu/nguoinuocngoaitaivietnam.png";
import tuvanvaxaydung from "../../assets/luatsu/tuvanvaxaydung.png";
import customer1 from "../../assets/imgs/c1kbord.png";
import customer2 from "../../assets/imgs/c2kbord.png";
import customer3 from "../../assets/imgs/c3kbord.png";
import customer4 from "../../assets/imgs/c4kbord.png";
import customer5 from "../../assets/imgs/c5kbord.png";
import avcustomer1 from "../../assets/imgs/c1av.png";
import avcustomer2 from "../../assets/imgs/c2av.png";
import avcustomer3 from "../../assets/imgs/c3av.png";
import avcustomer4 from "../../assets/imgs/c4av.png";
import avcustomer5 from "../../assets/imgs/c5av.png";

import { motion } from "framer-motion";
import CardService from "../../components/CardSevice/CardService";
import tinmoi1 from "../../assets/imgs/tinmoi1.png";
import tinmoi2 from "../../assets/imgs/tinmoi2.png";
import tinmoi3 from "../../assets/imgs/tinmoi3.png";
import { Row } from "react-bootstrap";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import {
  CustomPrevArrow,
  CustomNextArrow,
} from "../../components/CustomArrowButton/CustomArrowButton";
import { useTranslationContext } from "../../context/TranslationContext";
export default function HomePage() {
  const t = useTranslationContext();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const [slidesToShow, setSlidesToShow] = useState(3.5);
  const [check, setCheck] = useState(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const navigate = useNavigate();
  const dataLuatSu = [
    {
      image: rieng,
      alt: t("luatsurieng"),
      heading: t("luatsurieng"),
      description: t("desLuatSuRieng"),
    },
    {
      image: tranhtung,
      alt: t("luatsutranhtung"),
      heading: t("luatsutranhtung"),
      description: t("desTranhTung"),
    },
    {
      image: hinhsu,
      alt: t("luatsuhinhsu"),
      heading: t("luatsuhinhsu"),
      description: t("desHinhSu"),
    },
    {
      image: dansu,
      alt: t("luatsudansu"),
      heading: t("luatsudansu"),
      description: t("desDanSu"),
    },
    {
      image: nhadat,
      alt: t("luatsunhadat"),
      heading: t("luatsunhadat"),
      description: t("desNhaDat"),
    },
    {
      image: laodong,
      alt: t("luatsulaodong"),
      heading: t("luatsulaodong"),
      description: t("desLaoDong"),
    },

    {
      image: tuvanhopdong,
      alt: t("luatsutuvanhopdong"),
      heading: t("luatsutuvanhopdong"),
      description: t("desLuatSuTuVanHopDong"),
    },
    {
      image: honnhanvagiadinh,
      alt: t("luatsuhonnhavagiading"),
      heading: t("luatsuhonnhavagiading"),
      description: t("desLuatSuHonNhanVaGiaDinh"),
    },
    {
      image: doanhnghiepvadautu,
      alt: t("luatsudanhnghiepvadautu"),
      heading: t("luatsudanhnghiepvadautu"),
      description: t("desLuatSuDanhNghiepVaDauTu"),
    },
    {
      image: tuvanvaxaydung,
      alt: t("luatsutuvanvaxaydung"),
      heading: t("luatsutuvanvaxaydung"),
      description: t("desLuatSuTuVanVaXayDung"),
    },
    {
      image: hanghaivabaohiemquocte,
      alt: t("luatsuhanghaivabhqt"),
      heading: t("luatsuhanghaivabhqt"),
      description: t("desLuatSuNguoiNuocNgoaiTaiVN"),
    },
    {
      image: nguoinuocngoaitaivietnam,
      alt: t("luatsunguoinuocngoaitaiVN"),
      heading: t("luatsunguoinuocngoaitaiVN"),
      description: t("desLuatSuNguoiNuocNgoaiTaiVN"),
    },
  ];
  const talkAbout = [
    {
      id: 1,
      image: customer1,
      description: t("thuytalk"),
      name: "Chị Thủy - " + t("doanhnhan"),
      avatar: avcustomer1,
    },
    {
      id: 2,
      image: customer2,
      description: t("hungtalk"),
      name: "Anh Hưng - " + t("doanhnhan"),
      avatar: avcustomer2,
    },
    {
      id: 3,
      image: customer3,
      description: t("dattalk"),
      name: "Anh Đạt - " + t("doanhnhan"),
      avatar: avcustomer3,
    },
    {
      id: 4,
      image: customer4,
      description: t("linhtalk"),
      name: "Chị Linh - " + t("doanhnhan"),
      avatar: avcustomer4,
    },
    {
      id: 5,
      image: customer5,
      description: t("nhantalk"),
      name: "Anh Nhân - " + t("doanhnhan"),
      avatar: avcustomer5,
    },
  ];
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1.2);
        setCheck(true);
      } else {
        setCheck(false);
        setSlidesToShow(3.5);
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
    prevArrow: (
      <CustomPrevArrow
        customStyle={{
          width: "50px ",
          zIndex: 99999999,
          height: " 50px",
          left: "1150px",
          top: "-55px",
          borderRadius: "50%",
          backgroundColor: "silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ),
    nextArrow: (
      <CustomPrevArrow
        customStyle={{
          width: "50px ",
          zIndex: 99999999,
          height: " 50px",
          // transform: "translateX(-255px)",
          top: "-55px",
          right: "200px",
          borderRadius: "50%",
          backgroundColor: "silver",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ),
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setActiveSlide(current),
    prevArrow: (
      <CustomPrevArrow
        customStyle={{
          position: "absolute",
          width: "50px",
          height: "50px",
          left: "35px", // Adjust this value as needed
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          backgroundColor: "silver",
          zIndex: 1000, // Ensure this is higher than the image's z-index
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ),
    nextArrow: (
      <CustomNextArrow
        customStyle={{
          position: "absolute",
          width: "50px",
          height: "50px",
          right: "35px", // Adjust this value as needed
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "50%",
          backgroundColor: "silver",
          zIndex: 1000, // Ensure this is higher than the image's z-index
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    ),
  };
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });

  return (
    <>
      <PageMeta
        title="Công ty luật"
        description="Tại sao bạn cần công ty luật ?"
      />
      <div className="homep">
        <div className="relative">
          <div className="iframe-containe relative" style={{ height: "100vh" }}>
            <video
              src={apolovideo}
              width="100%"
              height="100vh"
              autoPlay
              loop
              muted
              poster="apolovideo.jpg"
            ></video>
            <div
              className="apl-con absolute text-white"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <h1 className="text-apl text-center text-[#f1fcfb] text-[112px] font-bold font-space-grotesk leading-[124px]">
                Apolo Lawyers
              </h1>
              <div className="desc-apl text-center text-[#f6f6f6] text-[32px] font-bold font-space-grotesk leading-10">
                {t("giapphapphaply")}
              </div>
            </div>
          </div>
          <div
            className="w-1440"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              ref={refA3}
              style={{
                justifyContent: "center",

                width: "1040px",
                position: "absolute",
                bottom: "-230px",
                zIndex: 9999,
                // left: "19%",
              }}
              className={`${
                inViewA3 ? "animate-slide-bottom" : ""
              }  w-[1040px]  about-mobile  py-10 bg-white rounded-2xl shadow flex-col justify-center items-center  flex`}
            >
              <div className=" px-40 gap-4 flex-col  justify-between items-center  flex">
                <div className="text-48  text-32 about-us-text text-center text-[#002740] text-5xl font-bold font-space-grotesk ">
                  {t("vechungtoi")}
                </div>
                <div className="text-about text-16 text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("allamotcongty")}
                </div>
                <div>
                  <ButtonCustom
                    title={t("xemchitiet")}
                    from="#40e0d0"
                    to="#48d1cc"
                    color="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="texxds">
          <div className="w-1440 w-350 ">
            <div
              ref={refA4}
              className={` ${
                inViewA4 ? "animate-slide-bottom" : ""
              } w-full pt-[300px] flex-col justify-start items-start gap-10 flex`}
            >
              <div className="w-350 w-1440 justify-between items-center flex ">
                <div
                  className={` w-350 w-1440 flex-col flex ${
                    check === true
                      ? "pt-20 justify-center items-center"
                      : "justify-start items-start"
                  }   gap-4 `}
                >
                  <div className="serviceus text-32 text-48 text-black text-5xl font-bold font-space-grotesk ">
                    {t("dichvucuachungtoi")}
                  </div>
                  <div
                    className={`text-[#606670] ${check === true ? 'text-center ' : " mt-2 "}  text-16 text-base font-normal font-open-sans leading-7`}
                  >
                    {t("timkiemtrogiup")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row
            // style={{ paddingLeft: "100px" }}
            ref={refA4}
            className={` ${
              inViewA4 ? "animate-slide-bottom" : ""
            } pl-[200px]  relative  justify-center flex items-center abcdes  slick-mobile`}
          >
            <Slider {...settings}>
              {dataLuatSu?.map((item, index) => {
                return (
                  <CardService
                    type={true}
                    key={index}
                    index={index}
                    item={item}
                  />
                );
              })}
            </Slider>
          </Row>
        </div>
        <div
          className="relative w-full"
          style={{ marginTop: "60px", marginBottom: "90px" }}
        >
          <div className="w-full bg-gradient-to-r pt-5 pb-24 from-[#40e0d0] to-[#48d1cc] flex-col justify-start items-center gap-6 inline-flex">
            <div className="text-center text-32 text-48 text-white text-5xl font-bold font-space-grotesk ">
              {t("dacdiemnoibat")}
            </div>
            <div className="text-nb w-[654px] text016 text-center text-white text-base font-normal font-open-sans leading-7">
              {t("chungtoituhao")}
            </div>
          </div>
          <div
            ref={refA1}
            className={`${
              inViewA1 ? "animate-slide-bottom" : ""
            }  relative w-full  flex items-center justify-center`}
          >
            <div
              style={{ bottom: "-170px" }}
              className=" w-1440 absolute justify-center flex  items-center  noibat noibat-mobile"
            >
              <div className=" hoverScale  pl-3.5 pr-[13px] py-[11px] justify-center items-center flex">
                <div className="px-6 pt-8 h-[220px]  pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                  <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                    01
                  </div>
                  <div className="flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                      {t("chuyennghiep")}
                    </div>
                    <div className="w-[219px]">
                      <span
                        className="text-[#002740] text-base font-normal font-open-sans leading-7"
                        dangerouslySetInnerHTML={{
                          __html: t("desChuyennghiep"),
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hoverScale  pl-3.5 pr-[13px] py-[11px] justify-center items-center flex">
                <div className="px-6 pt-8 h-[220px]  pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                  <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                    02
                  </div>
                  <div className="flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                      {t("uytin")}
                    </div>
                    <div className="w-[219px]">
                      <span
                        className="text-[#002740] text-base font-normal font-open-sans leading-7"
                        dangerouslySetInnerHTML={{
                          __html: t("desUytin"),
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" hoverScale  pl-[13.50px] pr-[12.50px] py-[11px] justify-center items-center flex">
                <div className="px-6 pt-8 h-[220px]  pb-16 bg-white rounded-2xl shadow justify-start items-center gap-6 inline-flex">
                  <div className="text-[#002740] text-[56px] font-bold font-space-grotesk leading-[64px]">
                    03
                  </div>
                  <div className="flex-col justify-center items-start gap-2 inline-flex">
                    <div className="w-[219px] text-[#48d1cc] text-[28px] font-bold font-space-grotesk leading-9">
                      {t("tantam")}
                    </div>
                    <div className="w-[219px]">
                      <span
                        className="text-[#002740] text-base font-normal font-open-sans leading-7"
                        dangerouslySetInnerHTML={{
                          __html: t("desTantam"),
                        }}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-1440 w-350  talkabout"
          style={{
            paddingTop: "160px",
            height: "max-content",
          }}
        >
          <div className="flex h-max flex-col-mpbile">
            <div
              ref={refA1}
              className={`${
                inViewA1 ? "animate-slide-left" : ""
              } talk flex-1 flex flex-col justify-end `}
            >
              <div className="text-talk text-[#002740] pb-10 text-32 text-5xl font-bold font-space-grotesk">
                {t("khachangnoiveAP")}
              </div>

              <motion.div
                key={talkAbout[activeSlide].id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-max"
              >
                <div className="text-16 pls h-max px-16 py-10 bg-[#f4f4f4] rounded-tl-2xl rounded-bl-2xl flex-col justify-end items-start gap-10 flex">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-[#002740] text-base font-normal font-open-sans leading-normal texcs"
                  >
                    {talkAbout[activeSlide]?.description}
                  </motion.div>
                  <div className="justify-start items-center gap-4 inline-flex">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-[60px] h-[60px] rounded-full"
                      src={talkAbout[activeSlide]?.avatar}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-[#002740] text-base font-semibold font-open-sans leading-loose"
                    >
                      {talkAbout[activeSlide]?.name}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div
              ref={refA2}
              style={{ zIndex: 99 }}
              className={`${
                inViewA2 ? "animate-slide-right" : ""
              }  w-[680px]  h-[max]  img-talk`}
            >
              <Slider {...settings2}>
                {talkAbout.map((item, index) => (
                  <motion.img
                    key={index}
                    src={item.image}
                    alt="customer-apolo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="imgsdsd1"
                    style={{
                      width: "651px",
                      height: "550px",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className={`w-1440 w-350 ${check === true ? "py-10" : "py-24"} `}>
          <div
            ref={refA6}
            className={` ${
              inViewA6 ? "animate-slide-bottom" : ""
            }   flex-col  items-center gap-10 flex new`}
          >
            <div className="w-1440 w-350 mt-hp">
              <div className="w-full flex-col justify-center items-center gap-6 flex">
                <div className="new-text text-32 text-48 text-center text-[#002740] text-5xl font-bold font-space-grotesk ">
                  {t("tinmoinhat")}
                </div>
                <div
                  style={{ width: "50%" }}
                  className="des-new text-center text-[#606670] text-base font-normal font-open-sans leading-normal"
                >
                  {t("desTinMoiNhat")}
                </div>
              </div>
              <div
                className="pt-5 pb-3 news"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3,1fr)",
                  gap: "30px",
                }}
              >
                <div className="hoverScale h-[522px] w-[392px] p-6 bg-[#f0f0f0] rounded-2xl flex-col  gap-4 inline-flex">
                  <img className="h-[286px] rounded-lg" src={tinmoi1} />
                  <div className="h-max px-4 flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#002740] text-2xl font-bold font-space-grotesk">
                      {t("baovequyenloi")}
                    </div>
                    <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans leading-tight">
                      {t("desBaoVeQuyenLoi")}
                    </div>
                  </div>
                  <div className="px-4 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                      3/8/2024
                    </div>
                    <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                    <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                      Laywers
                    </div>
                  </div>
                </div>
                <div className="hoverScale h-[522px] w-[392px] p-6 bg-[#f0f0f0] rounded-2xl flex-col  gap-4 inline-flex">
                  <img className="h-[286px] rounded-lg" src={tinmoi2} />
                  <div className="h-max px-4 flex-col justify-start items-start gap-2 flex">
                    <div className="text-[#002740] text-2xl font-bold font-space-grotesk">
                      {t("baovequyenloi")}
                    </div>
                    <div className="text-clamp text-[#606670] text-sm font-normal font-open-sans leading-tight">
                      {t("desBaoVeQuyenLoi")}
                    </div>
                  </div>
                  <div className="px-4 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                      3/8/2024
                    </div>
                    <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                    <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                      Laywers
                    </div>
                  </div>
                </div>
                <div className=" hoverScale h-[522px] w-[392px] p-6 bg-[#f0f0f0] rounded-2xl flex-col gap-4 inline-flex">
                  <img className="h-[400px] rounded-lg" src={tinmoi3} />
                  <div className="  h-max px-4 flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#002740] text-2xl font-bold font-space-grotesk">
                      {t("baovequyenloi")}
                    </div>
                    <div className="text-clamp  text-[#606670] text-sm font-normal font-open-sans leading-tight">
                      {t("desBaoVeQuyenLoi")}
                    </div>
                  </div>
                  <div className=" px-4 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#3c3c3c] text-sm font-medium font-['Inter'] leading-normal">
                      3/8/2024
                    </div>
                    <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                    <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans leading-tight">
                      Laywers
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full justify-center flex">
                <ButtonCustom
                  title={t("xemthem")}
                  from="#40e0d0"
                  to="#48d1cc"
                  color="text-white"
                  onClick={() => navigate("/bai-viet")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1440 w-350 zxc">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-1440 w-350 h-max baovecontainer flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className=" baove w-350 w-1440  px-[200px] py-14 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center flex">
              <div className="asd flex-col justify-center items-center gap-6 flex">
                <div
                  className="text-bvvvv text-center text-white text-5xl text-32 font-bold font-space-grotesk "
                  dangerouslySetInnerHTML={{
                    __html: t("bvQuyenLoi"),
                  }}
                ></div>
                <div className="descbv w-[654px] text-16 text-center text-white text-base font-normal font-open-sans ">
                  {t("desBVQuyenLoiCuaBan")}
                </div>
                <div>
                  <ButtonCustom
                    title={t("lhngay")}
                    from="#fff"
                    to="#fff"
                    color="text-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Notification/> */}
      </div>
    </>
  );
}
