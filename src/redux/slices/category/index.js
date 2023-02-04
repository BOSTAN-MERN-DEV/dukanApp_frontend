import { createSlice } from "@reduxjs/toolkit"
import { allCategory } from "./thunk"

const INITIAL_STATE ={
    categorys: [],
    loadingCategory: false,
}

const categorySlice = createSlice({
    initialState: INITIAL_STATE,
    name : "category",
    reducers: {},

    extraReducers: builder => {
        // GET ALL CATEGORYS
        builder.addCase(allCategory.pending, state =>{
            state.loadingCategory = true;
        });

        builder.addCase(allCategory.fulfilled, (state, action)=>{
            return ({categorys: action.payload, loadingCategory: false });
        });

        builder.addCase(allCategory.rejected, (state, action)=>{
            return INITIAL_STATE;
        });

         
    }
});


export { allCategory} from "./thunk";
export const categoryReducer = categorySlice.reducer;