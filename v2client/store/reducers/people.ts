import { createSlice } from "@reduxjs/toolkit";
import { IPerson, ITeam } from "../../utils/Interfaces";

const initialState: {
  verticals: {
    [vertical: string]: ITeam[];
}
} = {
  verticals: {}
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPerson: (state, action) => {},
  },
});

export const { getPerson } = peopleSlice.actions;

export default peopleSlice.reducer;
