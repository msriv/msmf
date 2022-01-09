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
  message: any;
}

export interface ISessionInfo {
  role: Roles | null;
  token: string | null;
  email: string | null;
  identity: string | null;
}

export interface IToken {
  token: string;
}

export interface IRequestBody {
  [key: string]: string | number | IRequestBody;
}

export interface IAsset {
  uid: string;
  name: string;
  alt: string;
  width: number;
  height: number;
  uri: string;
  path: string;
  mime: string;
}
