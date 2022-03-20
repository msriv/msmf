import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createRoute, ServerRoutes, _getHeaders } from "../../utils/API";

const fetchAssets = createAsyncThunk("assets/getAssets", async (arg) => {
  try {
    const response = await axios.get(
      createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AssetRoutes.Assets),
      {
        headers: _getHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const createAssets = createAsyncThunk(
  "assets/createAssets",
  async (formData: FormData) => {
    try {
      const response = await axios.post(
        createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AssetRoutes.Upload),
        formData,
        {
          headers: _getHeaders(),
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export { fetchAssets, createAssets };
