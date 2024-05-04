import { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList, setJdList } from "../../redux/slices/dataSlice";

const CustomOutlinedInput = styled(OutlinedInput)({
  "& .MuiOutlinedInput-input": {
    padding: "10px 14px",
  },
});

const CustomChip = styled(Chip)({
  height: 26,
  borderRadius: "4px",
  padding: "0 8px",
  margin: "2px",
  fontSize: "10px",
  justifyContent: "space-between",
  "& .MuiChip-deleteIcon": {
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
});

const Dropdown = ({
  data,
}: {
  data: { placeholder: string; entries: string[] };
}) => {
  const dispatch = useDispatch();
  const jdData = useSelector((store: any) => store.jdData.jdList);

  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const entries = data.entries;

  function handleDelete(entryToDelete: string) {
    setSelectedEntries((prevEntry) => {
      const value = prevEntry.filter((entry) => entry !== entryToDelete);
      dispatch(
        setFilteredList(
          jdData.filter((job: any) => {
            return value.length ? value.includes(job.jobRole): true;
          })
        )
      );
      return value;
    }
      
    );
  }

  const handleChange = (event: SelectChangeEvent<typeof selectedEntries>) => {
    const value = event.target.value as string[];
    setSelectedEntries(() => {
      dispatch(
        setFilteredList(
          jdData.filter((job: any) => {
            return value.length ? value.includes(job.jobRole): true;
          })
        )
      );
      return value;
    });
  };


  return (
    <FormControl>
      <Select
        sx={{ minWidth: 150, height: 40 }}
        multiple
        value={selectedEntries}
        onChange={handleChange}
        input={<CustomOutlinedInput notched={selectedEntries.length === 0} />}
        // MenuProps={{
        //   PaperProps: {
        //     style: {
        //       maxHeight: 300,
        //       width: 100,
        //     },
        //   },
        // }}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return (
              <span style={{ color: "#d0d0d0", fontSize: "12px" }}>
                {data.placeholder}
              </span>
            );
          }
          return selected.map((value) => (
            <CustomChip
              key={value}
              label={value}
              onDelete={() => handleDelete(value)}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
            />
          ));
        }}
      >
        {entries
          .filter((entry) => !selectedEntries.includes(entry))
          .map((entry) => (
            <MenuItem key={entry} value={entry.toLowerCase()}>
              {entry}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
