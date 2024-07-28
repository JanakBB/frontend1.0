import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProductPage from "./Pages/ProductPage.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="" element={<HomePage/>}></Route>
    <Route path="product" element={<ProductPage/>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router}></RouterProvider>
);
