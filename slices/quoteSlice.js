import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotation: {
    img: "",
    characteristics: {
      color: false,
      cover: false,
      firstTattoo: false,
      allergies: false,
      area: "",
      skinTone: "",
      size: {
        width: 0,
        height: 0,
      },
    },
    artist: {
      name: "",
      img: "",
    },
    date: "",
    location: "",
  },
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quotation = {
        ...state.quotation,
        [action.payload.prop]: action.payload.data,
      };
    },
  },
});

export const { setQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
