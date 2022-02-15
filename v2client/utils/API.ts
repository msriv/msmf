import { NextApiRequest } from "next";
import { store } from "../redux/store";
import { SessionStorageKeys } from "./Enums";
import { Storage } from "./Misc";

export namespace ServerRoutes {
  export const BASE_ROUTE =
    process.env.NEXT_PUBLIC_SERVER || "http://server:8000/v1";
  export enum AuthRoutes {
    GetToken = "/auth/token",
    Validate = "/auth/validate",
  }

  export enum FacilitiesRoutes {
    Facilities = "/facilities",
    FacilitiesById = "/facilities/:id",
  }

  export enum AssetRoutes {
    Assets = "/assets",
    Upload = "/assets/upload",
  }

  export enum IncubationRoutes {
    Incubatees = "/incubation/incubatees",
  }
}
export namespace ClientRoutes {
  export const BASE_ROUTE =
    process.env.NEXT_PUBLIC_SERVER || "http://server:8000/v1";
  // export enum AssetRoutes {
  //   GetAsset = "/auth/token",
  //   Validate = "/auth/validate",
  // }
}

export const createRoute = (
  baseRoute: string,
  endpoint:
    | ServerRoutes.AuthRoutes
    | ServerRoutes.FacilitiesRoutes
    | ServerRoutes.AssetRoutes
    | ServerRoutes.IncubationRoutes
) => {
  return baseRoute + endpoint;
};

export const _getHeaders = () => {
  const token =
    store.getState().sessionStore.token ||
    Storage.getItem(SessionStorageKeys.UserToken);

  return {
    "Access-Control-Allow-Origin": "*",
    ...(token ? { Authorization: "Bearer " + token } : {}),
  };
};

export const _getHeadersServer = (req: NextApiRequest) => {
  return {
    "Access-Control-Allow-Origin": "*",
    Authorization: req.headers.authorization!,
    "Content-Type": req.headers["content-type"] || "application/json",
  };
};
