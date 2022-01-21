// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { IFacility, IAPIResponse } from "../../../utils/Interfaces";
import {
  createRoute,
  ServerRoutes,
  _getHeaders,
  _getHeadersServer,
} from "../../../utils/API";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Promise<IFacility> | IAPIResponse>
) {
  try {
    switch (req.method) {
      case "GET":
        {
          const response = await axios.get(
            createRoute(
              ServerRoutes.BASE_ROUTE,
              ServerRoutes.FacilitiesRoutes.Facilities
            ),
            {
              headers: _getHeadersServer(req),
            }
          );
          res.status(200).send(response.data);
        }
        break;
      case "POST":
        {
          const response = await axios.post(
            createRoute(
              ServerRoutes.BASE_ROUTE,
              ServerRoutes.FacilitiesRoutes.Facilities
            ),
            req.body,
            {
              headers: _getHeadersServer(req),
            }
          );
          res.status(200).send(response.data);
        }
        break;
      default: {
        res
          .status(405)
          .send({ status: 405, ok: false, message: "Method Not Allowed" });
      }
    }
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
}

export default handler;
