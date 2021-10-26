import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import reducer, { fetchSkills, postSkills } from "./skillsSlice";

describe("skillsSlice", () => {
  describe("reducers", () => {
    const initialState = { skills: [], loading: false, error: "" };

    it("sets fetching true when fetchSkills is pending", () => {
      const action = { type: fetchSkills.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ skills: [], loading: true, error: "" });
    });

    it("sets the skills when fetchSkills is fulfilled", () => {
      const action = {
        type: fetchSkills.fulfilled.type,
        payload: {
          id: 1,
          name: "React",
          range: 80,
        },
      };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        skills: {
          id: 1,
          name: "React",
          range: 80,
        },

        loading: false,
        error: "",
      });
    });
  });
});

describe("asyncThunkGet", () => {
  it("should pass", async () => {
    const postSpy = jest.spyOn(axios, "get").mockResolvedValueOnce();
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "skills/fetchSkills":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchSkills());
    expect(postSpy).toBeCalledWith("/api/skills");
    const state = store.getState();
    expect(state).toEqual("");
  });
});

describe("asyncThunkPost", () => {
  it("should pass", async (data = {
    name: "React",
    range: 80,
  }) => {
    const postSpy = jest
      .spyOn(axios, "post")
      .mockResolvedValueOnce({ name: "React", range: 80 });
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "skills/postSkills":
          default:
            return state;
        }
      },
    });
    await store.dispatch(postSkills(data));
    expect(postSpy).toBeCalledWith("/api/skills", data);
    const state = store.getState();
    expect(state).toEqual("");
  });
});
