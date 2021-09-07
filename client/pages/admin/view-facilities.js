import { useQuery } from "@apollo/client"
import TableBuilder from "../../componentsNew/TableBuilder";
import { ALL_FACILITIES } from "../../lib/queries/facilities";

const ViewFacilities = () => {
  const { loading, error, data } = useQuery(ALL_FACILITIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return (
    <>
      <TableBuilder data={data} />
    </>
  )
}

export default ViewFacilities