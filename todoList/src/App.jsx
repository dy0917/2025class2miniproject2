import { useState, useContext } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoSubmitForm from "./Components/TodoSubmitForm";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <TodoProvider>
        <Grid container>
          <Grid offset={3}>
            <TodoSubmitForm />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <TodoList></TodoList>
        </Grid>
      </TodoProvider>
    </>
  );
}

export default App;
