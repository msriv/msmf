import { createSlice } from "@reduxjs/toolkit";
import { IFacility } from "../../utils/Interfaces";
import { getFacility } from "../thunk/facility";

const initialState: {
  facilities: IFacility[];
} = {
  facilities: [],
};

const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setFacilities: (state, action) => {
      return { ...state, facilities: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFacility.fulfilled, (state, action) => {
      return { ...state, facilities: action.payload };
    });
  },
});

export const { setFacilities } = facilitiesSlice.actions;
export default facilitiesSlice.reducer;
