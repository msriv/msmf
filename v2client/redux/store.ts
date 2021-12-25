import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { LocalStorageKeys, Roles, SessionStorageKeys } from "../utils/Enums";
import { Storage } from "../utils/Misc";
import facilityReducer from "./reducers/facility";
import peopleReducer from "./reducers/people";
import sessionReducer, { setSessionInfo } from "./reducers/session";

export const store = configureStore({
  reducer: {
    peopleStore: peopleReducer,
    facilitiesStore: facilityReducer,
    sessionStore: sessionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const initStore = () => {
  store.dispatch(
    setSessionInfo({
      role: Roles.Visitor,
      token: Storage.getItem(SessionStorageKeys.UserToken),
      identity: Storage.getItem(LocalStorageKeys.UserIdentifier),
    })
  );
};
