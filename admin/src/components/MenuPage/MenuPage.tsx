import { AiFillDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GoFile } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import Model from "../Model/Model";
import './MenuPage.css'
import { useLocation, useNavigate } from "react-router-dom";
export default function MenuPage() {
    const [toggleLanguage, setToggleLanguage] = useState(false);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.pathname)
    const [checkLogOut,setCheckLogOut] = useState(false)
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            setCheckLogOut(false);
          }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
      const handleCancel = () => {
        setCheckLogOut(false);
      };
  return (
    <>
      <div className="w-[244px] h-[100vh] border_li flex-col justify-between items-start inline-flex">
        <div className="self-stretch h-[432px] pt-6 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch h-6 pl-6 pr-5 flex-col justify-start items-start flex">
            <div className="text-[#40e0d0] text-xl font-bold font-space-grotesk leading-normal">Apolo Lawyers</div>
            </div>
            <div className="self-stretch h-[360px] flex-col justify-start items-start gap-1 flex">
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/dashboard')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <AiFillDashboard className={`${location.pathname ==='/admin/dashboard'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Dashboard</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/dashboard'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/noi-dung')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <GoFile className={`${location.pathname ==='/admin/noi-dung'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Nội dung</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/noi-dung'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/nguoi-dung')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <FaRegUser className={`${location.pathname ==='/admin/nguoi-dung'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Người dùng</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/nguoi-dung'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/social')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <TbWorld className={`${location.pathname ==='/admin/social'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Social</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/social'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/api')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <CiCloudOn className={`${location.pathname ==='/admin/api'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">API</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/api'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/website')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <IoSettingsOutline className={`${location.pathname ==='/admin/website'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Cấu hình website</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/website'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            <div className="cursor-pointer self-stretch h-12  rounded-lg justify-start items-center gap-2 inline-flex" onClick={()=>{navigate('/admin/plugin')}}>
                <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-lg justify-start items-center gap-3 flex">
                <div className=" justify-center items-center flex">
                    <div className=" relative">
                        <BsStars className={`${location.pathname ==='/admin/plugin'? "text-[#1cb0ad]":"text-[#667085]"} icon`}/>
                    </div>
                </div>
                <div className="text-[#667085] text-sm font-semibold font-open-sans leading-normal">Plugin</div>
                </div>
                <div className={`w-1 h-7 ${location.pathname ==='/admin/plugin'? "bg-[#1cb0ad]":""} rounded-tl rounded-bl`} />
            </div>
            </div>
        </div>
        <div className="fixed bottom-0">
            <div className="cursor-pointer self-stretch h-[158px] pb-6 flex-col justify-end items-center gap-4 flex">
                <div className="w-[151px] h-10 justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 px-4 py-1 bg-[#e7ecf1] rounded-tl-lg rounded-bl-lg flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-[#002740] text-sm font-semibold font-open-sans leading-normal">EN</div>
                    </div>
                    <div className="grow shrink basis-0 self-stretch px-4 pt-3 pb-2.5 bg-gradient-to-r from-[#40e0d0] to-[#48d1cc] rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-sm font-semibold font-open-sans leading-normal">VI</div>
                    </div>
                </div>
                <div className="self-stretch  pt-6 justify-start items-start gap-4 flex">
                    <div className="grow shrink basis-0 h-10 justify-start items-center gap-1 flex">
                        <div className="w-10 h-10 rounded-full justify-center items-center flex">
                        <div className="w-10 h-10 relative rounded-full border border-[#f2f4f7] overflow-hidden">
                            <img src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg" alt="" />
                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-[#101828] text-sm font-semibold font-inter leading-tight">Thị Thu</div>
                        <div className="text-[#667085] text-xs font-normal font-inter leading-[18px]">thu@apololawyers.com</div>
                        </div>
                    </div>
                    <div className="p-2 bg-white rounded-lg justify-center items-center flex cursor-pointer" onClick={()=>{
                        setCheckLogOut(true)
                    }}>
                        <div className="w-6 h-6 justify-center items-center flex">
                        <div className="w-6 h-6 relative">
                            <IoIosLogOut className="text-[28px]"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {
            checkLogOut && (
                <Model title="Bạn có chắc chắn muốn đăng xuất không?"  onCancel={handleCancel} />
            )
        }
    </>
  )
}
