import React from "react";
import { NavBar } from "./navigation/nav-bar";

export const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="">
        <div
          className="container row vh-100 m-0 p-0 mx-auto"
          style={{ maxWidth: "750px" }}
        >
          <div className="">
            <div className="row vh-100">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
