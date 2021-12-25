import type { NextApiRequest, NextApiResponse } from "next";
import { IAPIResponse } from "../../utils/Interfaces";
import { cors } from "../../utils/Middlewares";

const data = { person: "John Doe" };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAPIResponse>
) {
  try {
    await cors(req, res);
    res.status(200).send({
      status: 200,
      ok: true,
      message: data,
    });
  } catch (error) {
    res.status(500).send({ status: 500, ok: false, message: `${error}` });
  }
}
