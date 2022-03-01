import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-3">
      <div className="container">
      <h6>&copy;{new Date().getFullYear()} by Ricky Leung
        <span>
          <a className="mx-1" href="https://github.com/kcheykim"><BsGithub /></a>
          <a className="mx-1" href="https://www.linkedin.com/in/ricky-leung-826a7713a//"><ImLinkedin /></a>
          <a className="mx-1" href="https://twitter.com/home"><FaTwitter /></a>
        </span></h6>
      </div>
    </footer>
  );
};

export default Footer;