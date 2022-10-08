import Game from "./pages/game/game";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  {
    path: "/game",
    element: <Game />,
  }
]);

export default App;
