import React from "react";

const Headne = () => {
  return (
    <div className=" bg-[#FFBA00] pb-3">
      <div className="flex justify-between items-center text-xs mb-5">
        <div className="px-5">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="#">Chợ Tốt</a>
            </li>
            <li>
              <a href="#">Nhà Tốt</a>
            </li>
            <li>
              <a href="#">Chợ Tốt Xe</a>
            </li>
            <li>
              <a href="#">Việc Làm Tốt</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            <li>
              <a href="#">Đóng góp ý kiến</a>
            </li>
            <li>
              <a href="#">Tải ứng dụng</a>
            </li>
            <li>
              <a href="#">Trợ giúp</a>
            </li>
            <li>
              <div className="flex justify-between items-center gap-5 rounded-bl-lg bg-white px-3">
                <img
                  className="w-[26px]"
                  src="https://storage.googleapis.com/static-chotot-com/storage/APP_WRAPPER/icons/icon-suitcase.png"
                  alt=""
                />
                <p>Dành cho người bán</p>
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 px-5">
        <div>
          <img
            width={155}
            src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <i class="fa-solid fa-bars"></i>
          <p>Danh mục</p>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className="relative">
          <input
            className="rounded w-[800px] py-1 pl-5 text-black focus:outline-none"
            type="text"
            placeholder="Tìm kiếm sản phẩm trên Chợ Tốt"
          />
          <button className="absolute top-1 right-3 px-3 rounded bg-[#ff8800]">
            <i class="fa-solid fa-magnifying-glass text-white"></i>
          </button>
        </div>
        <div className="flex justify-between items-center gap-10">
          <i class="fa-regular fa-bell text-[24px]"></i>
          <i class="fa-solid fa-comments text-[24px]"></i>
          <i class="fa-solid fa-bag-shopping text-[24px]"></i>
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-newspaper text-[24px]"></i>
            <p>Quản lý tin</p>
          </div>
          <div className="flex items-center gap-2">
            <i class="fa-regular fa-circle-user text-[24px]"></i>
            <p>Tài khoản</p>
            <i class="fa-solid fa-chevron-down "></i>
          </div>
          <div className="flex justify-between items-center gap-5 bg-[#ff8800] px-[16px] py-[8px] rounded-lg text-[#ffffff] font-semibold">
            <i class="fa-solid fa-pen-to-square"></i>
            <p>ĐĂNG TIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headne;
