import React from "react";
import { NavBar } from "./navigation/nav-bar";
import { PageFooter } from "./page-footer";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout bg-dark vh-100">
      <NavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
