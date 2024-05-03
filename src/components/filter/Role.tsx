import React, { useState } from "react";
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
  borderRadius: "4px",
  padding: "0 10px", // Ensures padding on both sides of the text
  margin: "2px",
  justifyContent: "space-between", // Ensures space between the text and the delete icon
  "& .MuiChip-deleteIcon": {
    color: "black", // Default color of the delete icon
    "&:hover": {
      color: "red", // Color of the delete icon on hover
    },
  },
});

const Role = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const roles = [
    "engineering",
    "backend",
    "frontend",
    "fullstack",
    "ios",
    "flutter",
    "reactnative",
    "android",
  ];

  function handleDelete(roleToDelete: string) {
    setSelectedRoles((prevRoles) =>
      prevRoles.filter((role) => role !== roleToDelete)
    );
  }

  const handleChange = (event: SelectChangeEvent<typeof selectedRoles>) => {
    const value = event.target.value;
    setSelectedRoles(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl>
      <Select
        sx={{minWidth: "180px"}}
        multiple
        value={selectedRoles}
        onChange={handleChange}
        input={<CustomOutlinedInput notched={selectedRoles.length === 0} />}
        renderValue={(selected) => (
          <div style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '5px',
            alignItems: 'center',
            overflow: 'visible',
            whiteSpace: 'nowrap',
          }}>
            {selected.map((value) => (
              <CustomChip key={value} label={value} onDelete={() => handleDelete(value)} />
            ))}
          </div>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: 250,
            },
          },
        }}
      >
        {roles.filter(role => !selectedRoles.includes(role)).map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Role;
