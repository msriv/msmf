import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 321,
    height: "max-content",
    margin: "1rem",
  },
  media: {
    height: 327,
  },
  actions: {
    display: "flex",
    justifyContent: "justify-between",
  },
});

const PersonCard = ({ name, thumbnail, position, profile }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {thumbnail !== null ? (
        <CardMedia
          className={classes.media}
          image={thumbnail}
          title={tinametle}
        />
      ) : (
        <div
          style={{ height: 327, width: 321 }}
          className="bg-silver-500"
        ></div>
      )}
      <CardContent>
        <div className="flex">
          <div className="w-11/12">
            <p className="font-inter-medium text-lg">{name}</p>
            <p>{position}</p>
          </div>
          <div className="w-1/12">
            <a href={profile} target="_blank">
              <img src="/assets/social-media-icons/linkedin1.png" alt={name} />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
