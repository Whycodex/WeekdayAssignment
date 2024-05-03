import { Box, Grid, Toolbar } from "@mui/material";
import Role from "./Role";

const Filters = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5px",
      }}
    >
      <Role />
      <Role />
      <Role />
      <Role />
      <Role />
      <Role />
    </Grid>
  );
};

export default Filters;
