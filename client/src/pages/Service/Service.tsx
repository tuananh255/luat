import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import PageMeta from "../../components/PageMeta/PageMeta";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import { useInView } from "react-intersection-observer";
import { Row } from "react-bootstrap";
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
import tuvanvaxaydung from "../../assets/luatsu/tuvanvaxaydung.png";
import nguoinuocngoaitaivietnam from "../../assets/luatsu/nguoinuocngoaitaivietnam.png";
import CardService from "../../components/CardSevice/CardService";
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
import "./Service.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "../../components/CustomArrowButton/CustomArrowButton";
import Slider from "react-slick";
import { useTranslationContext } from "../../context/TranslationContext";

export default function Service() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const t = useTranslationContext();
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
  const items = [
    {
      number: "01",
      title: t("cddaingohapdan"),
      description: t("chungtoicamket"),
    },
    {
      number: "02",
      title: t("tamhuyetnghenghiep"),
      description: t("chungtoicamket"),
    },
    {
      number: "03",
      title: t("doimoilientuc"),
      description: t("chungtoicamket"),
    },
    {
      number: "04",
      title: t("daoducnghenghiep"),
      description: t("chungtoicamket"),
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

  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });

  const [check, setCheck] = useState(false);

  useEffect(() => {
    const updateCheck = () => {
      if (window.innerWidth <= 768) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    };
    updateCheck();
    window.addEventListener("resize", updateCheck);
    return () => {
      window.removeEventListener("resize", updateCheck);
    };
  }, []);

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
  return (
    <>
      <PageMeta
        title="Dịch vụ về công ty của chúng tôi"
        description="Tìm hiểu về Công Ty Luật, chuyên cung cấp dịch vụ luật pháp uy tín và chất lượng. Đọc về sứ mệnh, giá trị, và đội ngũ luật sư của chúng tôi."
      />
      <div
        className="w-1440 w-350  d-flex bg-white flex-col gttn"
        style={{ paddingTop: "100px" }}
      >
        <div
          className={`introContainer w-full  py-16 flex-col justify-center items-center ${
            check === true ? "gap-2.5" : "gap-2.5"
          }  flex`}
        >
          <div className="w-full flex-col justify-center items-center gap-12 fix-gap flex">
            <div className="w-full flex-col justify-center items-center gap-2 flex introo">
              <div className="text-intro text-center text-[#002740] text-[56px] flex align-items-center justify-center font-bold font-space-grotesk ">
                <h1
                  className="serv fw-bold flex items-center gap-3 text-32 text-56"
                  style={{ marginRight: "130px" }}
                >
                  {t("dvphaply")}
                  <ProfessionalBanner title={t("chuyennghiep")} />
                </h1>{" "}
              </div>
              <div className="asdmnd w-full pb-8 flex-col justify-center items-center gap-6 flex introooo">
                <div className="text-32 text-56 text-intro text-center text-[#002740] text-[56px] font-bold font-space-grotesk ">
                  {t("dambaoquyenloi")}
                </div>
                <div className="text-16 desc-intro  w-[654px] text-center text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("motloatcacdv")}
                </div>
              </div>
              <div className="buttonse">
                <ButtonCustom
                  title={t("lhngay")}
                  from="#40e0d0"
                  to="#48d1cc"
                  color="text-white"
                />
              </div>
            </div>
          </div>
        </div>
        <Row
          ref={refA7}
          className={`  ${
            inViewA7 ? "animate-slide-left" : ""
          } gtkb w-full  py-20`}
        >
          <div className="flex-col justify-start items-start gap-4 inline-flex dv-ct">
            <div className="serviceus text-32 text-48 text-black text-5xl font-bold font-space-grotesk leading-[56px]">
              Dịch vụ của chúng tôi
            </div>
            <div className="desc-ser text-[#606670] text-16 text-base font-normal font-open-sans leading-7">
              Nếu bạn tìm kiếm sự trợ giúp về pháp lý, các dịch vụ của chúng tôi
              sẽ đáp ứng tất cả
            </div>
          </div>
          <div
            className="amndk w-full "
            style={{
              width: "1114px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "30px",
            }}
          >
            {dataLuatSu?.map((e, index) => (
              <div key={index} className="flex justify-center">
                <CardService index={index} item={e} />
              </div>
            ))}
          </div>
          <div className="text-center flex w-full justify-center mt-5">
            <ButtonCustom
              title={t("xemthem")}
              from="#40e0d0"
              to="#48d1cc"
              color="text-white"
            />
          </div>
        </Row>
        <div
          className="w-1440 w-350 py-5  talkabout"
          style={{
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
        <div className="w-1440">
          <div className="gtkb2 w-full  py-20 flex gap-6 ">
            <div
              style={{ flex: 1 }}
              ref={refA5}
              className={`${inViewA5 ? "animate-slide-bottom" : ""}`}
            >
              <div className="flex-col justify-start items-start flex gap-6 gtkb-contaner ">
                <div
                  className="text-32 text-48 text-gtkb text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]"
                  dangerouslySetInnerHTML={{
                    __html: t("gttaonen"),
                  }}
                ></div>
                <div
                  className="text-16 desc-gtkb self-stretch text-[#606670] text-base font-normal font-open-sans leading-7"
                  style={{ height: "calc(200px - 20px)" }}
                >
                  {t("taiapchungtoitaonen")}
                </div>
              </div>
            </div>
            <div
              ref={refA6}
              style={{ flex: 1 }}
              className={`${
                inViewA6 ? "animate-slide-top" : ""
              } flex asd justify-end `}
            >
              <div className="flex flex100 ">
                <div className="sdasd">
                  <div
                    className="hoes"
                    style={{
                      display: "grid",
                      gap: "15px",
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
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
                              initial={{ opacity: 0, x: 0 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1 }}
                              className="c100 h-[250px] hover-container rounded-2xl bg-[#48d1cc] text-white p-3 border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex"
                            >
                              <p className="text-sadasd text-clamp-intro">
                                {item.description}
                              </p>
                            </motion.div>
                          ) : (
                            <div className="c100 h-[250px] px-4 pt-4 pb-16 rounded-2xl border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                              <div className="text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                                {item.number}
                              </div>
                              <div className="text-[#48d1cc] text-2xl font-bold font-space-grotesk">
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
          </div>
        </div>
        <div className="w-full zxc pt-10">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-full h-max baovecontainer  flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className=" baove w-350 w-1440  px-[200px] py-16 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center flex">
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
      </div>
    </>
  );
}
