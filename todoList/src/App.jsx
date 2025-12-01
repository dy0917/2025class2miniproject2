import { TodoProvider } from "./Context/TodoContext";
import { UserProvider } from "./Context/UserContext";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <TodoProvider>
        <UserProvider>
          <BrowserRouter>
            <Nav></Nav>
            <AppRoute></AppRoute>
          </BrowserRouter>
        </UserProvider>
      </TodoProvider>
    </>
  );
}

export default App;
