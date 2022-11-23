import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
name: "text",
initialState: { value: localStorage.getItem("text"), },
reducers: {
   // setText: () => state.value = state,
},
});
export const { setText } = textSlice.actions;
export default textSlice.reducer;
