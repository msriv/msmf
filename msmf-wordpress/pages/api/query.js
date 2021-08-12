import { useQuery } from "@apollo/client"
import { GET_FORM } from "../../lib/queries";

export default function query(req, res) {
  res.status(200).send("Hello World")
}