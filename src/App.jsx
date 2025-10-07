import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Breackfast from "./components/Breakfast/Breackfast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";
import AllProducts from "./components/AllProducts/AllProducts";
// import Products from "./components/Products/products";
import Layout from "./components/Layout/Layout";
import Category from "./components/Category/Category";
 import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Products from "./components/Products/Products";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/breakfast",
          element: <Breackfast />,
        },
        {
          path: "/lunch",
          element: <Lunch />,
        },
        {
          path: "/dinner",
          element: <Dinner />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/categorys",
          element: <Category />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
         {
          path: "/",
          element: <Home />,
        },
         {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
