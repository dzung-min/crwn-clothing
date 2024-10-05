import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home/home.component";
import Container from "./routes/container/container.component";

const Shop = () => {
  return <h1>I am a shop</h1>;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
