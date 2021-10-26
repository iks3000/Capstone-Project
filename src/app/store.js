import { configureStore } from "@reduxjs/toolkit";
import educationsReducer from "./features/education/educationSlice";
import skillsReducer from "./features/skills/skillsSlice";

export const store = configureStore({
    reducer: {
        educations: educationsReducer,
        skills: skillsReducer,
    },
});