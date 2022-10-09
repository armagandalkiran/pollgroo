import { Game } from "./pages/Game";
import { Panel } from "./pages/Panel";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Panel/>,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
  }
]);

export default App;
