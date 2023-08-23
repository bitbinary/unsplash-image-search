import { Box, LinearProgress } from "@mui/material";

const loadingMessages: string[] = [
  "Just count to 10",
  "...and enjoy the elevator music...",
  "The server is powered by a lemon and two electrodes.",
  "Counting backwards from Infinity",
  "Last call for the data bus! All aboard!",
  "We're working very Hard .... Really",
  "Our premium plan is faster",
];
const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomIndex];
};

function Loading() {
  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      p={2}
    >
      <p>{getRandomMessage()}</p>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    </Box>
  );
}

export default Loading;
