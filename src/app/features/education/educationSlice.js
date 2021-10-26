import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { EDUCATION_API } from "../../../utils/constants";

const initialState = {
  educations: [],
  loading: false,
  error: "",
};

// Create actions with createAsyncThunk
export const fetchEducations = createAsyncThunk(
  "educations/fetchEducations",
  async () => {
    try {
      const res = await axios.get(EDUCATION_API);
      return res.data.educations;
    } catch (error) {}
  }
);

// Then, handle actions in reducers:
export const educationSlice = createSlice({
  name: "educations",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEducations.fulfilled]: (state, { payload }) => {
      state.educations = payload;
      state.loading = false;
    },
    [fetchEducations.pending]: (state) => {
      state.loading = true;
    },
    [fetchEducations.rejected]: (state, { payload, error }) => {
      state.loading = false;
      state.educations = payload;
      state.error = error;
    },
  },
});

export default educationSlice.reducer;
