import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { a11yProps, TabPanel } from "../../../componentsNew/Tabs";
import ImageUploader from "./ImageUploader";

const useStyles = makeStyles({
  content: {
    overflow: "hidden",
    padding: "2rem",
  },
});

const AssetManager = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Paper className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p className=" text-4xl font-inter-bold">Asset Manager</p>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Upload Assets" {...a11yProps(0)} />
              <Tab label="Manage Assets" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <SwipeableViews
            axis={"x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0}>
              <ImageUploader />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Manage Assets
            </TabPanel>
          </SwipeableViews>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AssetManager;
