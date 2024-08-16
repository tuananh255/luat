import axios from 'axios'
import {base_url} from '../../../utils/base_url'
import {config} from '../../../utils/axiosconfig'
import { toast } from 'react-toastify'
const login = async(userData)=>{
    const res = await axios.post(`${base_url}auth/login-auth`,userData)
    const data = res.data
    console.log(data)
    if(data?.user?.token===null)  alert(data?.message || "Đăng nhập thất bại")
    if(data?.user?.token !==null){
        sessionStorage.setItem('user',JSON.stringify(data))
        // toast.success('Đăng nhập thành công')
        alert(data?.message)
    }
    return data
}


const authService ={
    login,
}

export default authService