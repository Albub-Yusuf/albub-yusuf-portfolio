import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <div>
        <nav style={{minHeight:'80px'}} className="navbar navbar-expand-lg navbar-light sticky-top shadow-lg ">
            <div className="container">
                <a className="navbar-brand" href="/">Albub Yusuf</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        {/* <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                        <Link to="/projects" className="nav-link active" aria-current="page">Projects</Link>
                        <Link to="/resume" className="nav-link" aria-current="page">Resume</Link>
                        <Link to="/blog" className="nav-link" aria-current="page">Blogs</Link>
                        <Link to="/contact" className="nav-link" aria-current="page">Contact</Link> */}

                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                         <a className="nav-link" href="#projects">Projects</a>
                        <a className="nav-link" href="#resume">Resume</a>
                        <a className="nav-link" href="#blog">Blog</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;