import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "Form",
  initialState: {
    name: "",
    age: "",
    College: "",
    major: "",
    organization: "",
    experience: "",
    skills: "",
    hobby: "",
    goals: "",
    result: [],
  },
  reducers: {
    updateStoreField: (state, action) => {
      state[action.payload.id] = action.payload.value;
    },
    updateResultField: (state, action) => {
      state.result = action.payload;
    },
    resetFormdata: (state) => {
      state.name = "";
      state.age = "";
      state.College = "";
      state.major = "";
      state.organization = "";
      state.experience = "";
      state.skills = "";
      state.hobby = "";
      state.goals = "";
      state.result = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateStoreField, resetFormdata, updateResultField } =
  counterSlice.actions;

export default counterSlice.reducer;
