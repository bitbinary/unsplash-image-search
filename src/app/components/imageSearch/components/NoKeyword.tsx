import { Box, Typography } from "@mui/material";

function NoKeyword() {
  return (
    <Box
      minHeight={400}
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Typography>Enter keyword to search for images.</Typography>
    </Box>
  );
}

export default NoKeyword;
