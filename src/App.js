import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Calculator from "./calculator/calc";
import Quote from "./quote/quote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/calculator",
        element: <Calculator />
      },
      {
        path: "/quote",
        element: <Quote />
      }
    ]
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
