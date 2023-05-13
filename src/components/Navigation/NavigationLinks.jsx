import { Link } from "react-router-dom";
import { bannerData } from "../data/bannerData";
import langIcon from "../../img/lang-icon.png";
import { useEffect, useState } from "react";

const NavigationLinks = () => {
  const [isWebDevice, setIsWebDevice] = useState(true);
  useEffect(() => {
    let width = window?.screen?.width;
    if (width < 480) setIsWebDevice(false);
  }, []);
  return (
    <>
      {isWebDevice && (
        <>
          {bannerData?.map((data, index) => {
            return (
              <div key={index}>
                <Link to={data.path}>{data.title}</Link>
              </div>
            );
          })}
          <div className="language" title="Change Language">
            <img src={langIcon} alt="Language" loading="lazy" />
            <select>
              <option>English</option>
              <option>Português</option>
            </select>
          </div>
        </>
      )}
    </>
  );
};

export default NavigationLinks;
