import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home/home.component";
import Layout from "./routes/layout/layout.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am a shop</h1>;
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "sign-in", element: <SignIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
