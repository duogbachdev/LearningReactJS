import React from "react";

import NavMenu from "./layout/banner/NavMenu";
import Category from "./layout/category/Category";
import Header from "./layout/header/Header";
import Slider from "./layout/banner/Slider";
import New from "./layout/news/New";
import SeeMore from "./layout/news/SeeMore";
import Introduce from "./layout/introduce/Introduce";
import Footer from "./layout/footer/Footer";
import IntroduceFooter from "./layout/footer/IntroduceFooter";
// import Slider from "./layout/banner/Slider";

export const Layout = () => {
  const navMenu = {
    image:
      "https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FvmzgXwahsyAR3yqOFOxlC4I54sBtGC8KeSqPhnVqo3M%2Fpreset%3Araw%2Fplain%2Fea30aa00d4c36d21a6d56fe745397327-2741458954087890671.jpg&w=256&q=95",
    text: "Nạp Đồng Tốt",
  };

  return (
    <div className="bg-[#F4F4F4]">
      <div>
        <Header />
      </div>
      <div className="container mx-auto px-3 py-4 bg-white mb-5">
        <div>
          <Slider />
        </div>
        <div>
          <NavMenu navMenu={navMenu} />
        </div>
      </div>

      <div className="container mx-auto  py-2 bg-white mb-5">
        <Category />
      </div>

      <div className="container mx-auto  py-2 bg-white mb-5">
        <New />
      </div>
      <div className="container mx-auto  py-2 mb-5">
        <SeeMore />
      </div>
      <div className="container mx-auto  py-2 mb-5">
        <Introduce />
      </div>
      <div className=" bg-white ">
        <div className="container mx-auto py-7">
          <Footer />
        </div>
        <div className="text-center border-t-2 border-solid border-transparent border-t-[#e6e1e1]">
          <IntroduceFooter />
        </div>
      </div>
    </div>
  );
};
