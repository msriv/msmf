import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { _getHeaders } from "../../utils/API";

const fetchAssets = createAsyncThunk("assets/getAssets", async (arg) => {
  try {
    const response = await axios.get("/api/assets", {
      headers: _getHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const createAssets = createAsyncThunk(
  "assets/createAssets",
  async (formData: FormData) => {
    try {
      const response = await axios.post("/api/assets/upload", formData, {
        headers: _getHeaders(),
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export { fetchAssets, createAssets };
