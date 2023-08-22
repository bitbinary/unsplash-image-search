import { Grid } from "@mui/material";

export default function NavBar() {
  return (
    <nav>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Unsplash Image Search</h1>
        </Grid>
      </Grid>
    </nav>
  );
}
