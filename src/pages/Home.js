import { Link } from "react-router-dom";
import React from "react";
import Header from "./Nav";
import Footer from "./Footer";
import landing from "../img/landing.png";
import article01 from "../img/article-01.png";
import article02 from "../img/article-02.png";
import article03 from "../img/article-03.png";
import article04 from "../img/article-04.png";
import article05 from "../img/article-05.png";
import article06 from "../img/article-06.png";
import article07 from "../img/article-07.png";
import article08 from "../img/article-08.png";
import article09 from "../img/article-09.png";
import article10 from "../img/article-10.png";
import article11 from "../img/article-11.png";
import article12 from "../img/article-12.png";

export default function Home() {
  document.title = "Home Page | Listing Articles";
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
          <Link
            to={'/blog'}
            className="card border-0 col-sm-12 col-md-6 col-lg-4 text-decoration-none"
          >
            <img src={article01} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Here are some things you should know regarding how we work
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article02} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Granny gives everyone the finger, and other tips from OFF
                Barcelona
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article03} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Hello world, or, in other words, why this blog exists
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article04} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Here are some things you should know regarding how we work
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article05} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Connecting artificial intelligence with digital product design
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article06} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                It’s all about finding the perfect balance
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article07} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                I believe learning is the most important skill
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article08} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Clients are part of the team
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article09} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Clients are part of the team
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article10} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Here are some things you should know regarding how we work
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article11} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                Connecting artificial intelligence with digital product design
              </p>
            </div>
          </Link>
          <Link
            to={"/blog"}
            className="card text-decoration-none border-0 col-sm-12 col-md-6 col-lg-4"
          >
            <img src={article12} className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-medium text-center fs-4">
                How modern remote working tools get along with Old School
                Cowboy's methods
              </p>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
