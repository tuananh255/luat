import { useEffect } from "react";
import "./RecruitingLawyers.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import briefcase_line from "../../assets/icon/fill/briefcase_line.png";
import earth_line from "../../assets/icon/fill/earth_line.png";
import mail_line from "../../assets/icon/fill/mail_line.png";
import mortarboard_line from "../../assets/icon/fill/mortarboard_line.png";
import introduce from "../../assets/imgs/introduce1.png";
const RecruitingLawyers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="w-1440 w-350 rl  bg-white flex-col justify-start items-start ">
        <Breadcrumb title1={"Nhân sự"} title2={"Luật sư riêng"} />
        <div className="self-stretch rlcon pt-6 pb-20 flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch rlflex justify-start items-start gap-10 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch h-24 flex-col justify-center items-start gap-6 flex">
                <div className="h-24 flex-col justify-center items-start gap-3 flex">
                  <div className="self-stretch h-14 flex-col justify-center items-start gap-3 flex">
                    <div className="justify-center items-start gap-4 inline-flex">
                      <div className="w-14 rounded-full justify-center items-center flex">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={introduce}
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-[#344054] text-sm font-normal font-['Inter'] leading-tight">
                          Apolo Laywers
                        </div>
                        <div className="text-[#101828] text-16 text-2xl font-semibold font-['Inter'] leading-loose">
                          Luật sư Tư vấn Pháp lý
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-7 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                      <div className="justify-start items-center gap-2 flex">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-green-50" />
                      </div>
                      <div className="text-green-500 text-base font-normal font-['Open Sans'] leading-7">
                        Đang tuyển dụng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch py-6 border-b border-[#eaecf0] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={earth_line} alt="briefcase_line" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-[#002740] text-xl font-bold font-['Space Grotesk'] leading-normal">
                    Giới thiệu
                  </div>
                </div>
                <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                  Apolo Lawyers đang tìm kiếm một Luật Sư Tư Vấn Pháp Lý để gia
                  nhập đội ngũ của chúng tôi. Với cam kết mang lại dịch vụ pháp
                  lý tốt nhất, chúng tôi cần một ứng viên tận tâm và có kinh
                  nghiệm để cùng chúng tôi thực hiện sứ mệnh này.
                </div>
              </div>
              <div className="self-stretch  pt-2 pb-6 border-b border-[#eaecf0] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={briefcase_line} alt="briefcase_line" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-[#002740] text-xl font-bold font-['Space Grotesk'] leading-normal">
                    Mô Tả Công Việc
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-4 inline-flex">
                  <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                    <div className="self-stretch">
                      <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                        Cung cấp tư vấn pháp lý:
                      </span>
                      <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                        {" "}
                        Tư vấn cho khách hàng về các vấn đề pháp lý đa dạng, bao
                        gồm luật doanh nghiệp, luật hợp đồng, luật lao động và
                        luật dân sự.
                      </span>
                    </div>
                    <div className="self-stretch">
                      <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                        Soạn thảo và xem xét hợp đồng:
                      </span>
                      <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                        {" "}
                        Chuẩn bị, xem xét và đàm phán các loại hợp đồng, văn bản
                        pháp lý đảm bảo tuân thủ các quy định pháp luật.
                      </span>
                    </div>
                    <div className="self-stretch">
                      <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                        Đại diện cho khách hàng:
                      </span>
                      <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                        {" "}
                        Tham gia các cuộc đàm phán và giải quyết tranh chấp, đảm
                        bảo quyền lợi của khách hàng được bảo vệ tối đa.
                      </span>
                    </div>
                    <div className="self-stretch">
                      <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                        Tham gia các phiên tòa:
                      </span>
                      <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                        {" "}
                        Đại diện cho khách hàng trong các phiên tòa khi cần
                        thiết, chuẩn bị hồ sơ và lập luận pháp lý chặt chẽ.
                      </span>
                    </div>
                    <div className="self-stretch">
                      <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                        Nghiên cứu và cập nhật pháp luật:
                      </span>
                      <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                        {" "}
                        Liên tục nghiên cứu và cập nhật các quy định pháp luật
                        mới nhất để đảm bảo tư vấn chính xác và hiệu quả.
                      </span>
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
                  <div className="text-[#002740] text-xl font-bold font-['Space Grotesk'] leading-normal">
                    Yêu Cầu Công Việc
                  </div>
                </div>
                <div className="self-stretch">
                  <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                    Bằng cấp:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {" "}
                    Có bằng Cử nhân Luật từ một trường đại học uy tín.
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                    Kinh nghiệm:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {" "}
                    Ít nhất 3 năm kinh nghiệm làm việc trong lĩnh vực tư vấn
                    pháp lý.
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                    Kỹ năng:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {" "}
                    Kỹ năng giao tiếp và đàm phán xuất sắc, khả năng làm việc
                    độc lập và theo nhóm.
                  </span>
                </div>
                <div className="self-stretch">
                  <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                    Chứng chỉ:
                  </span>
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {" "}
                    Có chứng chỉ hành nghề luật sư là một lợi thế.
                  </span>
                </div>
              </div>
              <div className="self-stretch  pt-4 pb-6 border-b border-[#eaecf0] flex-col justify-start items-end gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                  <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <img src={mail_line} alt="mail_line" />
                    </div>
                  </div>
                  <div className="text-[#002740] text-xl font-bold font-['Space Grotesk'] leading-normal">
                    Cách thức ứng tuyển
                  </div>
                </div>
                <div className="self-stretch">
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    {" "}
                    Nếu bạn quan tâm đến vị trí này và đáp ứng các yêu cầu trên,
                    vui lòng gửi CV và thư xin việc của bạn đến email:{" "}
                  </span>
                  <span className="text-[#606670] text-base font-bold font-['Open Sans'] leading-7">
                    recruitment@apollolawyers.com
                  </span>
                  <span className="text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                    . Chúng tôi sẽ liên hệ với các ứng viên phù hợp để phỏng
                    vấn.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[402px] rl-casee flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-[#002740] text-2xl font-bold font-['Space Grotesk'] leading-loose">
                Các vị trí tuyển dụng khác
              </div>
              <div className="px-4 utk w-350 flex-col justify-center items-center gap-6 flex">
                <div className="w-[397.33px] w-350 h-[317px] items-rl p-6 bg-white rounded-2xl shadow flex-col justify-between items-end flex">
                  <div className="self-stretch h-[236px] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[72px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#606670] text-base font-semibold font-['Open Sans'] leading-normal">
                        4/8/2024
                      </div>
                      <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">
                        Trợ lý Luật sư
                      </div>
                    </div>
                    <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                      Hỗ trợ các luật sư trong công việc hàng ngày, bao gồm quản
                      lý lịch trình, chuẩn bị tài liệu, và liên lạc với khách
                      hàng. Trợ lý luật sư cũng đảm bảo rằng các thủ tục pháp lý
                      được thực hiện đúng thời hạn.
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-['Open Sans'] leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="w-[397.33px] w-350 h-[317px] p-6 items-rl  bg-white rounded-2xl shadow flex-col justify-between items-end flex">
                  <div className="self-stretch h-[236px] flex-col justify-start items-start gap-6 flex">
                    <div className="h-[72px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#606670] text-base font-semibold font-['Open Sans'] leading-normal">
                        4/8/2024
                      </div>
                      <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">
                        Luật sư Tranh tụng
                      </div>
                    </div>
                    <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                      Đại diện khách hàng trong các vụ kiện tại tòa án và các cơ
                      quan pháp lý khác. Luật sư tranh tụng chịu trách nhiệm
                      chuẩn bị hồ sơ vụ án, thu thập chứng cứ, và tranh luận tại
                      tòa để bảo vệ quyền lợi của khách hàng.
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-['Open Sans'] leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
                <div className="w-[397.33px] w-350 h-[317px] p-6 items-rl  bg-white rounded-2xl shadow flex-col justify-between items-end flex">
                  <div className="self-stretch h-52 flex-col justify-start items-start gap-6 flex">
                    <div className="h-[72px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-[#606670] text-base font-semibold font-['Open Sans'] leading-normal">
                        4/8/2024
                      </div>
                      <div className="self-stretch text-[#002740] text-[32px] font-bold font-['Space Grotesk'] leading-10">
                        Chuyên viên Pháp lý
                      </div>
                    </div>
                    <div className="self-stretch text-[#606670] text-base font-normal font-['Open Sans'] leading-7">
                      Hỗ trợ các luật sư trong việc nghiên cứu pháp lý, soạn
                      thảo tài liệu, và chuẩn bị hồ sơ. Chuyên viên pháp lý cũng
                      có thể trực tiếp tư vấn cho khách hàng dưới sự giám sát
                      của luật sư.
                    </div>
                  </div>
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="text-[#1cb0ad] text-base font-semibold font-['Open Sans'] leading-normal">
                      Xem chi tiết
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  py-20 justify-start items-start gap-16 inline-flex why">
          <div className="w-[440px] why-heading w-350 flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-full text-[#002740] text-5xl text-32 font-bold text-mobile font-space-grotesk leading-[56px]">
              Tại sao chọn <br />
              Apolo Lawyers?
            </div>
            <div className="desc-why text-[#606670] text-base font-normal font-open-sans leading-7">
              Chúng tôi cung cấp môi trường làm việc chuyên nghiệp, cơ hội phát
              triển sự nghiệp vượt trội và sự hỗ trợ tận tâm từ đội ngũ lãnh
              đạo.
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="why-col justify-start items-center gap-6 inline-flex">
              <div className="items-why grow shrink basis-0 h-[210px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                {" "}
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  01
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Chế Độ Đãi Ngộ Hấp Dẫn
                </div>
              </div>
              <div className=" items-why grow shrink basis-0 h-[210px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  02
                </div>
                <div className="items-why text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Nghỉ phép
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[210px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  03
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Đào Tạo và Phát Triển
                </div>
              </div>
            </div>
            <div className="why-col justify-start items-center gap-6 inline-flex">
              <div className="items-why grow shrink basis-0 h-[200px] px-4 pt-4  rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  04
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Cơ Hội Thăng Tiến
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[210px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  05
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Chuyên nghiệp và thân thiện
                </div>
              </div>
              <div className="items-why grow shrink basis-0 h-[210px] px-4 py-4 rounded-2xl border border-[#48d1cc] flex-col justify-start items-start gap-6 inline-flex">
                <div className=" text-[#002740] text-[40px] font-medium font-space-grotesk leading-[48px]">
                  06
                </div>
                <div className=" text-[#48d1cc] text-2xl font-bold font-space-grotesk leading-loose">
                  Team-building
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitingLawyers;
