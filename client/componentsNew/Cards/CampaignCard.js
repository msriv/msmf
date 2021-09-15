import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, CardMedia, LinearProgress } from "@material-ui/core"
import Button from "../../design-system/Button"
const useStyles = makeStyles({
  root: {
    width: 402,
    height: "max-content",
    paddingBottom: "1rem"
  },
  media: {
    height: 208,
  },
  actions: {
    display: "flex",
    justifyContent: "justify-between"
  },
});

const CardLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    margin: "0.7rem 0"
  },
  colorPrimary: {
    backgroundColor: "#BDBDBD",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#0E4981',
  },
}))(LinearProgress);

const CampaignCard = (props) => {
  const {
    image,
    title,
    description,
    goal, 
    achieved,
    daysLeft,
    supporters,
    shareAction,
    supportUsAction
  } = props;

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
          <p className="mt-10 font-inter-regular text-base text-shark-400"><span className="text-lg font-inter-bold">{achieved}</span> out of <span className="font-inter-bold">{goal}</span></p>
          <CardLinearProgress variant="determinate" value={parseInt((achieved/goal) * 100)} />
          <div className="flex justify-between">
            <p className="font-inter-regular"><b>{daysLeft}</b> Days Left</p>
            <p className="font-inter-regular"><b>{supporters}</b> Supporters</p>
          </div>
        </CardContent>
      <CardActions>
        <div className="w-11/12 mx-auto flex justify-between">
        <Button type="click" onClick={shareAction} variant="outlined">
          Share
        </Button>
        <Button type="click" onClick={supportUsAction}>
          Support Us
        </Button>
        </div>
      </CardActions>
    </Card>
  )
}

export default CampaignCard