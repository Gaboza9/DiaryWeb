import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../redux/text';
export const store = configureStore({
reducer: {
    text: textReducer
},
});