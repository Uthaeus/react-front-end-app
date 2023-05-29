import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/root";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import Calculator from "./calculator/calc";
import Quote from "./quote/quote";
import DrumMachine from "./drum/drum";
import PomodoroClock from "./pomodoro/pomodoro";
import Markdown from "./markdown/markdown";
import ExampleForm from "./form/example-form";
import CssExamples from "./examples/css-examples";
import CommentExample from "./examples/comment-example";
import Blog from "./blog/blog";
import BlogLayout from "./blog/blog-layout";
import AdminLayout from "./admin/admin-layout";
import AdminMain from "./admin/admin-main";
import Comments from "./comments/comments";

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
      },
      {
        path: "/drum",
        element: <DrumMachine />
      },
      {
        path: "/pomodoro",
        element: <PomodoroClock />
      },
      {
        path: "/markdown",
        element: <Markdown />
      },
      {
        path: "/example-form",
        element: <ExampleForm />
      },
      {
        path: "/css-examples",
        element: <CssExamples />
      },
      {
        path: "/comment-example",
        element: <CommentExample />
      }
    ]
  },
  {
    path: "/blogs",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Blog />
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminMain />
      },
      {
        path: "/admin/comments",
        element: <Comments />
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
