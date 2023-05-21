import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./carousel.css";

export const Carousel = ({ data }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data?.map((image, index) => {
          return (
            <div className="embla__slide" key={index}>
              <img src={image} alt="Carousel Data" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
