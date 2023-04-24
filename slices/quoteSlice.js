import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    img: "",
    characteristics: {
      color: false,
      cover: false,
      firstTattoo: false,
      allergies: false,
      area: "",
      skinTone: "",
      size: {
        width: "",
        height: "",
      },
    },
    artist: {
      name: "",
      img: "",
    },
  },
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => {
      //   state.data = {...state, action.action.payload};
    },
  },
});
