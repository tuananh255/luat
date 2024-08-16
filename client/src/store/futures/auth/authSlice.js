import { createSlice ,createAsyncThunk,createAction} from '@reduxjs/toolkit'
import authService from './authService'
// Khởi tạo giá trị ban đầu của user:
// Nếu giá trị tồn tại (khác null hoặc undefined), thì JSON.parse được sử dụng để chuyển đổi chuỗi JSON thành đối tượng JavaScript
const getUserFromsessionStorage = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null
// Khởi tạo trạng thái ban đầu cho Redux store:
const initialState = {
    user:getUserFromsessionStorage,
    isError : false,
    isLoading:false,
    isSuccess:false,
    message:""
}

//Định nghĩa action login bằng createAsyncThunk:
export const login = createAsyncThunk('auth/login-auth',async(user,thunkAPI)=>{
    try {
        return await authService.login(user) // gọi tới login trong authservice
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const resetState = createAction("Reset_all");

export const authSlice = createSlice({
    name:"auth", 
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.user= action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.message = "Rejected"
        })
        .addCase(resetState, () => initialState);
        
    }
})

export default authSlice.reducer