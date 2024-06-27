import React from 'react';
import logoDark from "../img/logo-dark.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white ff-sf mt-5 overflow-x-hidden position-relative">
      <div className="text-wrapper">
        <p className="fw-heavy">Digital product design</p>
        <p>Remote work</p>
        <p className="fw-heavy">UX design</p>
        <p>Distributed teams</p>
        <p className="fw-heavy">Creativity</p>
        <p>Strategy</p>
        <p className="fw-heavy">Suspense</p>
        <p>Growth</p>
      </div>
      <div className="container text-center py-5">
        <img src={logoDark} className="w-25 mt-5 mb-4 w-sm-100 w-md-50" />
        <p className="w-50 mx-auto p-5 mb-5 p-sm-0 w-sm-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse
        platea dictumst. Fusce a nunc eget ligula suscipit finibus.</p>
        <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled my-4">
          <li className="text-decoration-underline">Twitter</li>
          <li className="text-decoration-underline">LinkedIn</li>
          <li className="text-decoration-underline">RSS</li>
        </ul>
        <p>&copy; 2012-2020 Nordic Rose Co.<br />All rights reserved.</p>
      </div>
    </footer>
  );
};
