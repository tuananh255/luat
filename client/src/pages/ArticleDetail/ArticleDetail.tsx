import { useEffect, useState } from "react";
import "./ArticleDetail.css";
import Slider from "react-slick";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import bv1 from "../../assets/imgs/bv1.png";
import bv2 from "../../assets/imgs/bv2.png";
import tinmoi1 from "../../assets/imgs/tinmoi1.png";
import tinmoi2 from "../../assets/imgs/tinmoi2.png";
import tinmoi3 from "../../assets/imgs/tinmoi1.png";
import eye2 from "../../assets/icon/fill/eye_2_line.png";
import time from "../../assets/icon/fill/time_line.png";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import { useTranslationContext } from "../../context/TranslationContext";
const ArticleDetail = () => {
  const t = useTranslationContext();
  const [check, setCheck] = useState(false);
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  const dataAllLuat = [
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi1,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi2,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi3,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi1,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi2,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi3,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi1,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi2,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi3,
      date: "03/08/2024",
      blog: "Luật sở hữu trí tuệ",
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi1,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi2,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
    {
      title: t("baovequyenloi"),
      description: t("desBaoVeQuyenLoi"),
      image: tinmoi3,
      date: "03/08/2024",
      blog: t("ttphaply"),
    },
  ];
  return (
    <div className="w-1440 ad w-350  py-6 bg-white flex-col flex">
      <div className="py-6 flex-col justify-start items-start gap-2.5 flex">
        <Breadcrumb
          slug={"bai-viet"}
          title1={t("baiviet")}
          title2={t("baovequyenloi")}
        />
      </div>
      <div className="w-1440 w-350 adcon  border-t border-[#3c3c3c]/20 gap-10 flex">
        <div className="pbno w-[750px] w-350 pt-10 pb-16 flex-col justify-start items-center gap-12 inline-flex">
          <div className=" flex-col justify-start items-start gap-6 flex">
            <div className=" justify-start items-start gap-6 flex">
              <div className="grow shrink basis-0 text-[#3c3c3c] text-32 text-[40px] font-bold font-space-grotesk leading-[48px]">
              {t("baovequyenloi")}
              </div>
            </div>
            <div className=" justify-start items-center gap-6 inline-flex">
              <div className=" fleasd justify-start items-center gap-3 flex">
                <div className="d-flex">
                  <div className="px-2 py-1 rounded-[999px] justify-start items-center gap-2 flex">
                    <div className="w-4 h-4 justify-center items-center flex">
                      <div className="w-4 h-4 relative">
                        <img src={time} />
                      </div>
                    </div>
                    <div className="text-[#606670] text-sm font-normal font-open-sans ">
                      12 giờ trước
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-[999px] justify-start items-center gap-2 flex">
                    <div className="w-4 h-4 justify-center items-center flex">
                      <div className="w-4 h-4 relative">
                        {" "}
                        <img src={eye2} />
                      </div>
                    </div>
                    <div className="text-[#606670] text-sm font-normal font-open-sans ">
                      15 lượt xem
                    </div>
                  </div>
                </div>
                <div className="w-[5px] dot-molie h-[5px] bg-[#1cb0ad] rounded-full" />
                <div className="abddd px-2 py-1 bg-[#f8f8ff] rounded-[999px] justify-start items-center gap-2 flex">
                  <div className="text-[#1cb0ad] text-tt text-sm font-normal font-['DM Sans']">
                    Giải quyết Tranh chấp
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ width: "750px", height: "555px" }}
            className=" h-[555px] rounded-2xl shadow"
            src={bv1}
          />
          <div className="w-full  flex-col justify-start items-center gap-8 flex">
            <div className="  flex-col justify-start items-center gap-4 flex">
              <div className=" text-[#002740] text-[32px] text-28m font-bold font-space-grotesk leading-10">
                Một số loại tranh chấp giữa các cổ đông trong công ty cổ phần
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                “Tranh chấp giữa các cổ đông” là những mâu thuẫn, xung đột về
                quyền, lợi ích và nghĩa vụ giữa các cổ đông, đội ngũ quản lý,
                vận hành hoạt động kinh doanh trong công ty cổ phần.
              </div>
              <div className="flex w-full text-[#606670] text-start text-base font-normal font-open-sans ">
                Có thể chia tranh chấp giữa các cổ đông thành 2 loại:
              </div>
              <div className="flex w-full text-start text-[#606670] text-2xl font-bold font-space-grotesk ">
                1. Tranh chấp quyền lợi, nghĩa vụ giữa các cổ đông với nhau
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Tranh chấp về tư cách cổ đông. Có thể họ là cổ đông sáng lập
                nhưng lại không góp tiền cho một cổ phần nào trong số cổ phần đã
                đăng ký hoặc góp không đủ số cổ phần đã đăng ký nhưng yêu cầu
                quyền và lợi ích như một cổ đông đã góp đủ vốn. Ngoài ra, tranh
                chấp về phương thức góp vốn như định giá tài sản cao hơn thực
                tế, không chuyển quyền sở hữu tài sản góp vốn, không thỏa thuận
                trước với nhau về việc góp vốn và giá trị vốn góp bằng tài sản,
                không quy định cụ thể về thời điểm hoàn tất việc chuyển nhượng
                cổ phần, hoặc tranh chấp về việc cổ đông nào cũng muốn tham gia
                điều hành công ty.
              </div>
              <div className=" text-[#606670] text-2xl font-bold font-space-grotesk ">
                2. Tranh chấp giữa cổ đông và các thành viên Hội đồng quản trị
                hoặc những người giữ chức vụ được trực tiếp quản lý, tham gia
                vận hành doanh nghiệp.
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Các nhóm cổ đông nắm cổ phần chi phối (như HĐQT) thường muốn
                “người của mình” làm giám đốc; hoặc cổ đông lớn là chủ tịch và
                đồng thời muốn làm giám đốc điều hành nhằm mục đích không loại
                họ ra khỏi HĐQT, không bãi nhiệm khỏi chức danh chủ tịch HĐQT,
                hoặc tranh chấp phát sinh từ các quyết định của Đại hội đồng cổ
                đông. Sự tranh chấp về tư cách cổ đông dẫn tới hệ quả là tất cả
                quyết định của Đại hội đồng cổ đông sẽ trở thành đối tượng của
                tranh chấp vì lẽ: Quyết định không công bằng; Quyết định không
                hợp pháp của Đại hội đồng cổ đông dẫn đến quyền lợi của các cổ
                đông khác không được như mong đợi…
              </div>
            </div>
            <div className="  flex-col justify-start items-center gap-4 flex">
              <div className=" text-[#002740] text-[32px] text-28m font-bold font-space-grotesk leading-10">
                Nguyên nhân dẫn đến tranh chấp quyền và nghĩa vụ giữa các cổ
                đông trong công ty cổ phần
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Có nhiều nguyên nhân dẫn đến tranh chấp quyền và nghĩa vụ giữa
                các cổ đông trong công ty cổ phần.
              </div>
              <div className="flex w-full text-start text-[#606670] text-20 text-2xl font-bold font-space-grotesk ">
                1. Xuất phát từ rủi ro mua bán giao dịch chuyển nhượng tự do
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Cổ đông sáng lập muốn chuyển nhượng cổ phần trong vòng 3 năm kể
                từ ngày công ty được cấp Giấy chứng nhận đăng ký doanh nghiệp cổ
                phần phổ thông của cổ đông sáng lập được tự do chuyển nhượng cho
                cổ đông sáng lập khác và chỉ được chuyển nhượng cho người không
                phải cổ đông sáng lập nếu được sự chấp thuận của Đại hội đồng cổ
                đông. Trường hợp này cổ đông sáng lập dự định chuyển nhượng cổ
                phần phổ thông thì không có quyền biểu quyết về việc chuyển
                nhượng cổ phần đó. Nghĩa là, các cổ đông sáng lập họp và thông
                qua việc chuyển nhượng cổ phần thì mới được coi là hợp lệ.
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Ngoài trường hợp trên, cổ đông được tự do chuyển nhượng. Sau khi
                ký kết hợp đồng chuyển nhượng, cổ đông được cấp cổ phiếu, được
                ghi nhận trong sổ đăng ký cổ đông. Việc thay đổi cổ đông trong
                sổ đăng ký cổ đông phải là trách nhiệm của công ty dưới yêu cầu
                của cổ đông mới. Như vậy, cổ đông mới cần biết được quyền yêu
                cầu của mình để thực hiện hoàn thành bước được trở thành cổ đông
                chính thức của CTCP.
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Một trong những lưu ý quan trọng trong quá trình chuyển nhượng
                cổ phần trong công ty cổ phần là hình thức của hợp đồng. Việt
                thực hiện chuyển nhượng được thực hiện bằng hợp đồng hoặc giao
                dịch trên thị trường chứng khoán. Trường hợp chuyển nhượng bằng
                hợp đồng thì giấy tờ chuyển nhượng hoặc người đại diện theo ủy
                quyền ký (Điều 127 Luật Doanh nghiệp). Khi có tranh chấp liên
                quan đến việc xác nhận tư cách thành viên, hợp đồng chuyển
                nhượng cổ phần trở thành một trong những chứng cứ quan trọng bên
                cạnh những giấy tờ cần thiết nêu trên.
              </div>
              <div className="flex w-full text-start text-20 text-[#606670] text-2xl font-bold font-space-grotesk ">
                2. Xuất phát từ báo cáo tài chính không minh bạch
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Điều này cũng xuất phát từ một số cá nhân được giao trọng trách
                nhưng không tuân thủ quy định. Quyền trong tay càng lớn thì lòng
                tham càng lớn, chẳng hạn những người vừa là cổ đông lớn, vừa nắm
                giữ chức quyền hạn của Người đại diện theo pháp luật, Chủ tịch
                Hội đồng quản trị. Bằng thủ thuật chuyển nhượng cổ phần, cổ
                phiếu của công ty, hoặc hoán đổi cổ phần giữa một công ty sắp
                phá sản với công ty thực tế đang kinh doanh phát triển qua mắt
                các cổ đông còn lại. Trên thực tế, không phải công ty nào cũng
                được thành lập để kinh doanh, làm ăn chân chính hoặc có tiềm
                năng cạnh tranh trên thị trường. Tuy nhiên, vì sự toan tính của
                một nhóm người, đã dẫn đến tranh chấp nội bộ xảy ra, ảnh hưởng
                đến tiến trình phát triển của công ty.
              </div>
              <div className=" flex-col justify-start items-start gap-4 flex">
                <div className=" justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0">
                    <span className="text-[#606670] text-base font-normal font-open-sans ">
                      Bespoke Research:
                    </span>
                    <span className="text-black text-base font-normal font-open-sans ">
                      {" "}
                    </span>
                    <span className="text-[#606670] text-base font-normal font-open-sans ">
                      Acuity's team of experienced analysts provides customized
                      research solutions across various domains, including
                      equity research, credit research, ESG research, and market
                      intelligence. By leveraging their expertise and utilizing{" "}
                    </span>
                  </div>
                </div>
              </div>
              <img
                className=" h-[555px] rounded-2xl shadow"
                style={{ width: "750px", height: "555px" }}
                src={bv2}
              />
            </div>
            <div className="w-full  flex-col justify-start items-start gap-4 flex">
              <div className=" text-[#002740] text-28m text-[32px] font-bold font-space-grotesk leading-10">
                Biện pháp giải quyết tranh chấp giữa các cổ đông trong công ty
                cổ phần
              </div>
              <div className=" text-[#606670] text-20 text-2xl font-bold font-space-grotesk ">
                1. Giải quyết tranh chấp bằng thương lượng
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Các cổ đông, nhóm cổ đông có thể thể hiện quyền bằng việc tổ
                chức các cuộc họp để thương lượng. Ở mỗi công ty, các cổ đông có
                thể thỏa thuận về tỷ lệ cổ phần cổ đông có quyền quyết định tham
                gia dự họp, tham gia biểu quyết, tiến hành họp qua các lần, …
                ngoại trừ cuộc họp Đại hội đồng cổ đông lần thứ ba được tiến
                hành không phụ thuộc vào tổng số phiếu biểu quyết của các cổ
                đông dự họp. Tranh chấp giữa các cổ đông nếu phát sinh trong quá
                trình kinh doanh thì các bên sẽ giải quyết thông qua việc tổ
                chức họp Đại hội đồng cổ đông.
              </div>
              <div className=" text-[#606670] text-2xl text-20 font-bold font-space-grotesk ">
                2. Giải quyết tranh chấp bằng phương thức hòa giải
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Các bên có quyền lựa chọn phương thức hòa giải tại Trung tâm hòa
                giải thương mại về tranh chấp như một phương án phát sinh sau
                khi xảy ra tranh chấp. Việc này giúp tranh chấp được thực hiện
                nhanh chóng, và đối với kết quả hòa giải được Tòa án công nhận
                theo quy định của pháp luật tố tụng dân sự. Tuy nhiên trên thực
                tế, các tranh chấp xảy ra thường mang tính cấp bách, ảnh hưởng
                đến kinh tế của từng cổ đông và phương án kinh doanh của công
                ty, việc hòa giải chưa hẳn đã đủ tính cưỡng chế răn đe các bên
                thực hiện kết quả như một số phương án giải quyết tranh chấp
                khác.
              </div>
              <div className="text-[#606670] text-20 text-2xl font-bold font-space-grotesk ">
                3. Giải quyết tranh chấp bằng khởi kiện tòa án nhân dân
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Lựa chọn phương pháp giải quyết tranh chấp bằng khởi kiện tại
                Tòa án nhân dân được nhiều cổ đông sử dụng. Công ty cổ phần thực
                chất là công ty đối vốn nên các tranh chấp phát sinh từ bên
                ngoài hoặc nội bộ công ty sẽ khó có thể đạt được thỏa thuận hợp
                tình hợp lý.
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Chẳng hạn, một công ty đại chúng, chủ tịch hội đồng quản trị
                kiêm người đại diện theo pháp luật ký kết đầu tư những khoản lớn
                hơn quy định, vượt quyền hạn của họ dẫn đến thiệt hại cho công
                ty. Trường hợp này, bên cạnh việc triệu tập các cuộc họp đại hôi
                đồng cổ đông bất thường, cổ đông còn có quyền khởi kiện đến Tòa
                án để yêu cầu bồi thường cũng như tuyên các giao dịch vô hiệu
                toàn bộ hoặc vô hiệu một phần. Điều mà việc thương lượng không
                thể giải quyết triệt để được.
              </div>
              <div className="w-[634px] w-350 text-20 text-[#606670] text-2xl font-bold font-space-grotesk ">
                4. Giải quyết tranh chấp thông qua Trung tâm trọng tài
              </div>
              <div className=" text-[#606670] text-base font-normal font-open-sans ">
                Phương án giải quyết bằng việc khởi kiện tại Trung tâm trọng tài
                có thể được các bên áp dụng trong trường hợp có thỏa thuận. Thời
                hiệu khởi kiện theo thủ tục trọng tài là 2 năm, kể từ thời điểm
                quyền và lợi ích hợp pháp bị xâm phạm. Hiện nay, lựa chọn giải
                quyết trọng tài cũng đã trở nên phổ biến trong việc giải quyết
                các tranh chấp bởi ưu điểm của phương pháp này: Quyết định của
                Hội đồng trọng tài là chung thẩm và có hiệu lực kể từ ngày ban
                hành. Việt giải quyết bằng trọng tài sẽ mất ít thời gian hơn so
                với giải quyết tranh chấp bằng con đường tố tụng tại Tòa án nhân
                dân.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="">
                <span className="text-[#606670] text-base font-normal font-open-sans ">
                  Công ty Luật Apolo Lawyers luôn sẵn sàng đồng hành cùng Quý
                  khách hàng, sẵn sàng hỗ trợ các vấn đề pháp lý cho mọi cá
                  nhân, tổ chức trong và ngoài nước. Nếu có khó khăn, thắc mắc,
                  Quý khách hàng vui lòng liên hệ với công ty chúng tôi Công ty
                  Luật Apolo Lawyers qua email{" "}
                </span>
                <span className="text-[#606670] text-base font-bold font-open-sans ">
                  contact@apolo.com.vn
                </span>
                <span className="text-[#606670] text-base font-normal font-open-sans ">
                  {" "}
                  hoặc Hotline -{" "}
                </span>
                <span className="text-[#606670] text-base font-bold font-open-sans ">
                  0903419479
                </span>
                <span className="text-[#606670] text-base font-normal font-open-sans ">
                  {" "}
                  để được tư vấn, hỗ trợ tốt nhất.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml grow shrink basis-0 px-6 py-10 flex-col justify-start items-center gap-8 inline-flex">
          <div className=" flex-col justify-start items-start gap-4 flex">
            <div className=" flex-col justify-start items-start gap-4 flex">
              <div className=" h-8 flex-col justify-start items-start gap-4 flex">
                <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                  Mục lục{" "}
                </div>
              </div>
              <div className=" flex-col justify-start items-start gap-4 flex">
                <div className="  flex-col justify-start items-start gap-3 flex">
                  <div className=" text-[#002740] text-sm font-semibold font-open-sans ">
                    Một số loại tranh chấp giữa các cổ đông trong công ty cổ
                    phần
                  </div>
                  <div className=" h-28 flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Tranh chấp quyền lợi, nghĩa vụ giữa các cổ đông với nhau
                    </div>
                    <div className=" text-[#606670] text-base font-normal font-open-sans ">
                      Tranh chấp giữa cổ đông và các thành viên Hội đồng quản
                      trị hoặc những người giữ chức vụ được trực tiếp quản lý,
                      tham gia vận hành doanh nghiệp.
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-start items-start gap-3 flex">
                  <div className=" text-[#002740] text-sm font-semibold font-open-sans ">
                    Nguyên nhân dẫn đến tranh chấp quyền và nghĩa vụ giữa các cổ
                    đông trong công ty cổ phần
                  </div>
                  <div className=" h-12 flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Xuất phát từ rủi ro mua bán giao dịch chuyển nhượng tự do
                    </div>
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Xuất phát từ báo cáo tài chính không minh bạch
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-start items-start gap-3 flex">
                  <div className=" text-[#002740] text-sm font-semibold font-open-sans ">
                    Biện pháp giải quyết tranh chấp giữa các cổ đông trong công
                    ty cổ phần
                  </div>
                  <div className=" h-[104px] flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Giải quyết tranh chấp bằng thương lượng
                    </div>
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Giải quyết tranh chấp bằng phương thức hòa giải
                    </div>
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Giải quyết tranh chấp bằng khởi kiện tòa án nhân dân
                    </div>
                    <div className=" text-[#606670] text-sm font-normal font-open-sans ">
                      Giải quyết tranh chấp thông qua Trung tâm trọng tài
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex-col justify-start items-start gap-4 flex">
            <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
              Bài viết nổi bật
            </div>
            <div className=" flex-col justify-start items-start gap-8 flex">
              <div className=" h-96 flex-col justify-start items-start gap-8 flex">
                <div className=" p-3 bg-[#f0f0f0] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    style={{ width: "184px", height: "152px" }}
                    src={tinmoi1}
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className=" h-[152px] flex-col justify-start items-start gap-2 flex">
                      <div className="text-clamp-mobile text-[#002740] text-base font-bold font-space-grotesk leading-normal">
                        Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                      </div>
                      <div className="h-4 flex-col justify-center items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                          <div className="text-[#1cb0ad] text-[10px] font-normal font-open-sans leading-none">
                            Luật Hàng hải và Bảo hiểm Quốc tế
                          </div>
                        </div>
                      </div>
                      <div className="text-clamp text-clamp-mobile text-[#606670] text-xs font-normal font-open-sans leading-snug">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                      <div className="text-[#606670] text-xs font-semibold font-open-sans ">
                        3/8/2024
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-3 bg-[#f0f0f0] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    style={{ width: "184px", height: "152px" }}
                    src={tinmoi2}
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className=" h-[152px] flex-col justify-start items-start gap-2 flex">
                      <div className="text-clamp-mobile text-[#002740] text-base font-bold font-space-grotesk leading-normal">
                        Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                      </div>
                      <div className="h-4 flex-col justify-center items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                          <div className="text-[#1cb0ad] text-[10px] font-normal font-open-sans leading-none">
                            Tư vấn Pháp luật
                          </div>
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-xs font-normal font-open-sans leading-snug">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                      <div className="text-[#606670] text-xs font-semibold font-open-sans ">
                        3/8/2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-96 flex-col justify-start items-start gap-8 flex">
                <div className=" p-3 bg-[#f0f0f0] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    style={{ width: "184px", height: "152px" }}
                    src={tinmoi3}
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className=" h-[152px] flex-col justify-start items-start gap-2 flex">
                      <div className="text-clamp-mobile text-[#002740] text-base font-bold font-space-grotesk leading-normal">
                        Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                      </div>
                      <div className="h-4 flex-col justify-center items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                          <div className="text-[#1cb0ad] text-[10px] font-normal font-open-sans leading-none">
                            Luật Doanh nghiệp
                          </div>
                        </div>
                      </div>
                      <div className="text-clamp  text-[#606670] text-xs font-normal font-open-sans leading-snug">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                      <div className="text-[#606670] text-xs font-semibold font-open-sans ">
                        3/8/2024
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" p-3 bg-[#f0f0f0] rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <img
                    className="grow shrink basis-0  rounded-lg"
                    style={{ width: "184px", height: "152px" }}
                    src={tinmoi1}
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                    <div className=" h-[152px] flex-col justify-start items-start gap-2 flex">
                      <div className="text-clamp-mobile text-[#002740] text-base font-bold font-space-grotesk leading-normal">
                        Bảo vệ Quyền lợi Pháp lý với Apolo Lawyers
                      </div>
                      <div className="h-4 flex-col justify-center items-start gap-2 flex">
                        <div className="justify-start items-center gap-2 inline-flex">
                          <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                          <div className="text-[#1cb0ad] text-[10px] font-normal font-open-sans leading-none">
                            Luật Hình sự
                          </div>
                        </div>
                      </div>
                      <div className="text-clamp text-[#606670] text-xs font-normal font-open-sans leading-snug">
                        Trong bối cảnh pháp luật ngày càng phức tạp và thay đổi
                        nhanh chóng, việc có một đối tác pháp lý đáng tin cậy là
                        vô cùng quan trọng. Apolo Lawyers tự hào là công ty luật
                        uy tín, chuyên nghiệp, luôn sẵn sàng hỗ trợ khách hàng
                        trong mọi vấn đề pháp lý. Với đội ngũ luật sư giàu kinh
                        nghiệm và tận tâm, Apolo Lawyers đã và đang khẳng định
                        vị thế của mình trong lĩnh vực tư vấn và tranh tụng pháp
                        lý.
                      </div>
                      <div className="text-[#606670] text-xs font-semibold font-open-sans ">
                        3/8/2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-10 flex">
            <div className=" flex-col justify-start items-start gap-4 flex">
              <div className=" h-9 flex-col justify-start items-start gap-4 flex">
                <div className=" text-[#002740] text-[28px] font-bold font-space-grotesk leading-9">
                  Dịch vụ tại Apolo Laywers
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư riêng
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư tranh tụng
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư hình sự
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư dân sự
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư nhà đất
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư lao động
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư tư vấn hợp đồng
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư hôn nhân và gia đình
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư doanh nghiệp và đầu tư
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư tư vấn về xây dựng
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư hàng hải và bảo hiểm quốc tế
                </div>
                <div className="text-[#606670] text-base font-normal font-open-sans ">
                  Luật sư cho người nước ngoài tại Việt Nam
                </div>
                <div className="text-[#606670] text-base font-bold font-space-grotesk leading-normal">
                  Xem thêm...
                </div>
              </div>
            </div>
            <ButtonCustom
              title="Xem chi tiết"
              color="text-white"
              to="#48d1cc"
              from="#40e0d0"
            />
          </div>
        </div>
      </div>
      <div className="w-full bvlq  py-20 flex-col justify-start items-center gap-10 flex">
        <div className=" text-[#3c3c3c] text-start w-full mb-3 text-5xl text-32 font-bold font-space-grotesk">
          Bài viết liên quan
        </div>
        {check === true ? (
          <div className="w-[375px] h-max">
            <Slider {...settings}>
              {dataAllLuat.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-350 arflex grow shrink basis-0  p-6 bg-[#f0f0f0] rounded-2xl flex"
                  >
                    <img
                      className="img-if grow shrink basis-0  rounded-lg"
                      src={item.image}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className=" asdsrr flex-col justify-start items-start flex  gap-4 ">
                      <div className=" arflex  px-4 flex-col justify-start items-start gap-2 flex">
                        <div className="text-clamp-mobile1 text-[#002740] text-16 text-2xl font-bold font-space-grotesk ">
                          {item.title}
                        </div>
                        <div className="w-[344px] flex-date justify-start items-center gap-2 inline-flex">
                          <div className="text-[#606670] text-sm font-normal font-open-sans ">
                            {item.date}
                          </div>
                          <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                            {item.blog}
                          </div>
                        </div>
                        <div className=" text-clamp-mobile text-clamp text-clamp-mobile text-[#606670] text-sm font-normal font-open-sans ">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        ) : (
          <div
            className="flexarrr"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "30px",
            }}
          >
            {dataAllLuat?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[392px] w-350 p-6 bg-[#f0f0f0] rounded-2xl flex-col justify-start items-start gap-4 inline-flex"
                >
                  <img
                    className=" h-[286px] rounded-lg"
                    style={{ width: "100%", height: "286px" }}
                    src={item.image}
                  />
                  <div className=" h-[132px] px-4 flex-col justify-start items-start gap-2 flex">
                    <div className=" text-[#002740] text-2xl font-bold font-space-grotesk ">
                      {item.title}
                    </div>
                    <div className="text-clamp4 text-[#606670] text-sm font-normal font-open-sans ">
                      {item.description}
                    </div>
                  </div>
                  <div className=" px-4 justify-start items-center gap-2 inline-flex">
                    <div className="text-[#3c3c3c] text-sm font-normal font-open-sans ">
                      {item.date}
                    </div>
                    <div className="w-1 h-1 bg-[#1cb0ad] rounded-full" />
                    <div className="text-[#1cb0ad] text-xs font-semibold font-open-sans ">
                      {item.blog}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
