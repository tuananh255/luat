import "./InforPersonnel.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import briefcase_line from "../../assets/icon/fill/briefcase_line.png";
import earth_line from "../../assets/icon/fill/earth_line.png";
import linecertificate_2_line from "../../assets/icon/fill/linecertificate_2_line.png";
import mortarboard_line from "../../assets/icon/fill/mortarboard_line.png";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
// import Modal from "../../components/Model/Model";
import introduce from "../../assets/imgs/introduce1.png";
const InforPersonnel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [check, setCheck] = useState(false);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const handleCloseModal = () => {};
  const { ref: refA5, inView: inViewA5 } = useInView({ triggerOnce: true });
  // const { ref: refA9, inView: inViewA9 } = useInView({ triggerOnce: true });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  return (
    <div>
      <div className="w-1440 w-350  bg-white flex-col justify-start items-start ">
        <div className="self-stretch  py-6 justify-start items-center gap-3 inline-flex">
          <Breadcrumb
            slug={"nhan-su"}
            title1={"Nhân sự"}
            title2={"Nguyễn Thu Hương"}
          />
        </div>
        <div className="inf4c self-stretch   pt-6 pb-20 flex-col justify-start items-start gap-6 flex">
          <div className="inf4ccc self-stretch justify-start items-start gap-10 inline-flex">
            <div className="w-[335px] w-350 px-6 rounded-2xl border border-[#eaecf0] flex-col justify-start items-center inline-flex">
              <div className="self-stretch py-6 justify-start items-center gap-4 inline-flex">
                <img className="w-16 h-16 rounded-full" src={introduce} />
                <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
                  <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-7">
                    Nguyễn Thu A
                  </div>
                  <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">
                    Luật sư
                  </div>
                </div>
              </div>
              <div className="self-stretch  py-6 border-t border-[#eaecf0] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-5  justify-center items-center flex">
                      <div className="w-5  relative">
                        <FaPhoneAlt />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                      Số điện thoại
                    </div>
                    <div className="text-[#002740] text-sm font-semibold font-open-sans leading-tight">
                      0123456756
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-5  justify-center items-center flex">
                      <div className="w-5  relative">
                        <IoMail />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                      Email
                    </div>
                    <div className="text-[#002740] text-sm font-semibold font-open-sans leading-tight">
                      amber2313@gmail.com
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2 inline-flex">
                    <div className="w-5  justify-center items-center flex">
                      <div className="w-5  relative">
                        <FaMapMarkerAlt />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                      Nơi sinh sống
                    </div>
                    <div className="text-[#002740] text-sm font-semibold font-open-sans leading-tight">
                      Hồ Chí Minh, Việt Nam
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch py-6 border-b border-[#eaecf0] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={earth_line} alt="earth_line" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-[#002740] text-xl font-bold font-space-grotesk leading-normal">
                    Giới thiệu
                  </div>
                </div>
                <div className="self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  Luật sư Nguyễn Thu A là một trong những luật sư cao cấp tại
                  Apolo Lawyers với hơn 15 năm kinh nghiệm trong ngành. Chị đã
                  giúp hàng trăm khách hàng giải quyết các vấn đề pháp lý phức
                  tạp, từ tranh chấp hợp đồng đến các vụ kiện tụng lớn. Với sự
                  hiểu biết sâu rộng về luật doanh nghiệp, luật hợp đồng và luật
                  lao động, luật sư Nguyễn Thu A luôn mang đến những giải pháp
                  pháp lý hiệu quả và đáng tin cậy.
                </div>
              </div>
              <div className="self-stretch pt-2 pb-6 border-b border-[#eaecf0] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={briefcase_line} alt="briefcase_line" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-[#002740] text-xl font-bold font-space-grotesk leading-normal">
                    Kinh nghiệm làm việc
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                      <div className="dot self-stretch text-[#002740] text-base font-semibold font-['Inter'] leading-7">
                        Tập Sự Luật Sư{" "}
                      </div>
                      <div className="abcss self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          Công Ty Luật ABC
                        </div>
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          2005-2007
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      <span>
                        Mô tả công việc: Hỗ trợ các luật sư chính trong việc
                        chuẩn bị hồ sơ, nghiên cứu pháp lý và tham gia vào các
                        phiên tòa.
                      </span>
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Kinh nghiệm đạt được: Phát triển kỹ năng nghiên cứu và
                      phân tích pháp lý, hiểu rõ quy trình tố tụng và các thủ
                      tục pháp lý.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="abcss2 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-['Inter'] leading-7">
                        Luật Sư Chính{" "}
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          Công Ty Luật DEF
                        </div>
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          2007-2012
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Mô tả công việc: Chịu trách nhiệm tư vấn pháp lý cho khách
                      hàng doanh nghiệp, chuẩn bị và xem xét hợp đồng, giải
                      quyết tranh chấp và đại diện cho khách hàng tại tòa án.
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Kinh nghiệm đạt được: Nâng cao kỹ năng đàm phán, giải
                      quyết tranh chấp và tư vấn chiến lược pháp lý cho các
                      doanh nghiệp.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="abcss3 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-['Inter'] leading-7">
                        Trưởng Phòng Pháp Lý{" "}
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          Công Ty GHI
                        </div>
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          2012-2017
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Mô tả công việc: Lãnh đạo đội ngũ pháp lý, xây dựng và
                      triển khai các chiến lược pháp lý cho công ty, đảm bảo
                      tuân thủ quy định pháp luật và xử lý các vấn đề pháp lý
                      phát sinh.
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Kinh nghiệm đạt được: Kỹ năng quản lý và lãnh đạo, khả
                      năng xây dựng chiến lược pháp lý toàn diện và hiệu quả.
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className=" abcss4 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-['Inter'] leading-7">
                        Luật Sư Cao Cấp{" "}
                      </div>
                      <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          Apolo Lawyers
                        </div>
                        <div className="text-[#606670] text-sm font-semibold font-open-sans leading-tight">
                          2017-nay
                        </div>
                      </div>
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Mô tả công việc: Tư vấn pháp lý chuyên sâu cho các doanh
                      nghiệp lớn, giải quyết các tranh chấp phức tạp, đại diện
                      khách hàng trong các vụ kiện lớn và tham gia vào việc
                      hoạch định chiến lược pháp lý cho công ty.
                    </div>
                    <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                      <span className="bullet">•</span>
                      Kinh nghiệm đạt được: Kỹ năng chuyên môn cao trong các
                      lĩnh vực luật doanh nghiệp, luật hợp đồng và luật lao
                      động, cùng với khả năng giải quyết các vấn đề pháp lý phức
                      tạp và đa dạng.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch  pt-4 pb-6 border-b border-[#eaecf0] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={mortarboard_line} alt="mortarboard_line" />
                    </div>
                  </div>
                  <div className="w-24 text-[#002740] text-xl font-bold font-space-grotesk leading-normal">
                    Học vấn
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-open-sans leading-normal">
                        Cử Nhân Luật
                      </div>
                      <div className="flexhoc self-stretch justify-start items-center gap-2 flex">
                        <div className="text-[#667085]  text-base font-medium font-['Inter'] leading-tight">
                          Đại Học Luật TP. Hồ Chí Minh{" "}
                        </div>
                        <div className="text-[#667085] text-base font-medium font-['Inter'] leading-tight">
                          Tháng 9 năm 2000 – Tháng 6 năm 2004
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-open-sans leading-normal">
                        {" "}
                        Thạc Sĩ Luật
                      </div>
                      <div className=" flexhoc self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#667085] text-base font-medium font-['Inter'] leading-tight">
                          Đại Học Luật Quốc Tế
                        </div>
                        <div className="text-[#667085] text-base font-medium font-['Inter'] leading-tight">
                          Tháng 1 năm 2005 – Tháng 12 năm 2006
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="self-stretch flex-col justify-start items-center gap-4 inline-flex">
                    <div className="h-7 justify-start items-center gap-2 inline-flex">
                      <div className="w-3.5 h-3.5 bg-[#1cb0ad] rounded-full border-2 border-[#cef9f4]" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#002740] text-base font-semibold font-open-sans leading-normal">
                        Chứng Chỉ Hành Nghề Luật Sư
                      </div>
                      <div className=" flexhoc self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-[#667085] text-base font-medium font-['Inter'] leading-tight">
                          Liên Đoàn Luật Sư Việt Nam
                        </div>
                        <div className="text-[#667085] text-base font-medium font-['Inter'] leading-tight">
                          2006
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch  pt-4 pb-6 border-b border-[#eaecf0] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img
                        src={linecertificate_2_line}
                        alt="linecertificate_2_line"
                      />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-[#002740] text-xl font-bold font-space-grotesk leading-normal">
                    Thành Tích Nổi Bật
                  </div>
                </div>
                <div className="flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  <span className="bullet">•</span>
                  <span>
                    {" "}
                    Giải quyết thành công nhiều vụ tranh chấp hợp đồng lớn giữa
                    các doanh nghiệp.
                  </span>
                </div>
                <div className="flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  <span className="bullet">•</span>
                  <span>
                    Tư vấn pháp lý cho nhiều công ty đa quốc gia trong việc tuân
                    thủ luật pháp Việt Nam.
                  </span>
                </div>
                <div className=" flex gap-3 self-stretch text-[#606670] text-base font-normal font-open-sans leading-7">
                  <span className="bullet">•</span>
                  <span>
                    Đạt được nhiều giải thưởng uy tín trong ngành luật, bao gồm
                    "Luật Sư Xuất Sắc" năm 2020.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full zxc pt-16">
          <div
            ref={refA5}
            className={` ${
              inViewA5 ? "animate-slide-bottom" : ""
            } w-full h-max baovecontainer  flex-col justify-start items-start gap-2.5 pb-20 flex`}
          >
            <div className=" baove w-full h-max px-[200px] py-10 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-2xl shadow flex-col justify-start items-center gap-10 flex">
              <div className="asd h-48 flex-col justify-start items-center gap-6 flex">
                <div className="text-bvvvv text-32 text-48 text-center text-white text-5xl font-bold font-space-grotesk leading-[56px]">
                  Bảo vệ {check && <br />} Quyền lợi của Bạn {!check && <br />}{" "}
                  Ngay Hôm Nay!
                </div>
                <div className="text-16 descbv w-[654px] text-center text-white text-base font-normal font-open-sans leading-7">
                  Đừng để những vấn đề pháp lý cản trở bước tiến của bạn. Hãy để
                  Apolo Lawyers đồng hành và bảo vệ quyền lợi của bạn một cách
                  chuyên nghiệp và tận tâm.
                </div>
              </div>
              <ButtonCustom
                title="Liên hệ ngay"
                from="#fff"
                to="#fff"
                color="text-black"
              />
            </div>
          </div>
        </div>
        {/* <div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div> */}
      </div>
    </div>
  );
};

export default InforPersonnel;
