import { Pagination } from 'antd'
import { useState } from 'react'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import { Switch } from 'antd';
import fb from '../../assets/icon/fb.png'
import ig from '../../assets/icon/ig.png'
import pintest from '../../assets/icon/pintest.png'
import linkin from '../../assets/icon/linkin.png'
import thread from '../../assets/icon/thread.png'
import x from '../../assets/icon/x.png'
import ytb from '../../assets/icon/ytb.png'
const onChangefb = (checked) => {
  console.log(`switch to ${checked}`);
};
export default function Social() {
  const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <>
      <div className="h-20 w-100 py-6 justify-start items-center inline-flex px-[40px]">
          <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">Social</div>
      </div>
      <div className="px-[40px]">
        <div className="h-[674px] w-100 px-8 flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-12 flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-1 inline-flex">
                <div className="self-stretch text-[#101828] text-xl font-bold font-space-grotesk leading-normal">Các ứng dụng đã được liên kết</div>
                <div className="self-stretch text-[#475467] text-sm font-normal font-open-sans leading-tight">Tăng tốc quy trình làm việc của bạn và kết nối công cụ bạn sử dụng hàng ngày.</div>
              </div>

              {/* đổi lại search */}
              <div className="h-12 w-[320px] flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-[#e7ecf1] justify-start items-center gap-2 inline-flex">
                  <div className="grow shrink basis-0 h-7 justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-[#606670] text-base font-normal font-['Open Sans'] leading-7">Tìm kiếm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start flex">
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={fb} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Facebook</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Tạo kết nối trực tiếp với người dùng qua Facebook Messenger từ website.</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={x} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">X (Twitter)</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Nâng cao khả năng tương tác và tiếp cận người dùng thông qua các hashtag chiến dịch.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={ig} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Instagram</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Kết nối với người dùng qua tích hợp đăng nhập bằng Instagram.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={thread} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Thread</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Tạo sự hiện diện trên nền tảng mạng xã hội mới với khả năng tích hợp đăng nhập và chia sẻ.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={pintest} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Pinterest</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Tăng khả năng khám phá sản phẩm và nội dung qua tính năng chia sẻ trực tiếp lên Pinterest.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={linkin} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Linkedin</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Mở rộng mạng lưới tuyển dụng bằng cách đăng tin tuyển dụng và nhận ứng viên trực tiếp từ LinkedIn.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
              <div className="self-stretch py-4 border-b border-[#dee4e7] justify-start items-center gap-4 inline-flex">
                <div className="grow shrink basis-0 h-[54px] justify-start items-center gap-4 flex">
                  <img className="w-12 h-12 rounded-lg" src={ytb} />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#606670] text-base font-semibold font-open-sans leading-loose">Youtube</div>
                    <div className="self-stretch text-[#606670] text-sm font-normal font-open-sans leading-tight">Kết nối người dùng với các video từ kênh của bạn qua widget YouTube hoặc playlist tích hợp trên website.</div>
                  </div>
                </div>
              <div className="justify-start items-center gap-4 flex">
                  <Switch defaultChecked onChange={onChangefb} />
                </div>
              </div>
                <div className="mt-2 mb-[100px]">
                  <ButtonCustom title='Thêm mới' to='#48d1cc' text="text-white text-base font-semibold font-open-sans leading-loose" from='#40e0d0'/>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="fixed bottom-0 pb-6 pt-3 bg-white" style={{borderTop:"1px solid #F2F4F7"}}>
        <div className="flex items-center justify-between w-[1019px] px-[40px]">
          <div className="">
          <div className="h-7 justify-start items-center gap-2 inline-flex">
            <div className="text-center text-[#606670] text-sm font-semibold font-open-sans leading-tight">Hiển thị</div>
            <div className="px-1.5 py-1 rounded-lg border border-[#dee4e7] justify-center items-center gap-0.5 flex">
              <div className="px-0.5 justify-center items-center flex">
                <div className="text-[#5d5d5d] text-sm font-semibold font-open-sans leading-tight">10</div>
              </div>
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-4 h-4 relative">
                </div>
              </div>
            </div>
            <div className="text-center text-[#606670] text-sm font-semibold font-open-sans leading-tight">trên 1,000 kết quả</div>
          </div>
          </div>
            <Pagination align='end' current={current} onChange={onChange} total={50} />
        </div>
      </div>
    </>
  )
}
