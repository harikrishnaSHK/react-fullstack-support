import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


 import authService from "../auth/authService"

 const user2 = JSON.parse(localStorage.getItem('user'))


const initialState = {

user: user2 ? user2 : {},
isError:false,
isSucces:false,
isLoading:false,
message:""

}

export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{


try{

return await authService.register(user)

}
catch(error){
const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

return thunkAPI.rejectWithValue(message)


}



})

export const login  = createAsyncThunk('auth/login',async(user,thunkAPI)=>{

  try{

    return await authService.login(user)
  }
  catch(error){

    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)

  }


})

export const logout = createAsyncThunk('auth,logout',async(user,thunkAPI)=>{

await authService.logout()

})



export const authSlice = createSlice({
name:'auth',
initialState,
reducers:{

reset:(state)=>{

state.isError=false
state.isSucces=false
state.isLoading=false
state.message =""
}


},
extraReducers :(builder)=>{

builder.addCase(register.pending,(state)=>{

  state.isLoading= true
  state.isSucces =false
  state.isError=false
  state.user = null



})

builder.addCase(register.fulfilled,(state,action)=>{

state.user =action.payload
state.isSucces =true
state.isLoading=false
state.isError=false
state.message="user registered sucessfully"

})

builder.addCase(register.rejected,(state,action)=>{

state.user =null
state.message=action.payload
state.isError=true
state.isSucces=false
state.isLoading=false


})

builder.addCase(login.pending,(state)=>{
state.isLoading=true
state.isSucces =false
state.isError=false
state.message=""
state.user=null

})

builder.addCase(login.fulfilled,(state,action)=>{
state.isError=false
state.isLoading=false
state.message ="sucessfully logged in"
state.isSucces = true
state.user = action.payload

})
builder.addCase(login.rejected,(state,action)=>{

state.isError =true
state.message =action.payload
state.isSucces =false
state.isLoading=false
state.user = null

})
builder.addCase(logout.fulfilled,(state)=>{

  state.user =null
  state.isSucces =false
state.isLoading=false
state.isError =false
state.message=""
})


}

})

export default authSlice.reducer
export const{reset} =authSlice.actions
