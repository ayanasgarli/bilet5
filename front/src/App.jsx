import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../src/routes/index";

const routes = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
