import { ReactNode } from "react";
import { BookingDuration, FacilityCategories, Roles } from "./Enums";

export interface IPerson {
  name: string;
  image?: string;
  position?: string;
  linkedInProfile?: string;
  about?: string; 
  address?:string;
}
export interface ITeam {
  teamName: string;
  members: IPerson[];
}

export interface IFacility {
  uid?: string;
  particulars: string;
  category: FacilityCategories;
  charges: string;
  duration: BookingDuration;
  remarks: string;
  image?: string;
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
  id: string;
  fileName: string;
  originalName: string;
  mimeType: string;
  path: string;
  uri: string;
  createdAt: string;
  updateAt: string;
}

export interface ITestimonial {
  name: string;
  company: string;
  avatar: string;
  testimonialContent: string;
}

export interface IPortfolios {
  logo?: string;
  incubateeName: string;
  companyLink?: string;
  about?: string | ReactNode;
}

export interface INews {
  title: string;
  image?: string;
  about?: string; 
}

export interface IEvents {
  name: string;
  position: string;
  date?: string;
  topic?: string;
}