import { Box, Typography } from "@mui/material";

export interface ErrorProps {
  message: string;
}
function Error({ message }: ErrorProps) {
  return (
    <Box
      height={400}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography>{message}</Typography>
    </Box>
  );
}

export default Error;
