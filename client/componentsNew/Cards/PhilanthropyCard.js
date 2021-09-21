import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 321,
    height: 362,
  },
  media: {
    height: "100%",
    width: "100%",
    filter: "brightness(0.3)",
    position: "absolute",
    top: 0,
    left: 0,
  },
  content: {
    height: "100%",
    padding: 0,
    position: "relative",
  },
});

const PhilanthropyCard = (props) => {
  const { image, title, onClick } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content} onClick={onClick}>
        <CardMedia className={classes.media} image={image} title={title} />

        <div className="absolute top-0 left-0 h-full w-full">
          <div className="h-full flex justify-center items-center">
            <p className=" text-center text-2xl uppercase font-avenir-heavy text-white">
              {title}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhilanthropyCard;
