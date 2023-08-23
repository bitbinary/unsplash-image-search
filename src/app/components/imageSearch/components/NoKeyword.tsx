import { Box, Typography } from "@mui/material";
import Image from "next/image";

function NoKeyword() {
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
        <Image src={"/enter-keyword.avif"} alt="Error" fill={true} />
      </Box>
      <Typography>Enter keyword to search for images.</Typography>
    </Box>
  );
}

export default NoKeyword;
