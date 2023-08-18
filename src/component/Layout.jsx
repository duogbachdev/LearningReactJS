import React from "react";

import NavMenu from "./layout/banner/NavMenu";

import Category from "./layout/category/Category";
import Sline from "./layout/banner/Sline";
import Headne from "./layout/header/Headne";
// import Slider from "./layout/banner/Slider";

export const Layout = () => {
  return (
    <div>
      <div>
        <Headne />
      </div>
      <div className="container mx-auto px-4 py-2">
        <div>
          <Sline />
        </div>
        <div>
          <NavMenu />
        </div>
      </div>

      <div className="container mx-auto px-4 py-2">
        <Category />
      </div>
    </div>
  );
};
