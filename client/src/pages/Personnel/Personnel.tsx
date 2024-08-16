import { useEffect, useState } from "react";
import "./Personnel.css";
import ProfessionalBanner from "../../components/ProfessionalBanner/ProfessionalBanner";
import { Col, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { motion } from "framer-motion";
import introduce1 from "../../assets/imgs/introduce1.png";
import introduce2 from "../../assets/imgs/introduce2.png";
import person1 from "../../assets/imgs/person1.png";
import introduceperson1 from "../../assets/imgs/introduceperson1.png";
import introduceperson2 from "../../assets/imgs/introduceperson2.png";
import introduceperson3 from "../../assets/imgs/introduceperson3.png";
import introduceperson4 from "../../assets/imgs/introduceperson4.png";
import { useTranslationContext } from "../../context/TranslationContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Model/Model";

const Personnel = () => {
  const navigate = useNavigate();
  const t = useTranslationContext();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const { ref: refA1, inView: inViewA1 } = useInView({ triggerOnce: true });
  const { ref: refA2, inView: inViewA2 } = useInView({ triggerOnce: true });
  const { ref: refA3, inView: inViewA3 } = useInView({ triggerOnce: true });
  const { ref: refA4, inView: inViewA4 } = useInView({ triggerOnce: true });
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  const { ref: refA6, inView: inViewA6 } = useInView({ triggerOnce: true });
  const { ref: refA7, inView: inViewA7 } = useInView({ triggerOnce: true });
  const { ref: refA8, inView: inViewA8 } = useInView({ triggerOnce: true });
  // const { ref: refA9, inView: inViewA9 } = useInView({ triggerOnce: true });
  const { ref: refA10, inView: inViewA10 } = useInView({ triggerOnce: true });
  const { ref: refA11, inView: inViewA11 } = useInView({ triggerOnce: true });
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

  const items = [
    {
      number: "01",
      title: t("tantamvachuyennghiep"),
      description: t("chungtoicamketcacdv"),
    },
    {
      number: "02",
      title: t("hieubietsaurong"),
      description: t("chungtoicamketcacdv"),
    },
    {
      number: "03",
      title: t("kinhnghiemthuctien"),
      description: t("chungtoicamketcacdv"),
    },
    {
      number: "04",
      title: t("camketbaoveqlkh"),
      description: t("chungtoicamketcacdv"),
    },
  ];
  return (
    <div>
      <div className=" person   py-24 bg-white flex-col justify-start items-start ">
        <div className="w-1440 w-350">
          <div className="personcont h-96 px-[100px] py-16 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-64 flex-col justify-start items-center gap-12 flex">
              <div className="h-64 msmsm flex-col justify-start items-center gap-6 flex">
                <div className="self-stretch flex-col justify-center items-center gap-2.5 flex">
                  <div className="w-full dnns justify-center items-center flex gap-3">
                    <h1 className="text-center text-[#002740] text-32 text-[56px] font-bold font-space-grotesk "></h1>
                    <div className="mrpr ">
                      <ProfessionalBanner title={t("nhansu")} />
                    </div>
                  </div>
                  <h1 className=" textper w-350 self-stretch text-center text-32 text-[#002740] text-[56px] font-bold font-space-grotesk ">
                    {t("ttcnhq")}
                  </h1>
                </div>
                <div className="w-[654px] w-350 text-center text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  {t("khamphadn")}
                </div>
              </div>
            </div>
          </div>
          <div className=" ctlc w-full  py-20 justify-start items-center inline-flex">
            <div className="clt grow shrink basis-0 self-stretch rounded-2xl shadow justify-start items-center flex">
              <img
                ref={refA1}
                className={`${
                  inViewA1 ? "animate-slide-left" : ""
                } img-ctl grow shrink basis-0 self-stretch rounded-tl-2xl rounded-bl-2xl`}
                src={person1}
              />
              <div
                ref={refA2}
                className={`${
                  inViewA2 ? "animate-slide-right" : ""
                } grow aboutctl shrink basis-0 px-10 py-20 bg-[#f4f4f4]/95 rounded-tr-2xl rounded-br-2xl flex-col justify-start items-start gap-10 inline-flex`}
              >
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch h-14 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch text-[#002740]  text-32 text-5xl font-bold font-space-grotesk leading-[56px]">
                      {t("chungtoilaai")}
                    </div>
                  </div>
                  <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {t("taiapl")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dn-us w-full py-20 flex-col justify-center items-center gap-2 flex">
          <div
            ref={refA3}
            className={`${
              inViewA3 ? "animate-slide-top" : ""
            } text-dn-mobile text-48 text-32 text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]`}
          >
            {t("dnls")}
          </div>
          <div
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center `}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Row className="h-max w-full flex justify-center items-center grid-mobile">
              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ bottom: "-5px", left: "60px" }}
                  className="flex w-[300px] absolute w-ab  flex-col justify-center"
                >
                  <div
                    style={{ borderRadius: "50%" }}
                    className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc]  transition-opacity duration-300"
                  >
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h1text px-[26px] py-[3px] opacity-90 left-[20px] top-[235px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Anh Minh
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans  ">
                      CEO
                    </div>
                  </div>
                </div>
                <img
                  className=" z-10 w-[300px] h-[300px] relative img-in"
                  style={{ borderRadius: "50%" }}
                  src={introduceperson1}
                  alt="Introduce Person"
                />
              </Col>
              <Col
                sm={3}
                className="col-item justify-center groupop   w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ bottom: "42px" }}
                  className="flex w-[300px] absolute w-ab2   flex-col justify-center"
                >
                  <div className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h1text px-[26px] py-[3px] opacity-90 left-[20px] top-[240px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Thu Hương
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans ">
                      Sales Manager
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in"
                  src={introduceperson2}
                  style={{ borderRadius: "50%" }}
                  alt="Introduce Person"
                />
              </Col>
              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ bottom: "-8px" }}
                  className="flex w-[300px] absolute w-ab3  flex-col justify-center"
                >
                  <div className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h2text px-[26px] py-[3px] opacity-90 left-[15px] top-[235px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Thùy Trang
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans leading-7">
                      Business Analyst Leader
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in    rounded-full"
                  src={introduceperson3}
                  alt="Introduce Person"
                />
              </Col>

              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ top: "0px" }}
                  className="flex w-[300px] absolute w-ab4   flex-col justify-center"
                >
                  <div className="h2  w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h3text px-[26px] py-[3px] opacity-90 left-[25px] bottom-[0px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max  text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Đặng Quang Huy
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans leading-7">
                      Tech Manager
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in   rounded-full"
                  src={introduceperson4}
                  alt="Introduce Person"
                />
              </Col>
            </Row>
          </div>
          <div
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center `}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Row className="h-max w-full flex justify-center items-center grid-mobile">
              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ bottom: "-5px", left: "60px" }}
                  className="flex w-[300px] absolute w-ab  flex-col justify-center"
                >
                  <div
                    style={{ borderRadius: "50%" }}
                    className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc]  transition-opacity duration-300"
                  >
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h1text px-[26px] py-[3px] opacity-90 left-[20px] top-[235px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Anh Minh
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans  ">
                      CEO
                    </div>
                  </div>
                </div>
                <img
                  className=" z-10 w-[300px] h-[300px] relative img-in"
                  style={{ borderRadius: "50%" }}
                  src={introduceperson1}
                  alt="Introduce Person"
                />
              </Col>
              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ top: "0px" }}
                  className="flex w-[300px] absolute w-ab2   flex-col justify-center"
                >
                  <div className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h1text px-[26px] py-[3px] opacity-90 left-[20px] top-[240px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Thu Hương
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans ">
                      Sales Manager
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in"
                  src={introduceperson2}
                  style={{ borderRadius: "50%" }}
                  alt="Introduce Person"
                />
              </Col>
              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ bottom: "-8px" }}
                  className="flex w-[300px] absolute w-ab3  flex-col justify-center"
                >
                  <div className="h2 w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h2text px-[26px] py-[3px] opacity-90 left-[15px] top-[235px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Nguyễn Thùy Trang
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans leading-7">
                      Business Analyst Leader
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in    rounded-full"
                  src={introduceperson3}
                  alt="Introduce Person"
                />
              </Col>

              <Col
                sm={3}
                className="col-item justify-center  groupop w-[300px] h-[300px] items-center  flex flex-col"
              >
                <div
                  style={{ top: "0px" }}
                  className="flex w-[300px] absolute w-ab4   flex-col justify-center"
                >
                  <div className="h2  w-[300px]  h-[300px] justify-center flex bg-gradient-to-b from-[#48d1cc] to-[#48d1cc] rounded-full transition-opacity duration-300">
                    <div className="h1 h11 w-[79px] absolute h-[79px] left-[199px] top-[110px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h12 w-[31px] absolute h-[31px] left-[24px] top-[141px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                    <div className="h1 h13 w-[55px] absolute h-[55px] left-0 top-[43px]  bg-gradient-to-br from-[#00a99d] to-[#00a99d] rounded-full transition-opacity duration-300" />
                  </div>
                  <div className="z-20 h1 h3text px-[26px] py-[3px] opacity-90 left-[25px] bottom-[0px] absolute  bg-gradient-to-b from-[#00a99d] to-[#00a99d] rounded-2xl flex-col justify-center items-center inline-flex transition-opacity duration-300">
                    <div className="w-max  text-16 text-center text-[#f8f9fb] text-2xl font-bold font-space-grotesk">
                      Đặng Quang Huy
                    </div>
                    <div className="self-stretch text-16 text-center text-white text-base font-normal font-open-sans leading-7">
                      Tech Manager
                    </div>
                  </div>
                </div>
                <img
                  className="z-10 w-[300px] h-[300px] relative img-in   rounded-full"
                  src={introduceperson4}
                  alt="Introduce Person"
                />
              </Col>
            </Row>
          </div>
          <ButtonCustom
            title={t("xemthem")}
            from="#40e0d0"
            to="#48d1cc"
            color="text-white"
          />
        </div>
        <div className="dn-us py-10 flex-col justify-center items-center gap-2 flex">
          <div
            ref={refA3}
            className={`${
              inViewA3 ? "animate-slide-top" : ""
            } text-dn-mobile text-48 text-32 text-center text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]`}
          >
            {t("cgpl")}
          </div>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <Row
            ref={refA4}
            className={`${
              inViewA4 ? "animate-slide-bottom" : ""
            } flex w-full justify-center items-center grid-mobile`}
            style={{ height: "400px", marginTop: "100px" }}
          >
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className="rounded-full border border-[#40e0d0]"
                src={introduceperson1}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson2}
              />
            </Col>
            <Col sm={3} className=" justify-center items-center col-item flex ">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson3}
              />
            </Col>
            <Col sm={3} className="justify-center items-center col-item flex">
              <img
                className=" rounded-full border border-[#40e0d0]"
                src={introduceperson4}
              />
            </Col>
          </Row>
          <ButtonCustom
            title={t("xemthem")}
            from="#40e0d0"
            to="#48d1cc"
            color="text-white"
          />
        </div>

        <div className="gtkb w-1440 w-350  py-20 flex gap-5 ">
          <div
            ref={refA5}
            className={`${inViewA5 ? "animate-slide-bottom" : ""} flex-1`}
          >
            <div className="flex-col justify-start items-start flex gap-6 gtkb-contaner ">
              <div
                dangerouslySetInnerHTML={{
                  __html: t("loiichkhilamviec"),
                }}
                className="text-32 text-48 text-gtkb text-[#002740] text-5xl font-bold font-space-grotesk leading-[56px]"
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
            className={`${
              inViewA6 ? "animate-slide-top" : ""
            } flex-1 flex asd justify-end `}
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
        </div>
        <div className="resevfle">
          <div className="ttcontainer relative w-full pr-[100px] justify-start items-center inline-flex">
            <div
              ref={refA10}
              className={`${
                inViewA10 ? "animate-slide-top" : ""
              } ttnd pl-[200px] pr-[150px] py-10 bg-[#f4f4f4]/95 rounded-2xl flex-col justify-start items-start gap-6 inline-flex`}
              style={{ width: "60%" }}
            >
              <div className="ttdf self-stretch h-max flex-col justify-start items-start gap-4 flex">
                <div className="text-24 text-start  text-[#9ea8b6] text-2xl font-bold font-space-grotesk">
                  {t("thanhtuu")}
                </div>
                <div
                  style={{ fontSize: `${check ? "32px" : "48px"} ` }}
                  className="self-stretch text-[#002740]  font-bold font-space-grotesk leading-[56px]"
                >
                  {t("thanhcongduocxaydung")}
                </div>
                <div className=" text-16 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  {t("chungtoituhaodatnhieuthanhtich")}
                </div>
              </div>
            </div>
            <div
              style={{ right: "220px" }}
              ref={refA11}
              className={`${
                inViewA11 ? "animate-slide-right" : ""
              } absolute move `}
            >
              <img
                className=" object-cover w-full rounded-2xl wmove"
                src={introduce1}
                style={{ width: "630px" }}
              />
            </div>
          </div>
          <div className="w-1440 w-350 flex  py-20 gk ">
            <div
              ref={refA7}
              className={`${inViewA7 ? "animate-slide-left" : ""} flex-1`}
            >
              <img className=" rounded-2xl" src={introduce2} />
            </div>
            <div
              ref={refA8}
              className={`${inViewA8 ? "animate-slide-bottom" : ""} flex-1`}
            >
              <div className="flex flex-col justify-center items-center h-full">
                <div className="adasd flex-col justify-start items-start gap-6 flex">
                  <div className="  flex-col justify-start items-start flex">
                    <div className="text-gk text-48 text-32 text-[#002740] text-4xl font-bold font-space-grotesk ">
                      {t("camketcuachungtoi")}
                    </div>
                  </div>
                  <div className="des-gk text-16 text-black text-base font-normal font-open-sans leading-normal">
                    {t("chungtoicamketcacdv")}
                  </div>
                  <div className="flex buttnsd justify-start items-start w-full">
                    <ButtonCustom
                      title={t("lhngay")}
                      from="#40e0d0"
                      to="#48d1cc"
                      color="text-white"
                      onClick={() => navigate("/lien-he")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1440 w-350 zxc pt-16">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-full h-max baovecontainer flex-col justify-start items-start gap-2.5 pb-20 flex`}
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
                    onClick={handleOpenModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Personnel;
