import { Tabs } from 'antd';
import './Website.css'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Thông tin công ty',
    children: (
      <>
        <div className="h-[548px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-[548px] px-8 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch rounded-xl justify-start items-start inline-flex">
              <div className="self-stretch flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-4 py-3 bg-white justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-[#606670] text-xs font-semibold font-open-sans leading-tight">Tên trường</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Tên công ty</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Trụ sở chính</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Chi nhánh 1</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Chi nhánh 2</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Email liên hệ</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Mã số thuế</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-4 py-3 bg-white justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-[#606670] text-xs font-semibold font-open-sans leading-tight">Giá trị</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-[#606670] text-sm font-normal font-open-sans leading-tight">Apolo Lawyers</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Địa chỉ:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> Tầng 2,108 Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1, TP Hồ Chí Minh</span></div>
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Số điện thoại:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> (028) 66.701.709 - 0903.419.479</span></div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Địa chỉ:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7">  Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh</span></div>
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Số điện thoại:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> (028) 66.701.709 - 0903.419.479</span></div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-1 inline-flex">
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Địa chỉ:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7">  Tòa nhà PaxSky, 51 Nguyễn Cư Trinh, Quận 1, TP. Hồ Chí Minh</span></div>
                    <div className="self-stretch"><span className="text-[#002740] text-base font-bold font-open-sans leading-7">Số điện thoại:</span><span className="text-[#606670] text-base font-normal font-open-sans leading-7"> (028) 66.701.709 - 0903.419.479</span></div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-[#606670] text-base font-normal font-open-sans leading-7">contact@apolo.vn</div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-[#606670] text-sm font-normal font-open-sans leading-tight">0123456789</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <ButtonCustom title='Thêm mới' text="text-white" to='#48d1cc' from='#40e0d0' />
          </div>
        </div>
      </>
    ),
  },
  {
    key: '2',
    label: 'Cài đặt website',
    children: (
      <>
        <div className="h-[296px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-[296px] px-8 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch rounded-xl justify-start items-start inline-flex">
              <div className="self-stretch flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-4 py-3 bg-white justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-[#606670] text-xs font-semibold font-open-sans leading-tight">Tên trường</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Logo công ty</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Favicon</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex">
                    <div className="text-[#606670] text-sm font-normal font-open-sans leading-tight">Ngôn ngữ mặc định</div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch px-4 py-3 bg-white justify-start items-center gap-3 inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-[#606670] text-xs font-semibold font-open-sans leading-tight">Giá trị</div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-start items-center gap-2.5 flex">
                    <div className="px-2 py-1 bg-gray-50 rounded-md border border-[#eaecf0] justify-start items-center gap-1.5 flex">
                      <div className="w-4 h-4 relative">
                        <div className="w-[12.80px] h-4 left-[1.60px] top-0 absolute" />
                      </div>
                      <div className="text-[#344054] text-sm font-medium font-['Inter'] leading-tight">img1231111</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 bg-[#f8f9fb] border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-[#606670] text-sm font-normal font-open-sans leading-tight">favicon_apolo.ico</div>
                </div>
                <div className="self-stretch h-[84px] px-4 py-3 border-b border-[#eaecf0] justify-start items-center inline-flex">
                  <div className="grow shrink basis-0 text-[#606670] text-sm font-normal font-open-sans leading-tight">Tiếng Việt</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <ButtonCustom title='Thêm mới' text="text-white" to='#48d1cc' from='#40e0d0' />
          </div>
        </div>
      </>
    ),
  },
];
export default function Website() {
  return (
    <div className='px-[40px]'>
      <div className="h-14 pt-6 justify-start items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-1.5 inline-flex">
          <div className="self-stretch text-[#002740] text-2xl font-bold font-space-grotesk leading-loose">Cấu hình website</div>
        </div>
      </div>
      <div className="mt-3">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}
