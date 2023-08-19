import React from "react";

const NavMenu = ({ navMenu }) => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2Fd8HeW0KslJUOnN4lekuwQ1Wvz3UCoyQleewxThHYGS8%2Fpreset%3Araw%2Fplain%2Ff457a1319b2daf6a8f1941b1a2c29995-2818814541369099881.jpg&w=256&q=95"
          alt=""
        />
        <p>Thu mua điện thoại</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img className="w-[55px]" src={navMenu.image} alt="" />
        <p>{navMenu.text}</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FTIuAGrBq3aKlyK_5A6rZF6W9TpYYcYrkCMX8qao5jYY%2Fpreset%3Araw%2Fplain%2F508bf25ad611db4034fa5dfde0fe8a73-2741458967710030990.jpg&w=256&q=95"
          alt=""
        />
        <p>Chợ Tốt Ưu Đãi</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2Fpu3VBwfaHY7VoKkMMkZjYA1tKHBZtt8GDpIYaJgrweU%2Fpreset%3Araw%2Fplain%2Fd5647aa85eaa65381b0a8032499cb915-2815961809231084449.jpg&w=256&q=95"
          alt=""
        />
        <p>Thu mua ô tô</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FlRml-H3PO0o270WLS26nv9eNs5TDVVfiuSVsHXENpIc%2Fpreset%3Araw%2Fplain%2F425fc9c8bdb4d028d8cc52628fbd047d-2804905330699599227.jpg&w=256&q=95"
          alt=""
        />
        <p>Gói Pro</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FPeH_Zz-8hDT7yZ8F2Mm-BI4p7HWGasDhgq8I_7xdXyk%2Fpreset%3Araw%2Fplain%2Fe16cec7ca2ff9d7649268427ea9c1e4e-2741458979427623023.jpg&w=256&q=95"
          alt=""
        />
        <p>Tin đăng đã lưu</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FBJ2sRQGytbTbBoxCqR3juzBaObXNvsJz9Q9KC8O73gQ%2Fpreset%3Araw%2Fplain%2F930641d458c0e05889f865e35a0edefb-2763757223248164734.jpg&w=256&q=95"
          alt=""
        />
        <p>Đăng tin cho tặng</p>
      </div>
      <div className="flex flex-col text-center items-center">
        <img
          className="w-[55px]"
          src="https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2Fadmincentre%2FSDwFNRG5QRbMeZWWAa4zI7AL6eJdnzO8P6H_1DxTi4I%2Fpreset%3Araw%2Fplain%2Fc7ae341fb3dad555452cb23a8b903275-2741458990797599981.jpg&w=256&q=95"
          alt=""
        />
        <p>Tìm kiếm đã lưu</p>
      </div>
    </div>
  );
};

export default NavMenu;
