import { createSlice } from "@reduxjs/toolkit";
import { IAsset } from "../../utils/Interfaces";
import { fetchAssets, createAssets } from "../thunk/assets";

const initialState: {
  isLoading: boolean;
  assets: IAsset[];
} = {
  isLoading: false,
  assets: [],
};

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    storeAssetLocally: (state, action) => {
      return { ...state, assets: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchAssets.fulfilled, (state, action) => {
      return { ...state, isLoading: false, assets: action.payload };
    });
    builder.addCase(createAssets.pending, (state, action) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(createAssets.fulfilled, (state, action) => {
      return { ...state, isLoading: false, assets: action.payload };
    });
  },
});

export const { storeAssetLocally } = assetsSlice.actions;
export default assetsSlice.reducer;
