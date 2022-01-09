import { Card, CardContent, CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 385,
    height: "max-content",
    paddingBottom: "1rem",
    [theme.breakpoints.down("xl")]: {
      width: 350,
    },
  },
  media: {
    height: 208,
    background: "#1CA56B",
  },
}));

const TestCard = ({ icon, title, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {icon ? (
        <CardMedia className={classes.media} image={icon} title={title} />
      ) : (
        <div className={classes.media}></div>
      )}
      <CardContent>
        <p className="font-inter-bold text-lg ">{title}</p>
        <p className="text-base text-shark-400 my-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default TestCard;
