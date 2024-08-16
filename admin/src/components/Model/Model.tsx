import { useEffect } from "react";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

export default function Model({title,type,onCancel }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onCancel(); // Gọi hàm onCancel khi nhấn phím Esc
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [onCancel]);
  return (
    <>
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center"
      style={{ background: "rgba(0,0,0,0.5)",zIndex:99999 }}
    >
      <div className="h-[424px] px-6 pt-10 pb-12 bg-[#f3f3f3] rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
        <div className="h-[248px] flex-col justify-start items-center gap-10 flex">
            <div className="w-[172px] h-32 relative">
            <div className="w-32 h-32 left-[22px] top-0 absolute bg-[#eaecf0] rounded-full" />
            <div className="w-3 h-3 left-[14px] top-[14px] absolute bg-[#f2f4f7] rounded-full" />
            <div className="w-4 h-4 left-[9px] top-[104px] absolute bg-[#f2f4f7] rounded-full" />
            <div className="w-4 h-4 left-[152px] top-[28px] absolute bg-[#f2f4f7] rounded-full" />
            <div className="w-2.5 h-2.5 left-[144px] top-[4px] absolute bg-[#f2f4f7] rounded-full" />
            <div className="w-[140px] h-20 left-[16px] top-[16px] absolute shadow">
                <div className="w-16 h-16 left-0 top-[16px] absolute bg-gradient-to-br from-[#cfd4dc] to-white rounded-full" />
                <div className="w-20 h-20 left-[32px] top-0 absolute bg-gradient-to-br from-[#cfd4dc] to-white rounded-full" />
                <div className="w-14 h-14 left-[84px] top-[24px] absolute bg-gradient-to-br from-[#cfd4dc] to-white rounded-full" />
            </div>
            <div className="w-14 h-14 p-3.5 left-[58px] top-[60px] absolute bg-[#344053]/40 rounded-full justify-center items-center inline-flex">
                <div className="w-7 h-7 p-[3.50px] justify-center items-center inline-flex" />
            </div>
            </div>
            <div className="self-stretch h-20 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch text-center text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">
                {title}
            </div>
            </div>
        </div>
        <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-12 py-3 rounded-xl border border-[#dee4e7] justify-center items-center gap-3 flex">
                <ButtonCustom title="Huỷ" text="text-[#002740]" onClick={onCancel} />
            </div>
            <div className="grow shrink basis-0 h-12 px-10 py-3  rounded-xl justify-center items-center gap-3 flex">
                <ButtonCustom title="Đăng xuất" text="text-[#002740]" to="#48d1cc" from="#48d1cc " />
            </div>
        </div>
        </div>
    </div>
    </>
  )
}
