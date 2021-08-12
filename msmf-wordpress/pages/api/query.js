import { useQuery } from "@apollo/client"
import { GET_FORM } from "../../lib/queries";

export default function query(req, res) {
  const {
    query,
    variables,
  } = req.body;

  console.log(query, variables);

  const { loading, error, data } = useQuery(query, {
    variables
  });
  if(data) res.status(200).send(data)
}