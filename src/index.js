import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./New York Small/stylesheet.min.css";
import "./SF Mono/stylesheet.min.css";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './pages/Home';
import Article from './pages/article';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/blog",
    element: <Article />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
