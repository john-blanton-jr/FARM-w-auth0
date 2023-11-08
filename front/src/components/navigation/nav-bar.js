import React from "react";
import { NavBarButtons } from "./nav-bar-buttons";


export const NavBar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="/">Hidden brand</a>
            <NavBarButtons />
          </div>
        </div>
      </nav>
    </div>
  );
  
};