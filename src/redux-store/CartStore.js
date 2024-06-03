import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import { useDeferredValue, useReducer } from "react";

const CartStore = configureStore({

    reducer:{
        cart : cartReducer,
        // user : userReducer,
    }

});

export default CartStore;