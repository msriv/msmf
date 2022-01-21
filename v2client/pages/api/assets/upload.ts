// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  createRoute,
  ServerRoutes,
  _getHeaders,
  _getHeadersServer,
} from "../../../utils/API";
import { cors } from "../../../utils/Middlewares";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await cors(req, res);
  try {
    const response = await axios.post(
      createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AssetRoutes.Upload),
      req.body,
      {
        headers: {
          ..._getHeadersServer(req),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
  // const form = new formidable.IncomingForm();
  // form.parse(req, async (err, fields, files) => {
  //   try {
  //     const response = await axios.post(
  //       createRoute(ServerRoutes.BASE_ROUTE, ServerRoutes.AssetRoutes.Upload),
  //       files,
  //       {
  //         headers: {
  //           ..._getHeadersServer(req),
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     res.status(200).send(response.data);
  //   } catch (error) {
  //     res.status(500).send({ status: 500, ok: false, message: `${error}` });
  //   }
  // });
}

export default handler;
