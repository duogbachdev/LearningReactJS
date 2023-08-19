import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between ">
      <div>
        <p className="uppercase font-bold mb-5">TẢI ỨNG DỤNG CHỢ TỐT</p>
        <div className="flex gap-5">
          <img
            className="h-[87px]"
            src="https://static.chotot.com/storage/default/group-qr.webp"
            alt=""
          />
          <div>
            <img
              className="w-[94px] mb-5"
              src="https://static.chotot.com/storage/default/ios.svg"
              alt=""
            />
            <img
              className="w-[94px] mb-5"
              src="https://static.chotot.com/storage/default/android.svg"
              alt=""
            />
            <img
              className="h-[32px] w-[94px]"
              src="https://static.chotot.com/storage/default/huawei_app_install.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase font-bold mb-5">Hỗ trợ khách hàng</p>
        <ul>
          <li className="text-[#777777] mb-3">Trung tâm trợ giúp</li>
          <li className="text-[#777777] mb-3">An toàn mua bán</li>
          <li className="text-[#777777] mb-3">Liên hệ hỗ trợ</li>
        </ul>
      </div>
      <div>
        <p className="uppercase font-bold mb-5">VỀ CHỢ TỐT</p>
        <ul>
          <li className="text-[#777777] mb-3">Giới thiệu</li>
          <li className="text-[#777777] mb-3">Quy chế hoạt động sàn</li>
          <li className="text-[#777777] mb-3">Chính sách bảo mật</li>
          <li className="text-[#777777] mb-3">Giải quyết tranh chấp</li>
          <li className="text-[#777777] mb-3">Tuyển dụng</li>
          <li className="text-[#777777] mb-3">Truyền thông</li>
          <li className="text-[#777777] mb-3">Blog</li>
        </ul>
      </div>
      <div>
        <p className="uppercase font-bold mb-3">Liên kết</p>
        <div className="flex gap-5 mb-5">
          <img
            className="rounded-full"
            src="https://static.chotot.com/storage/default/facebook.svg"
            alt=""
          />

          <img
            className="rounded-full"
            src="https://static.chotot.com/storage/default/youtube.svg"
            alt=""
          />
          <img
            className="rounded-full"
            src="https://static.chotot.com/storage/default/linkedin.svg"
            alt=""
          />
        </div>
        <p className="uppercase font-bold mb-3">Chứng nhận</p>
        <img src="https://static.chotot.com/storage/default/certificate.webp" alt="" />
      </div>
    </div>
  );
};

export default Footer;
