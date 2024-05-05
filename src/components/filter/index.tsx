import { Grid } from "@mui/material";
import DropdownBox from "./DropdownBox";
import { filterData } from "../../utils/data";
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
      <DropdownBox data={filterData.Roles} />
      <DropdownBox data={filterData.Employees} />
      <DropdownBox data={filterData.Experience} />
      <DropdownBox data={filterData.Remote} />
      <DropdownBox data={filterData.Salary} />
      <SearchBox placeholder="Search Company Name" />
    </Grid>
  );
};

export default Filters;
