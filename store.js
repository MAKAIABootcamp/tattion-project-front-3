import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slices/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
