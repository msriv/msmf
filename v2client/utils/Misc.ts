import { v4 } from "uuid";

export const generateDeviceIdentifier = (): string => {
  const identifier = v4();
  if (localStorage) localStorage.setItem("user_identifier", identifier);
  return identifier;
};
