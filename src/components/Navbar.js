import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <div className="fluid-container bg-primary">
                <nav className="container navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="/">
                            <h1>React</h1>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item px-3  fw-medium">
                                    <Link
                                        className="nav-link active text-light"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item px-3  fw-medium">
                                    <Link className="nav-link text-light" to="/about">About </Link>
                                </li>
                                <li className="nav-item px-3  fw-medium">
                                    <Link className="nav-link text-light" to="/products">
                                        Products
                                    </Link>
                                </li>
                                <li className="nav-item px-3  fw-medium">
                                    <Link className="nav-link text-light" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item px-3  fw-medium">
                                    <Link className="nav-link text-light" to="/productsTable">
                                        Products Table
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-light mx-3" type="submit">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </button>
                                <button className="btn btn-light" type="submit">
                                    <Link className="nav-link" to="/register">
                                        Register
                                    </Link>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
