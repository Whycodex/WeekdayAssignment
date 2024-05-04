import { createSlice } from "@reduxjs/toolkit";

const dataSlice: any = createSlice({
  name: "jdData",
  initialState: {
    jdList: [],
    filteredList: [],
  },
  reducers: {
    setJdList: (state, action) => {
      state.jdList = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setJdList, setFilteredList } = dataSlice.actions;

export default dataSlice.reducer;
