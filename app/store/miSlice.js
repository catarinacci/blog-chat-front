import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
    name:'showModalRegister',
    initialState:{value:false},
    reducers:{
        openModalRegister:(state, action)=>{
            state.value = action.payload
        }
    }
})

export const {openModalRegister} = miSlice.actions