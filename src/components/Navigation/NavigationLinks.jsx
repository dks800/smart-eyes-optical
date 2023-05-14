import { Link } from "react-router-dom";
import { bannerData } from "../data/bannerData";
import { useContext } from "react";
import { DeviceContext } from "../../DeviceContext";

const NavigationLinks = ({ lang }) => {
  const isWebDevice = useContext(DeviceContext);
  return (
    <>
      {isWebDevice && (
        <>
          {bannerData?.map((data, index) => {
            return (
              <div key={index}>
                <Link to={data?.path}>{data?.title[lang]}</Link>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default NavigationLinks;
