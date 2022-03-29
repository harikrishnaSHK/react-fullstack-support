import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from "./ticketService";
const initialState ={

tickets:[],
ticket:{},
isError:false,
isSucess:false,
isLoading:false,
message:""

}


export const createTicket = createAsyncThunk('tickets/create',async(ticketData,thunkAPI)=>{

try{
const user = thunkAPI.getState().auth.user
return await ticketService.createTicket(ticketData,user.token)



}
catch(error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
    return thunkAPI.rejectWithValue(message)
    
    
    }


})


export const getTickets = createAsyncThunk('tickets/getAllTickets',async(_,thunkAPI)=>{

try{
  
const user = thunkAPI.getState().auth.user
 console.log(user)

return await ticketService.getAllTickets(user.token)

}
catch(error){
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    
    return thunkAPI.rejectWithValue(message)
    
    
    }

})

export const getTicket = createAsyncThunk('tickets/getTicket',async(ticketId,thunkAPI)=>{
    try{
   
        const user = thunkAPI.getState().auth.user

        return await ticketService.getTicket(ticketId,user.token)


    }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
        
        
        }
    
})

export const closeTicket = createAsyncThunk('tickets/closeTicket',async(ticketId,thunkAPI)=>{

  try{
   const user = thunkAPI.getState().auth.user

   return await ticketService.closeTicket(ticketId,user.token)


  }
    catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)
        
        
        }


})


export const ticketSlice = createSlice({

name:'ticket',
initialState,
reducers:{
    reset:(state)=>{state=initialState}
},
extraReducers:(builder)=>{

builder.addCase(createTicket.pending,state=>{
    state.isLoading= true
})
.addCase(createTicket.fulfilled,(state,action)=>{

    state.isSucess=true
    state.isError =false
    state.isLoading =false
})
.addCase(createTicket.rejected,(state,action)=>{
  state.message = action.payload
  state.isError =true
  state.isLoading=false
  state.isSucess =false

 


})

.addCase(getTickets.pending,state=>{
    state.isLoading= true
})
.addCase(getTickets.fulfilled,(state,action)=>{

    state.isSucess=true
    state.isError =false
    state.isLoading =false
    state.tickets =action.payload
})
.addCase(getTickets.rejected,(state,action)=>{
  state.message = action.payload
  state.isError =true
  state.isLoading=false
  state.isSucess =false
})

.addCase(getTicket.pending,state=>{
    state.isLoading= true
})
.addCase(getTicket.fulfilled,(state,action)=>{

    state.isSucess=true
    state.isError =false
    state.isLoading =false
    state.ticket =action.payload
})
.addCase(getTicket.rejected,(state,action)=>{
  state.message = action.payload
  state.isError =true
  state.isLoading=false
  state.isSucess =false
})
.addCase(closeTicket.pending,state=>{
    state.isLoading= true
})
.addCase(closeTicket.fulfilled,(state,action)=>{

    state.isSucess=true
    state.isError =false
    state.isLoading =false
 
})
.addCase(closeTicket.rejected,(state,action)=>{
  state.message = action.payload
  state.isError =true
  state.isLoading=false
  state.isSucess =false
})

}



})


export const {reset} =ticketSlice.actions
export default ticketSlice.reducer

//function reducer(state={},action){}