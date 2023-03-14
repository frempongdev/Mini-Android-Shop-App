import { configureStore } from "@reduxjs/toolkit";
import cartRuducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        cart : cartRuducer,
        modal : modalReducer,
    }, 
})