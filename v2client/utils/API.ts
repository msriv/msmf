import axios, { Method } from "axios";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { setSessionInfo } from "../redux/reducers/session";
import { store } from "../redux/store";
import { SessionStorageKeys } from "./Enums";
import { IRequestBody } from "./Interfaces";
import { cors } from "./Middlewares";
import { getDeviceIdentifier, Storage } from "./Misc";

export namespace ServerRoutes {
  export const BASE_ROUTE = process.env.SERVER || "http://server:8000/v1";
  export enum AuthRoutes {
    GetToken = "/auth/token",
    Validate = "/auth/validate",
  }

  export enum FacilitiesRoutes {
    Facilities = "/facilities",
    FacilitiesById = "/facilities/:id",
  }
}
export namespace ClientRoutes {}

export const createRoute = (
  baseRoute: string,
  endpoint: ServerRoutes.AuthRoutes | ServerRoutes.FacilitiesRoutes
) => {
  return baseRoute + endpoint;
};

const validate = async (token: string) => {
  try {
    const response = await fetch(
      createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AuthRoutes.Validate),
      {
        method: "POST",
        body: token,
      }
    );
    const data = await response.json();
    console.log(data);
    return data.ok;
  } catch (error) {
    console.error(error);
  }
};

export const _getHeaders = () => {
  const token =
    store.getState().sessionStore.token ||
    Storage.getItem(SessionStorageKeys.UserToken);

  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    ...(token ? { Authorization: "Bearer " + token } : {}),
  };
};

export const _getHeadersServer = (req: NextApiRequest) => {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: req.headers.authorization!,
  };
};
