import React from "react";
import logo from "../img/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="border-bottom py-0">
      <Container>
        <Link to={"/"} className="navbar-brand w-25 w-sm-50">
          <img src={logo} alt="logo.png" className="w-100" />
        </Link>
        <Navbar.Toggle aria-controls="myNavBar" />
        <Navbar.Collapse id="myNavBar">
          <Nav className="ms-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active text-uppercase fw-medium fs-5">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link text-uppercase fw-medium fs-5">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link text-uppercase fw-medium fs-5">
                links
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/'} className="nav-link text-uppercase fw-medium fs-5">
                projects
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
