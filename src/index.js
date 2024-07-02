import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./New York Small/stylesheet.min.css";
import "./SF Mono/stylesheet.min.css";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './pages/Home';
import Article from './pages/article';
import Footer from './pages/Footer';

function Template() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={ products } />,
    },{
      path: "/blog/:id",
      element: <Article products={ products } />,
    }
  ]);

  return <RouterProvider router={Router} />;
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Template />
    <Footer />
  </React.StrictMode>
);
