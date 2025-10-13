import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoSubmitForm from "./Components/TodoSubmitForm";
import { Grid } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter></BrowserRouter>
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
