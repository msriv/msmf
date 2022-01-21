import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { _getHeaders } from "../../utils/API";
import { IFacility } from "../../utils/Interfaces";

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

const createFacility = createAsyncThunk(
  "facilities/createFacility",
  async (facility: IFacility) => {
    try {
      const response = await axios.post("/api/facilities", facility, {
        headers: _getHeaders(),
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export { getFacility, createFacility };
