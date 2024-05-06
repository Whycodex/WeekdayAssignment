import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a job description
export interface JobDescription {
  jdUid: string;
  logoUrl: string;
  companyName: string;
  jobRole: string;
  location: string;
  minExp: number;
  minJdSalary: number;
  maxJdSalary: number;
  jobDetailsFromCompany: string;
  tag: string;
}

// Define the structure of the data state
interface DataState {
  jdList: JobDescription[];
  filteredList: JobDescription[];
}

// Define the initial state of the data slice
const initialState: DataState = {
  jdList: [],
  filteredList: [],
};

// Create a data slice using Redux Toolkit
const dataSlice = createSlice({
  name: "jdData", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer to set the job description list
    setJdList: (state, action: PayloadAction<JobDescription[]>) => {
      state.jdList = action.payload;
    },
    // Reducer to set the filtered job description list
    setFilteredList: (state, action: PayloadAction<JobDescription[]>) => {
      state.filteredList = action.payload;
    },
  },
});

// Export the action creators
export const { setJdList, setFilteredList } = dataSlice.actions;

// Export the reducer function
export default dataSlice.reducer;
