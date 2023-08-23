import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface ErrorProps {
  message: string;
}
function Error({ message }: ErrorProps) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={400}
      flexDirection={"column"}
      gap={4}
    >
      <Box
        borderRadius={"50%"}
        overflow={"hidden"}
        width={200}
        height={200}
        position={"relative"}
      >
        <Image src={"/error.avif"} alt="Error" fill={true} />
      </Box>
      <Typography>{message}</Typography>
    </Box>
  );
}

export default Error;
