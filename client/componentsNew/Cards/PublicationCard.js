import { Grid } from "@material-ui/core";

const PublicationCard = ({ title, authors, otherDetails }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <p className="font-inter-medium text-2xl">{title}</p>
      </Grid>
      <Grid item xs={12}>
        <p className="text-lg text-shark-400">{authors}</p>
      </Grid>
      <Grid item xs={12}>
        <p className="text-lg text-shark-400">{otherDetails}</p>
      </Grid>
    </Grid>
  );
};

export default PublicationCard;
