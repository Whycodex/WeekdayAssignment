import { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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
  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const entries = data.entries;

  function handleDelete(entryToDelete: string) {
    setSelectedEntries((prevEntry) =>
      prevEntry.filter((entry) => entry !== entryToDelete)
    );
  }

  const handleChange = (event: SelectChangeEvent<typeof selectedEntries>) => {
    const value = event.target.value;
    setSelectedEntries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl>
      <Select
        sx={{ minWidth: 150, height: 40 }}
        multiple
        value={selectedEntries}
        onChange={handleChange}
        input={<CustomOutlinedInput notched={selectedEntries.length === 0} />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: 150,
            },
          },
        }}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span style={{ color: "#d0d0d0", fontSize: "12px" }}>{data.placeholder}</span>;
          }
          return selected.map((value) => (
            <CustomChip
              key={value}
              label={value}
              onDelete={() => handleDelete(value)}
            />
          ));
        }}
      >
        {entries
          .filter((entry) => !selectedEntries.includes(entry))
          .map((entry) => (
            <MenuItem key={entry} value={entry}>
              {entry}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
