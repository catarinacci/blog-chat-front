import { configureStore } from "@reduxjs/toolkit";
import {miSlice} from './miSlice'

export default configureStore({
    reducer:{
        showModalRegister: miSlice.reducer
    }
})