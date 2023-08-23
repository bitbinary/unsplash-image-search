import { Box, Typography } from "@mui/material";

function NoResultsFound() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={400}
    >
      <Typography>No Results Found</Typography>
    </Box>
  );
}

export default NoResultsFound;
