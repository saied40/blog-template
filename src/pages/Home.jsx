import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./Nav";

import landing from "../img/landing.png";

export default function Home({ products }) {
  document.title = "Home Page | Listing Articles";
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <Header />
      <section className="container my-5 mx-auto text-center w-60 w-sm-100 w-md-100 px-sm-0">
        <img src={landing} className="my-5" alt="" />
        <p className="display-4 fw-bold text-center mb-5 px-1">
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <p className="text-center fs-5 ff-sf w-75 mx-auto">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <span className="line w-md-100"></span>
      </section>
      <section className="container">
        <h2 className="display-5 fw-bold text-center my-5">All articles</h2>
        <div className="row">
          {products.length === 0 ? (
            <div className="loading-cont">
              <div className="lds-hourglass"></div>
            </div>
          ) : (
            products.map((product) => (
              <Link
                to={`/blog/${product.id}`}
                key={product.id}
                className="card border-0 col-sm-12 col-md-6 col-xl-4 text-decoration-none"
              >
                <img src={product.image} alt={product.title} className="card-img-top card_img" />
                <div className="card-body">
                  <p className="card-text fw-medium text-center fs-4">
                    {product.title}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
};
