import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./SampleReducer";

const samplestore = configureStore({
    reducer: sampleReducer
});



export default samplestore;