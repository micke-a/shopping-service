import React from "react";

import {Link} from "react-router";

export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to={"/"} className="navbar-brand" href="#">{props.navTitle}</Link>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                    <Link to={"/list"} activeClassName={"active"}>List Locations</Link>
                </li>
                <li>
                    <Link to={"/find"} activeClassName={"active"}>Shop Locator</Link>
                </li>
                <li>
                    <Link to={"/add"} activeClassName={"active"}>Add Location</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    );
};