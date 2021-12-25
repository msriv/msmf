import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageKeys, Roles, SessionStorageKeys } from "../../utils/Enums";
import { ISessionInfo } from "../../utils/Interfaces";
import { Storage } from "../../utils/Misc";
import { getTokenAsVisitor, validateVisitorToken } from "../thunk/session";

const initialState: ISessionInfo = {
  role: null,
  token: null,
  email: null,
  identity: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTokenAsVisitor.fulfilled, (state, action) => {
      return {
        ...state,
        role: Roles.Visitor,
        token: action.payload.token,
        identity: Storage.getItem(LocalStorageKeys.UserIdentifier),
      };
    });
    builder.addCase(validateVisitorToken.fulfilled, (state, action) => {
      if (action.payload.ok) {
        return {
          ...state,
          role: Roles.Visitor,
          token: Storage.getItem(SessionStorageKeys.UserToken),
          identity: Storage.getItem(LocalStorageKeys.UserIdentifier),
        };
      } else {
        return {
          ...state,
          token: null,
        };
      }
    });
  },
});

export const { setSessionInfo } = sessionSlice.actions;
export default sessionSlice.reducer;
