import { useState } from 'react'
import PageMeta from '../../components/PageMeta/PageMeta'
import Logo from '../../components/Logo/Logo'
import { FaArrowLeft } from "react-icons/fa6";
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function ResetPass() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  const navigate = useNavigate()
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <>
        <PageMeta title='Hãy đặt lại mật khẩu ?' description='Hãy làm mới mật khẩu quản lý của bạn'/>
        <Logo/>
        <div className="w-1240">
            <div className="flex items-center justify-center mt-[150px] ">
                <div className="w-[567px] h-[350px] px-16 py-8 rounded-2xl flex-col justify-center items-center gap-10 inline-flex">
                    <div className="self-stretch h-[92px] flex-col justify-start items-start gap-3 flex">
                        <div className="self-stretch justify-center items-center inline-flex">
                        <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex cursor-pointer" onClick={()=>{
                                navigate('/quen-mat-khau')
                            }}>
                            <FaArrowLeft className='text-[#667085]'/>
                        </div>
                        <div className="text-center text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">Đặt lại mật khẩu</div>
                        <div className="grow shrink basis-0 h-6" />
                        </div>
                        <div className="self-stretch text-center text-[#606670] text-sm font-normal font-open-sans leading-tight">Tạo mật khẩu mới cho tài khoản của bạn</div>
                    </div>
                    <div className="self-stretch h-[154px] flex-col justify-center items-end gap-6 flex">
                    <div className="relative w-full">
                            <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-[#344054] text-sm font-semibold font-open-sans leading-tight">Mật khẩu mới</div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="floating_outlined"
                                    className="w-full block p-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer pr-10"
                                    placeholder=" "
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-[10%]"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full">
                            <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="text-[#344054] text-sm font-semibold font-open-sans leading-tight">Xác nhận mật khẩu mớI</div>
                                <input
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="floating_outlined"
                                    className="w-full block p-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer pr-10"
                                    placeholder=" "
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-[10%]"
                                    onClick={handleTogglePassword2}
                                >
                                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-xl justify-center items-center gap-3 inline-flex">
                            {/* <div className="text-white text-base font-semibold font-open-sans leading-loose">Đặt lại mật khẩu</div> */}
                            <ButtonCustom title='Đặt lại mật khẩu' to='#48d1cc' text="text-white" from='#40e0d0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}
