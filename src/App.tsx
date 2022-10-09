import { Game } from "./pages/Game";
import { Panel } from "./pages/Panel";
import { createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./pages/Game/components/error-element";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Panel/>,
    errorElement: <div>Error Page</div>
  },
  {
    path: "/game/:gameId",
    element: <Game />,
    errorElement: <ErrorElement/>
  }
]);

export default App;
