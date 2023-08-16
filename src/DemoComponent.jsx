import React from "react";

function DemoComponent({ image, title, imgLogo,nameChanel, dateUp, view }) {
  return (
    <div className="">
      <div>
        <div className="mb-5">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <div className="flex gap-5">
          <div>
            <img className="rounded-full" src={imgLogo} alt="" />
          </div>
          <div>
            <p className="text-base font-bold">{title}</p>
            <p>{nameChanel}</p>
            <div className="flex gap-2">
              <p>{view}</p>
              <p>{dateUp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoComponent;
