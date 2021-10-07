import { makeStyles } from "@mui/styles";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Grid,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useState } from "react";
import LinkedInIcon from "../../assets/images/linkedin1.png";
import GoogleScholarsIcon from "../../assets/images/google-scholar.png";

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
  closeButton: {
    float: "right",
  },
  content: {
    overflow: "hidden",
  },
});

const PersonCard = ({ name, thumbnail, position, profile, about, email }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleActions = (e, href) => {
    e.preventDefault();
    window.open(href, "_blank").focus();
    e.stopPropagation();
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea
          onClick={(e) => {
            setOpen(true);
          }}
        >
          {thumbnail !== null ? (
            <CardMedia
              className={classes.media}
              image={thumbnail}
              title={title}
            />
          ) : (
            <div
              style={{ width: 321, height: 327 }}
              className="bg-silver-500"
            ></div>
          )}
          <CardContent>
            <Grid spacing={0} container>
              <Grid item xs={8}>
                <p className="font-inter-medium text-lg">{name}</p>
              </Grid>
              <Grid item xs={4}>
                <div className="flex space-x-4 justify-end">
                  {Object.keys(profile).map((item, id) => {
                    return (
                      <a
                        key={id}
                        href={profile[item]}
                        onClick={(e) => handleActions(e, profile[item])}
                      >
                        <Image
                          src={
                            item === "linkedin"
                              ? LinkedInIcon
                              : item === "scholar"
                              ? GoogleScholarsIcon
                              : null
                          }
                          alt={name}
                          layout="fixed"
                        />
                      </a>
                    );
                  })}
                </div>
              </Grid>
              <Grid item xs={12}>
                <p>{position}</p>
              </Grid>
              {email ? (
                <Grid item xs={12}>
                  <p>{email}</p>
                </Grid>
              ) : null}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} maxWidth={"lg"} fullWidth>
        <DialogTitle>
          {`About ${name}`}
          <IconButton
            className={classes.closeButton}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Grid spacing={2} alignContent="center" alignItems="center" container>
            <Grid xs={2} item></Grid>
            <Grid xs={4} item>
              <div
                style={{ width: 321, height: 327 }}
                className="bg-silver-500"
              ></div>
            </Grid>
            <Grid xs={4} item>
              <div className="flex flex-col">
                <div className="w-11/12">
                  <p className="font-inter-medium text-lg">{name}</p>
                  <p>{position}</p>
                  {email ? <p>{email}</p> : null}
                </div>
                <div className="w-1/12">
                  {Object.keys(profile).map((item, id) => {
                    return (
                      <a
                        key={id}
                        href={profile[item]}
                        onClick={(e) => handleActions(e, profile[item])}
                      >
                        <Image
                          src={
                            item === "linkedin"
                              ? LinkedInIcon
                              : item === "scholar"
                              ? GoogleScholarsIcon
                              : null
                          }
                          alt={name}
                          layout="fixed"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Grid>
            <Grid xs={2} item></Grid>
            <Grid xs={2} item></Grid>
            <Grid xs={12} item>
              {about}
            </Grid>
            <Grid xs={2} item></Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PersonCard;
