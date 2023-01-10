import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice from "./Slice/favourite";

export const store = configureStore({
    reducer:{
        favourite: FavouriteSlice.reducer
    }
})