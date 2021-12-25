import Cors from "cors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const initMiddleWare = (middleWare: any) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleWare(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export const cors = initMiddleWare(
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);
