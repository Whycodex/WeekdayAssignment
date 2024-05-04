import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobDescription {
  jdUid: string;
  logoUrl: string;
  companyName: string;
  jobRole: string;
  location: string;
  minJdSalary: number;
  maxJdSalary: number;
  jobDetailsFromCompany: string;
}

interface DataState {
  jdList: JobDescription[];
  filteredList: JobDescription[];
}

const initialState: DataState = {
  jdList: [],
  filteredList: [],
};

const dataSlice = createSlice({
  name: "jdData",
  initialState,
  reducers: {
    setJdList: (state, action: PayloadAction<JobDescription[]>) => {
      state.jdList = action.payload;
    },
    setFilteredList: (state, action: PayloadAction<JobDescription[]>) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setJdList, setFilteredList } = dataSlice.actions;

export default dataSlice.reducer;
