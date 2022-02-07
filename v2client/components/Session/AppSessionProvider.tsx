import { SerializedError } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setSessionInfo } from "../../redux/reducers/session";
import { RootState, useAppDispatch } from "../../redux/store";
import {
  getTokenAsVisitor,
  validateVisitorToken,
} from "../../redux/thunk/session";
import { SessionStorageKeys } from "../../utils/Enums";
import { Storage } from "../../utils/Misc";

type AuthProviderProps = {
  children: JSX.Element;
};

const AppSessionProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  const { token } = useSelector((store: RootState) => ({
    token: store.sessionStore.token,
  }));

  useEffect(() => {
    const user_token = token || Storage.getItem(SessionStorageKeys.UserToken);
    if (user_token) {
      dispatch(validateVisitorToken())
        .unwrap()
        .then((originalPromiseResult: any) => {
          // handle result here
          if (!originalPromiseResult.ok) {
            dispatch(setSessionInfo({ token: null }));
            Storage.removeItem(SessionStorageKeys.UserToken);
          }
        })
        .catch((rejectedValueOrSerializedError: SerializedError | any) => {
          // handle error here
          console.error(rejectedValueOrSerializedError);
        });
    } else {
      dispatch(getTokenAsVisitor())
        .unwrap()
        .then((originalPromiseResult: any) => {
          // handle result here
          Storage.putItem(
            SessionStorageKeys.UserToken,
            originalPromiseResult.token
          );
        })
        .catch((rejectedValueOrSerializedError: SerializedError | any) => {
          // handle error here
          console.error(rejectedValueOrSerializedError);
        });
    }
  }, [token]);

  return <>{token ? children : "Loading..."}</>;
};

export default AppSessionProvider;
