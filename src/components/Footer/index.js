import React from 'react';
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
      <h6>&copy;{new Date().getFullYear()} by Ricky Leung
        <span>
          <a className="icon is-large" href="https://github.com/ricky0320"><BsGithub /></a>
          <a className="icon is-large" href="https://www.linkedin.com/in/ricky-leung-826a7713a/"><ImLinkedin /></a>
          <a className="icon is-large" href="https://twitter.com/ricxx0320"><BsTwitter /></a>
        </span></h6>
      </div>
    </footer>
  );
};

export default Footer;
