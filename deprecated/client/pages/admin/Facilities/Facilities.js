import { CircularProgress, Grid, IconButton } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import FacilityForm from "./FacilityForm";
import FacilitiesTable from "./FacilitiesTable";

import { useFacilities } from "../../../lib/requests";

const Facilities = (props) => {
  const { facilities, isLoading, isError, mutate, isValidating } =
    useFacilities();

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <p className=" text-4xl font-inter-bold">Facilities</p>
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={mutate}>
          {" "}
          <Refresh />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <FacilityForm type={"add"} heading={"Add Facility"} mutate={mutate} />
      </Grid>
      <Grid item xs={12}>
        {isLoading || isValidating ? (
          <CircularProgress />
        ) : isError ? (
          <div>Error</div>
        ) : facilities ? (
          <FacilitiesTable facilities={facilities} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Facilities;
