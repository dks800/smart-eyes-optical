import { brandNames } from "../data/brandData";
import "./brands.css";

function ProductList({ displayBrandLogo }) {
  return (
    <div className="brand-names">
      {brandNames?.map((brand, idx) => {
        return (
          <div key={idx} id={`brand-${brand.id}`}>
            {displayBrandLogo && (
              <>
                <div className="name">
                  <img src={brand.brandLogo} alt="Brand Logo" />
                </div>
              </>
            )}
            <div className="brand-images">
              {brand?.images?.map((image, idx) => {
                return (
                  <div className="brand-card" key={idx}>
                    <div className="image-header">
                      <img loading="lazy" src={image.url} alt="Brand" />
                    </div>
                    <h4>{image.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
