import { useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import ProfessionalBanner from '../../components/ProfessionalBanner/ProfessionalBanner'
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'
import Logo from '../../components/Logo/Logo';
import PageMeta from '../../components/PageMeta/PageMeta';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <PageMeta title='Đăng nhập trang quản lý Apolo Lawvers' description='Hãy vào và tham quan ' />
      <Logo/>
      <Row className='py-[100px] w-1240'>
        <Col md={6}>
          <div className="">
            <ProfessionalBanner title='Apolo Lawyers' />
            <div className="w-[439.96px] pt-4 text-center text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">Giải pháp pháp lý toàn diện cho mọi nhu cầu của bạn</div>
          </div>
        </Col>
        <Col md={6}>
        <div className="w-[567px] h-[440px] px-16 py-8 rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
          <div className="text-center text-[#002740] text-[32px] font-bold font-space-grotesk leading-10">Đăng nhập vào Apolo Lawyers</div>
          <div className="self-stretch h-[296px] flex-col justify-center items-end gap-6 flex">
            <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                <div className="text-[#344054] text-sm font-semibold font-open-sans leading-tight">Email</div>
                  <input
                    type="email"
                    id="floating_outlined"
                    className="w-full block p-2 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none   dark:focus:border-gray-900 focus:outline-none focus:ring-0 focus:border-gray-900 peer"
                    placeholder=" "
                  />
              </div>
            </div>
            <div className="relative w-full">
              <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch h-[74px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="text-[#344054] text-sm font-semibold font-open-sans leading-tight">Mật khẩu</div>
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
            <div className="rounded-lg justify-center items-center gap-1.5 inline-flex cursor-pointer">
              <div className="text-[#1cb0ad] text-sm font-semibold font-open-sans leading-tight" onClick={()=>{
                navigate('/quen-mat-khau')
              }}>Quên mật khẩu?</div>
            </div>
            <div className="rounded-xl justify-center items-center gap-3 inline-flex">
              <ButtonCustom title='Đăng nhập' to='#48d1cc' from='#40e0d0' text="text-white" />
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </>
  )
}
