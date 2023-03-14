import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    customer: {
      nev: "",
      cim: "",
    },
    trainer: "",
    plan: "",
  },
};

export const cartSlice = createSlice({
  name: "kartya",
  initialState,
  reducers: {
    customerAdd: (state, action) => {
      state.value.customer = action.payload;
    },
    trainerAdd: (state, action) => {
      state.value.trainer = action.payload;
    },
    planAdd: (state, action) => {
      state.value.plan = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { customerAdd, trainerAdd, planAdd } = cartSlice.actions;

export default cartSlice.reducer;
