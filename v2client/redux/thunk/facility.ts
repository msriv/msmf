import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getFacility = createAsyncThunk(
  "facilities/getFacility",
  async (thunkAPI) => {
    const response = await axios.get("/api/facilities");
    return response.data;
  }
);

export { getFacility };
