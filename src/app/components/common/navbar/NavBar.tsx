import { Grid, Typography } from "@mui/material";
export default function NavBar() {
  return (
    <Grid container spacing={2} component="nav" marginY={2}>
      <Grid item xs={12}>
        <Typography
          fontWeight={800}
          fontSize={24}
          fontFamily={"sans-serif"}
          textAlign={"center"}
        >
          Unsplash Image Search
        </Typography>
      </Grid>
    </Grid>
  );
}
