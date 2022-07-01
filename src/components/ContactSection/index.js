import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">Contact</h1>
      <div className="mail-contact mb-5">
        <h4 className="px-2">Having an project idea in mind? Please feel free to contact me anytime.</h4>
        <a
          href="mailto:shawprateek91@gmail.com"
          rel="noreferrer"
          className="btn btn-sm btn-success"
        >
          Let's Discuss
        </a>
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <i className="fad fa-envelope"></i> <span>shawprateek91@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 7827340493</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Dilshad Garden, Delhi</span>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/Lucifer12929"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/prateek-shaw-b3b680232/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
        <span>Copyright © 2022. </span>&emsp;{" "}
        <span> All Rights Reserved by Prateek Shaw </span>
      </div>
    </div>
  );
}

export default Contact;
