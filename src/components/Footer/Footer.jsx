import logo2 from "../../img/logo-mobile.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="address">
            <h5>Address:</h5>
            <p>
              <strong>Sede:</strong> Av Doutor Nkutumula - Talhao 26, R/C - Loja
              - 1, Matola - A, Cidade Da Matola
            </p>
            <p>
              <strong>Sucursal</strong> Av Das Industrias No. 773 Machava -
              Matola 879010412
            </p>
          </div>
          <div className="phone">
            <h5>Phone:</h5>
            <p>+258829878361</p>
            <p>+258846782927</p>
          </div>
          <div className="Email">
            <h5>Email:</h5>
            <p>smarteyesopticalmaputo@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <img src={logo2} alt="Footer Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
