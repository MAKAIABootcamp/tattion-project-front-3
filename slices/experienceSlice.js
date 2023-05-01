import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  play: false,
  hasScroll: false,
  end: false,
};

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setPlay: (state) => {
      state.play = !state.play;
    },
    setHasScroll: (state) => {
      state.hasScroll = !state.hasScroll;
    },
    // setEnd: (state, action) => {
    //   state.end = action.payload.value;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase("setEnd", (state, action) => {
      state.end = action.payload.value;
    });
  },
});

export const { setPlay, setHasScroll, setEnd } = experienceSlice.actions;

export default experienceSlice.reducer;
