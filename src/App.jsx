import { useState } from "react";
import HomePage from "./routes/hompage/homepage";
import ListPage from "./routes/ListPage/listPage";
import Layout from "./routes/Layout/layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
