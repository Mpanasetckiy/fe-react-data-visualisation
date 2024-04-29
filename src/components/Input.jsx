import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

function Input({ shows, newSearchTerm, handleChange }) {
  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={shows.map((option) => option.name)}
        value={newSearchTerm}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              className: "custom-input",
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}

export default Input;
