import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
name: "text",
initialState: { value: "기본값", },
reducers: {
setText: state => state.value = state,
},
});
export const { setText } = textSlice.actions;
export default textSlice.reducer;