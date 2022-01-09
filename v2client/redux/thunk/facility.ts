import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { _getHeaders } from "../../utils/API";

const getFacility = createAsyncThunk("facilities/getFacility", async (arg) => {
  try {
    const response = await axios.get("/api/facilities", {
      headers: _getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export { getFacility };
