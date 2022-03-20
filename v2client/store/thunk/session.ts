import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createRoute, ServerRoutes, _getHeaders } from "../../utils/API";
import { SessionStorageKeys } from "../../utils/Enums";
import { getDeviceIdentifier, Storage } from "../../utils/Misc";

const getTokenAsVisitor = createAsyncThunk(
  "session/getVisitorToken",
  async (thunkAPI) => {
    try {
      const response = await axios.post(
        createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AuthRoutes.GetToken),
        {
          user_id: getDeviceIdentifier(),
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const validateVisitorToken = createAsyncThunk(
  "session/validateVisitorToken",
  async () => {
    try {
      const response = await axios.get(
        createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AuthRoutes.Validate),
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

export { getTokenAsVisitor, validateVisitorToken };
