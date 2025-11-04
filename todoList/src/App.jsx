import { TodoProvider } from "./Context/TodoContext";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Nav></Nav>
          <AppRoute></AppRoute>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;
