import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SKILLS_API } from "../../../utils/constants";

const initialState = {
  skills: [],
  loading: false,
  error: "",
};

// Create actions with createAsyncThunk
export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
  try {
    const res = await axios.get(SKILLS_API);
    return res.data.skills;
  } catch (error) {}
});

export const postSkills = createAsyncThunk(
  "skills/postSkills",
  async (skill) => {
    try {
      await axios.post(SKILLS_API, skill);
    } catch (error) {
      console.log(error);
    }
  }
);

// Then, handle actions in reducers:
export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSkills.fulfilled]: (state, { payload }) => {
      state.skills = payload;
      state.loading = false;
    },
    [fetchSkills.pending]: (state) => {
      state.loading = true;
    },
    [fetchSkills.rejected]: (state, { payload, error }) => {
      state.loading = false;
      state.skills = payload;
      state.error = error;
    },

    // post actions of skills
    [postSkills.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [postSkills.pending]: (state) => {
      state.loading = true;
    },
    [postSkills.rejected]: (state, { payload, error }) => {
      state.loading = false;
      state.skills = payload;
      state.error = error;
    },
  },
});

export default skillsSlice.reducer;
