import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Box, InputAdornment, TextField } from "@mui/material";

export interface SearchInputProps {
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
function SearchInput({ handleOnChange }: SearchInputProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="search-keyword-input"
        required
        label="Keyword"
        autoFocus
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
          sx: { borderRadius: "36px" },
        }}
        variant="outlined"
        type="search"
        onChange={handleOnChange}
      />
    </Box>
  );
}

export default SearchInput;
