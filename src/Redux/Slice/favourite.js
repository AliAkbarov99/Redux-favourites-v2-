import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name:'favourite',
    initialState:{
        coins:[]
    },
    reducers:{
        addFavourite:(state,action)=>{
            state.coins.push(action.payload)
        },
        deleteFavourite:(state,action)=>{
            state.coins.splice(state.coins.findIndex(coin=>coin.name===action.payload),1)
        }
    }
})


export const { addFavourite, deleteFavourite } = FavouriteSlice.actions
export default FavouriteSlice;