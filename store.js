import { configureStore } from "@reduxjs/toolkit";
import experienceReducer from "./slices/experienceSlice";
import quoteReducer from "./slices/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    experience: experienceReducer,
  },
});
