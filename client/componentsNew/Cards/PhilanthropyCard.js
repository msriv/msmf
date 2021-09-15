import { Card, CardContent, CardMedia, CardActionArea } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    width: 321,
    height: 362,
  },
  media: {
    height: 362,
  },
});

const PhilanthropyCard = (props) => {
  const {
    image,
    title,
    onClick
  } = props

  const classes = useStyles()

  return(
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        >
        <CardContent className={classes.media}>
          <div className="h-full flex justify-center items-center">
            <p className=" text-center text-2xl uppercase font-avenir-heavy text-white">{title}</p>
          </div>
        </CardContent>
        </CardMedia>
        </CardActionArea>
    </Card>
  )
}

export default PhilanthropyCard;