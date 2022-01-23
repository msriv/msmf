import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createRoute, ServerRoutes, _getHeaders } from "../../utils/API";
import { IFacility } from "../../utils/Interfaces";

const getFacility = createAsyncThunk("facilities/getFacility", async (arg) => {
  try {
    const response = await axios.get(
      createRoute(
        ServerRoutes.BASE_ROUTE,
        ServerRoutes.FacilitiesRoutes.Facilities
      ),
      {
        headers: _getHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const createFacility = createAsyncThunk(
  "facilities/createFacility",
  async (facility: IFacility) => {
    try {
      const response = await axios.post(
        createRoute(
          ServerRoutes.BASE_ROUTE,
          ServerRoutes.FacilitiesRoutes.Facilities
        ),
        facility,
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

export { getFacility, createFacility };
