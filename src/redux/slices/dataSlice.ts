import { createSlice } from "@reduxjs/toolkit";

const dataSlice:any = createSlice({
    name: "jdData",
    initialState: {
        jdList: [],
    },
    reducers: {
        setJdList: (state, action) => {
            state.jdList = action.payload;
        },
    },
});

export const { setJdList } = dataSlice.actions;

export default dataSlice.reducer;

