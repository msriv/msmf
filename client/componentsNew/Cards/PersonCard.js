import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useState } from "react";

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

const card = {
  open: {
    width: 1050,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    width: 321,
    transition: {
      type: "spring",
      stiffness: 5,
      restDelta: 2,
      duration: 5,
    },
  },
};
const media = {
  open: {
    height: 300,
    width: 300,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    height: 327,
    width: 321,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};
const aboutVariant = {
  open: {
    display: "block",
    opacity: [0, 0.5, 1],
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    display: "none",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};
const personInfoBlock = {
  open: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "400px",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "between",
    width: 290,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};
const personInfo = {
  open: {
    width: "90%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    width: "90%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};
const personProfile = {
  open: {
    width: "10%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  close: {
    width: "10%",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
};
const actionArea = {
  open: {
    display: "flex",
    justifyContent: "flex-start",
    width: 1050,
  },
  close: { display: "block", width: 321 },
};
const PersonCard = ({ name, thumbnail, position, profile, about }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Card
      className={classes.root}
      component={motion.div}
      variants={card}
      animate={open ? "open" : "closed"}
    >
      <CardActionArea
        onClick={() => {
          setOpen(!open);
        }}
        component={motion.div}
        variants={actionArea}
        animate={open ? "open" : "closed"}
      >
        {thumbnail !== null ? (
          <CardMedia
            className={classes.media}
            image={thumbnail}
            title={title}
            component={motion.img}
            variants={media}
            animate={open ? "open" : "close"}
          />
        ) : (
          <motion.div
            className="bg-silver-500"
            variants={media}
            animate={open ? "open" : "close"}
          ></motion.div>
        )}
        <CardContent>
          <motion.div
            variants={personInfoBlock}
            animate={open ? "open" : "close"}
          >
            <motion.div
              variants={personInfo}
              animate={open ? "open" : "close"}
              style={{ width: "90%" }}
            >
              <p className="font-inter-medium text-lg">{name}</p>
              <p>{position}</p>
            </motion.div>
            <motion.div
              variants={personProfile}
              animate={open ? "open" : "close"}
              style={{ width: "10%" }}
            >
              <a href={profile} target="_blank">
                <img
                  src="/assets/social-media-icons/linkedin1.png"
                  alt={name}
                />
              </a>
            </motion.div>
          </motion.div>
        </CardContent>
      </CardActionArea>
      {about ? (
        <CardContent
          component={motion.div}
          variants={aboutVariant}
          animate={open ? "open" : "close"}
        >
          <div>{about}</div>
        </CardContent>
      ) : null}
    </Card>
  );
};

export default PersonCard;
