import { Grid } from "@mui/material";
import Dropdown from "./Dropdown";
import filterData from "../../utils/FilterData";
import SearchBox from "./SearchBox";

const Filters = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5px",
        mx: "20px",
        width: "fit-content"
      }}
    >
      <Dropdown data={filterData.Roles} />
      <Dropdown data={filterData.Employees} />
      <Dropdown data={filterData.Experience} />
      <Dropdown data={filterData.Remote} />
      <Dropdown data={filterData.Salary} />
      <SearchBox placeholder="Search Company Name" />
    </Grid>
  );
};

export default Filters;
