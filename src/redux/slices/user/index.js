import { createSlice } from "@reduxjs/toolkit";
import { loginUser, userSignup } from "./thunk";

// const user = JSON.parse(localStorage.getItem("user"));
// const USER_BASE_STATE = {
//     customer_name: null,
//     customer_email: null,
//     customer_password: null,
// }

// const USER_INITIAL_STATE = {
//     customer_name: user.customer_name || null,
//     customer_email: user.customer_email || null,
//     customer_password: user.customer_password || null
// }

const userSlice = createSlice({
    name: "userLogin",
    initialState: [],
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.isLoading = true;
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return { ...action.payload, isLoading: false };
        });

        builder.addCase(loginUser.rejected, (state, action) => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return { error: "404 Request is rejected" };
        });

        builder.addCase(userSignup.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(userSignup.fulfilled, (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action?.payload?.token));

            return { ...action.payload, isLoading: false };
        });
        builder.addCase(userSignup.rejected, (state, action) => {
            return { error: "kindly provide proper  information Hakim" };
        });
    },
});


export const userReducer = userSlice.reducer;