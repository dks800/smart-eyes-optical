import { Link } from "react-router-dom";
import { bannerData } from "../data/bannerData";

const NavigationLinks = ({ lang }) => {
  return (
    <>
      {bannerData?.map((data, index) => {
        return (
          <div key={index}>
            <Link to={data?.path}>{data?.title[lang]}</Link>
          </div>
        );
      })}
    </>
  );
};

export default NavigationLinks;
