// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IFacility, IAPIResponse } from "../../../utils/Interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Promise<IFacility> | IAPIResponse>
) {
  try {
    const response = await axios.get("http://server:8000/v1/facilities");
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
}
