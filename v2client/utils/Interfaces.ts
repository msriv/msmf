import { Roles } from "./Enums";

export interface IPerson {
  name: string;
  thumbnail: string;
  position: string;
  profile: string;
  about: string;
}

export interface ITeam {
  teamName: string;
  members: IPerson[];
}

export interface IFacility {
  uid: string;
  particulars: string;
  category: string;
  charges: string;
  duration: string;
  remarks: string;
  image: string;
}

export interface IAPIResponse {
  status: number;
  ok: boolean;
  message: string;
}

export interface ISessionInfo {
  role: Roles;
  token: string;
  email: string;
  identity: string;
}
