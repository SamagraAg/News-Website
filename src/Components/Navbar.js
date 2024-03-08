import React, { Component } from 'react'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#35374B" }} data-bs-theme="dark">
                <div className="container-fluid">
                    <img src="favicon-32x32.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top " />
                    <a className="mx-2 navbar-brand" href="/">KhabarDaar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Technology</a>
                            </li>
                            <li className="nav-item">
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">India</a></li>
                                    <li><a className="dropdown-item" href="/">USA</a></li>
                                    <li><a className="dropdown-item" href="/">China</a></li>
                                    <li><a className="dropdown-item" href="/">Russia</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}