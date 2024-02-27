import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import "./styles.css";

const TopNav = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">
          Social <span>Post</span>
          <FaGithub color="black" />
        </div>
        <div className="downloadBtn">
          <IoMdDownload size={25} />
          Download
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
