import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, CardMedia, LinearProgress } from "@material-ui/core"
import Button from "../../design-system/Button"
const useStyles = makeStyles(theme => ({
  root: {
    width: 402,
    height: "max-content",
    paddingBottom: "1rem",
    [theme.breakpoints.down('xl')]: {
      width: 350
    },
  },
  media: {
    height: 208,
  },
  actions: {
    display: "flex",
    justifyContent: "justify-between"
  },
}));

const ImpactCard = (props) => {

    const {
        image,
        title,
        description
    } = props

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
            className={classes.media}
            image={image}
            title={title}
            />
            <CardContent>
                <p className="font-inter-bold text-lg ">
                    {title}
                </p>
                <p className="text-base text-shark-400 my-2">
                    {description}
                </p>
            </CardContent>
        </Card>
    )  
}

export default ImpactCard;