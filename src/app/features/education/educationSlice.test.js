import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import reducer, { fetchEducations } from "./educationSlice";

describe("educationSlice", () => {
  describe("reducers", () => {
    const initialState = { educations: [], loading: false, error: "" };

    it("sets fetching true when fetchEducations is pending", () => {
      const action = { type: fetchEducations.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({ educations: [], loading: true, error: "" });
    });

    it("sets the educations when fetchEducations is fulfilled", () => {
      const action = {
        type: fetchEducations.fulfilled.type,
        payload: {
          id: 1,
          date: 2000,
          title: "Title 0",
          text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim",
        },
      };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        educations: {
          id: 1,
          date: 2000,
          title: "Title 0",
          text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim",
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
          case "educations/fetchEducations":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchEducations());
    expect(postSpy).toBeCalledWith("/api/educations");
    const state = store.getState();
    expect(state).toEqual("");
  });
});
