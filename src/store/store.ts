import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./GameReducer";

const store = configureStore({
    reducer: gameReducer
});

export default store;