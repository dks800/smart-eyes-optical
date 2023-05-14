import React from "react";
import { bannerData } from "../data/bannerData";
import { Link } from "react-router-dom";

const BannerItems = ({ lang }) => {
  return (
    <div className="banner-items">
      {bannerData?.map((data, index) => {
        return (
          <Link to={data?.path} key={index}>
            <div>{data?.title[lang]}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default BannerItems;
