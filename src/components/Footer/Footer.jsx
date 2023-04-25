import logo2 from "../../img/logo-mobile.png";
import "./footer.css";

function Footer() {
  const middleFooterData = [
    {
      title: "Eyewear",
      items: ["Women's", "Men's", "Kids"],
    },
    {
      title: "Brands",
      items: [
        "Hugo Boss",
        "Mont Blanc",
        "D&G",
        "Prada",
        "Tom Ford",
        "Tomy Hilfiger",
        "Fastrack",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="address">
            <h5>Address:</h5>
            <p>
              <strong>Head Office:</strong> Av Doutor Nkutumula - Talhao 26, R/C
              - Loja - 1, Matola - A, Cidade Da Matola
            </p>
            <p>
              <strong>Branch:</strong> Av Das Industrias No. 773 Machava -
              Matola 879010412
            </p>
          </div>
          <div className="phone">
            <h5>Phone:</h5>
            <p>+25 88 298 78361</p>
            <p>+25 88 467 82927</p>
          </div>
          <div className="Email">
            <h5>Email:</h5>
            <p>smarteyesopticalmaputo@gmail.com</p>
          </div>
        </div>
        <div className="middle">
          {middleFooterData?.length > 0 &&
            middleFooterData.map((data, idx) => {
              return (
                <div className={data.title} key={idx}>
                  <h5>{data.title}</h5>
                  <ul>
                    {data?.items?.map((item, id) => {
                      return (
                        <li key={id} title={item}>
                          <a href={item}>{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
        <div className="right">
          <img src={logo2} alt="Footer Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;