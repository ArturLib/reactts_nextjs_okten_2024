import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterStateType = {
    xxx: number
};

const initialState: CounterStateType = {
    xxx: 0
};

export const counter1Slice = createSlice({
    name: "counter1",
    initialState: initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.xxx = state.xxx + action.payload;
        },
        decrement: (state) => {
            state.xxx = state.xxx - 1;
        },
        reset: (state) => {
            state.xxx = 0;
        }
    }
});

export const {increment, decrement, reset} = counter1Slice.actions;