import { Grid } from "@mui/material";
import TodoList from "../Components/TodoList";
export default function ContactUs() {
  return (
    <>
      <Grid container>
        <Grid offset={3}>
          <div>Contact Us</div>
          <div>phone number: 1237680</div>
          <div>address: 1237680</div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <TodoList></TodoList>
      </Grid>
    </>
  );
}
