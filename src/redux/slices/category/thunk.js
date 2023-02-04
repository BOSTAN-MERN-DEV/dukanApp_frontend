import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryService,} from "../../../services/category";

const category = new CategoryService();
export const allCategory = createAsyncThunk("api/categorys", async (thunkApi)=>{
    const res = await category.getAllCategory();
     if(res.statusMessage !== "Success"){
        return thunkApi.rejectWithValue({
            statusCode: res.statusCode,
            statusMassage: res.statusMassage
        });
     }
     return res.data 
});


