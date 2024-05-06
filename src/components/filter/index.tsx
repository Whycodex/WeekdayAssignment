import { Grid } from "@mui/material";
import DropdownBox from "./DropdownBox";
import { filterData } from "../../utils/data";
import SearchBox from "./SearchBox";

// Component for rendering filters
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
      {/* Dropdown filter for Roles */}
      <DropdownBox data={filterData.Roles} />
      {/* Dropdown filter for Employees */}
      <DropdownBox data={filterData.Employees} />
      {/* Dropdown filter for Experience */}
      <DropdownBox data={filterData.Experience} />
      {/* Dropdown filter for Remote work */}
      <DropdownBox data={filterData.Remote} />
      {/* Dropdown filter for Salary */}
      <DropdownBox data={filterData.Salary} />
      {/* Search box for Company Name */}
      <SearchBox placeholder="Search Company Name" />
    </Grid>
  );
};

export default Filters;
