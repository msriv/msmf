// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IToken, IAPIResponse } from "../../../utils/Interfaces";
import { createRoute, ServerRoutes } from "../../../utils/API";
import { cors } from "../../../utils/Middlewares";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Promise<IToken> | IAPIResponse>
) {
  await cors(req, res);
  try {
    const response = await axios.post(
      createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AuthRoutes.GetToken),
      req.body
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
}
