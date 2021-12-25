import { v4 } from "uuid";
import { LocalStorageKeys } from "./Enums";

export const getDeviceIdentifier = (): string => {
  let identifier = null;
  identifier = Storage.getItem(LocalStorageKeys.UserIdentifier);
  if (!identifier) {
    identifier = v4();
    Storage.putItem(LocalStorageKeys.UserIdentifier, identifier);
  }
  return identifier;
};

export namespace Storage {
  export const getItem = (key: string) => {
    let data = null;
    if (localStorage) data = localStorage.getItem(key);
    if (!data) {
      if (sessionStorage) data = sessionStorage.getItem(key);
    }
    if (data && typeof data === "object") data = JSON.parse(data);
    return data;
  };
  export const putItem = (key: string, data: any, persist?: boolean) => {
    let dataToStore = data;
    if (persist) {
      if (localStorage) {
        if (typeof dataToStore === "object") {
          dataToStore = JSON.stringify(dataToStore);
        }
        localStorage.setItem(key, dataToStore);
        return true;
      }
      return false;
    } else {
      if (sessionStorage) {
        if (typeof dataToStore === "object") {
          dataToStore = JSON.stringify(dataToStore);
        }
        sessionStorage.setItem(key, dataToStore);
        return true;
      }
      return false;
    }
  };
  export const removeItem = (key: string, persist?: boolean) => {
    if (persist) {
      if (localStorage) {
        localStorage.removeItem(key);
        return true;
      }
      return false;
    } else {
      if (sessionStorage) {
        sessionStorage.removeItem(key);
        return true;
      }
      return false;
    }
  };
}
