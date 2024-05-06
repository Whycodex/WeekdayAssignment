import { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList } from "../../redux/slices/dataSlice";
import { RootState } from "../../redux/store";

// DropdownBox component
const DropdownBox = ({
  data,
}: {
  data: { placeholder: string; tag: string, entries: string[] };
}) => {
  const dispatch = useDispatch();
  const jdData = useSelector((store: RootState) => store.jdData.jdList);

  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const entries = data.entries;

  // Function to handle deletion of selected entry
  function handleDelete(entryToDelete: string) {
    setSelectedEntries((prevEntry) => {
      const value = prevEntry.filter((entry) => entry !== entryToDelete);
      dispatch(
        setFilteredList(
          jdData.filter((job: any) => {
            const tag = data.tag;
            return value.length ? value.includes(job[tag].toString()) : true;
          })
        )
      );
      return value;
    });
  }

  // Function to handle change in selected entries
  const handleChange = (event: SelectChangeEvent<typeof selectedEntries>) => {
    const value = event.target.value as string[];
    setSelectedEntries(() => {
      dispatch(
        setFilteredList(
          jdData.filter((job: any) => {
            const tag = data.tag;
            return value.length ? value.includes(job[tag].toString()) : true;
          })
        )
      );
      return value;
    });
  };

  return (
    <FormControl>
      <Select
        sx={{ minWidth: 180, height: 40 }}
        multiple
        value={selectedEntries}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{
              "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
              },
            }}
            notched={selectedEntries.length === 0}
          />
        }
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
            <Chip
              sx={{
                height: 26,
                borderRadius: "4px",
                padding: "0 8px",
                margin: "2px",
                fontSize: "10px",
                justifyContent: "space-between",
              }}
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

export default DropdownBox;
