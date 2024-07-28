import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      },
      {
        path: "/product",
        element: <ProductPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router}></RouterProvider>
);
