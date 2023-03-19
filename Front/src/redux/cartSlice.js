import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        customer: {
            nev: '',
            email: '',
            isLoggedIn: false,
        },
        trainer: '',
        plan: '',
    },
};

export const cartSlice = createSlice({
    name: 'kartya',
    initialState,
    reducers: {
        customerAdd: (state, action) => {
            state.value.customer = action.payload;
        },
        trainerAdd: (state, action) => {
            state.value.trainer = action.payload;
        },
        trainerDelete: (state) => {
            state.value.trainer = '';
        },
        planAdd: (state, action) => {
            state.value.plan = action.payload;
        },
        planDelete: (state, action) => {
            state.value.plan = '';
        },
        isLoggedInChange: (state) => {
            state.value.customer.isLoggedIn = !state.value.customer.isLoggedIn;
        },
        customerDelete: (state) => {
            state.value.customer.nev = '';
            state.value.customer.email = '';
            state.value.customer.isLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    customerAdd,
    trainerAdd,
    trainerDelete,
    planAdd,
    planDelete,
    isLoggedInChange,
    customerDelete,
} = cartSlice.actions;

export default cartSlice.reducer;
