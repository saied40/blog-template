import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Nav";

import author1 from "../img/author-1.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import articleSec from "../img/article-sec.png";
import eyes from "../img/eyes.png";

export default function Article({ products }) {
  document.title = "Article Page";
  const [product, setProduct] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  useEffect(()=> {
    window.scrollTo(0, 0);
    if (product && Array.isArray(products)) {
      setFiltered(products.filter((item) => item.category === product.category && item.id !== product.id));
    }
  },[product, products])

  if (!product) {
    return (
      <div className="loading-cont">
        <div className="lds-hourglass"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="mt-5 mx-auto text-center w-100">
        <div className="w-75 mx-auto">
          <p className="display-4 fw-bold text-center mb-3 px-1">
            {product.title}
          </p>
          <p className="text-center fs-5 ff-sf w-75 mx-auto">
            {product.description}
          </p>
        </div>
        <img src={product.image} className="mt-3 w-25" alt="" />
      </section>
      <article className="w-60 mx-auto">
        <div className="w-75 mx-auto">
          <span className="line w-100"></span>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={author1}
                alt="..."
                className="rounded-circle w-3.5 me-2"
              />
              <div>
                <h4 className="text-uppercase fw-bold fs-6">Mika MAtikainen</h4>
                <p className="mb-0">Apr 15, 2020 · 4 min read</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={facebook}
                alt="..."
                className="px-4 py-2 border border-1 rounded-2 w-4.5"
              />
              <img
                src={twitter}
                alt="..."
                className="px-4 py-2 border border-1 rounded-2 w-4.5"
              />
            </div>
          </div>
          <p className="fs-5 my-5 lh-170">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.
          </p>
          <p className="fs-5 my-5 lh-170">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.
          </p>
          <h3 className="fs-2 fw-bold ff-sf">Next on the pipeline</h3>
          <p className="fs-5 my-5 lh-170">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="fs-5 my-5 lh-170">
            Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla.
          </p>
        </div>
        <figure>
          <img src={articleSec} alt="..." />
          <figcaption className="w-50 text-center my-3 mx-auto">
            Image caption centered this way and I’ll make this a bit longer to
            indicate the amount of line-height.
          </figcaption>
        </figure>
        <div className="w-75 mx-auto pb-4 border-b-dashed">
          <p className="fs-5 my-5 lh-170">
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula.
          </p>
          <p className="fs-5 my-5 lh-170">
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </p>
          <p className="fs-5 mt-5 mb-4 lh-170">A list looks like this:</p>
          <ul>
            <li className="my-4">
              <p className="fs-5 lh-170">First item in the list</p>
            </li>
            <li className="my-4">
              <p className="fs-5 lh-170">
                Second item in the list lorem ipsum dolor sit amet nunc felis
                dolor lorem ipsum sit amet
              </p>
            </li>
            <li className="my-4">
              <p className="fs-5 lh-170">Third item in the list</p>
            </li>
          </ul>
          <p className="fs-5 my-5 lh-170">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.
          </p>
          <p className="fs-5 my-5 lh-170">
            Thanks for reading,
            <br />
            Mika
          </p>
          <div className="fs-5 my-5 lh-170 d-flex align-items-center justify-content-center">
            <a
              href="/"
              type="button"
              className="w-50 text-black text-decoration-none fs-6 fw-medium border border-light-subtle text-center py-3 shadow-sm rounded-start"
            >
              <img src={facebook} alt="" className="mx-2 w-1.25" /> Share on
              Facebook
            </a>
            <a
              href="/"
              type="button"
              className="w-50 text-black text-decoration-none fs-6 fw-medium border border-light-subtle text-center py-3 shadow-sm rounded-end"
            >
              <img src={twitter} alt="" className="mx-2 w-1.25" /> Share on
              Twitter
            </a>
          </div>
          <p className="fs-6 fw-medium ff-sf">
            Tags: <u>product design</u>, <u>culture</u>
          </p>
        </div>
        <div className="w-75 mx-auto my-5 d-flex align-items-center">
          <div className="me-4">
            <img src={author1} alt="" className="rounded-circle" />
          </div>
          <p className="fs-6">
            <span className="fw-bold text-uppercase">Mika Matikainen</span> is a
            Design Founder & Advisor, Berlin School of Creative Leadership
            Executive MBA participant, Zippie advisor, Wolt co-founder, and
            Nordic Rose stakeholder.
          </p>
        </div>
      </article>
      <div className="w-100 my-5 py-4 position-relative">
        <hr className="hr" />
        <img src={eyes} alt="" className="eyes" />
      </div>
      <section className="container my-5">
        <h2 className="display-6 fw-bold text-center">What to read next</h2>
        <div className="row my-5">
          {filtered.map((product) => (
            <Link
              to={`/blog/${product.id}`}
              key={product.id}
              className="card border-0 col-sm-12 col-md-6 col-xl-4 text-decoration-none"
            >
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top card_img"
              />
              <div className="card-body">
                <p className="card-text fw-medium text-center fs-4">
                  {product.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-50 mx-auto my-5 p-5 text-center newsletter">
          <h3 className="fs-1 fw-bold">Sign up for the newsletter</h3>
          <p className="my-3">
            If you want relevant updates occasionally, sign up for the private
            newsletter. Your email is never shared.
          </p>
          <form className="d-flex justify-content-center mt-5">
            <input
              type="email"
              className="form-control px-3 rounded-end-0 border-black"
              placeholder="Enter your email..."
            />
            <button
              type="submit"
              className="btn btn-dark px-4 py-3 text-nowrap text-uppercase rounded-start-0"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
