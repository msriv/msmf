import {
  CircularProgress,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Link } from "@mui/icons-material";
import { useAssets } from "../../../lib/requests";
import { useState } from "react";

const Manager = (props) => {
  const { assets, isLoading, isError, mutate, isValidating } = useAssets();

  if (isLoading) return <CircularProgress />;
  if (isError) return <div>Error</div>;
  if (assets)
    return (
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ImageList sx={{ height: 600 }} rowHeight={164} gap={1} cols={3}>
            {assets.map((item) => {
              return (
                <ImageListItem key={item.name}>
                  <img src={item.uri} alt={item.alt} loading="lazy" />
                  <ImageListItemBar
                    title={item.name}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name}`}
                        onClick={() => {
                          navigator.clipboard.writeText(item.uri).then(
                            function () {
                              console.log("Image URL copied to clipboard!");
                            },
                            function (err) {
                              console.error("Could not copy image uri: ", err);
                            }
                          );
                        }}
                      >
                        <Link />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Grid>
        <Grid item xs={0}></Grid>
      </Grid>
    );
};

export default Manager;
