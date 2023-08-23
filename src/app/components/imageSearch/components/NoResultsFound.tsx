import { Box, Typography } from "@mui/material";
import Image from "next/image";

function NoResultsFound() {
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
        <Image src={"/no-results.avif"} alt="No results" fill={true} />
      </Box>
      <Typography>No Results Found</Typography>
    </Box>
  );
}

export default NoResultsFound;
