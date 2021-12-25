// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IToken, IAPIResponse } from "../../../utils/Interfaces";
import {
  createRoute,
  ServerRoutes,
  _getHeaders,
  _getHeadersServer,
} from "../../../utils/API";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Promise<IToken> | IAPIResponse>
) {
  try {
    const response = await axios.get(
      createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AuthRoutes.Validate),
      {
        headers: _getHeadersServer(req),
      }
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
}
