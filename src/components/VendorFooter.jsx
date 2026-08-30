import Icon from "./Icons";
import vendorLogo2 from "../../emails/static/vendor-logo2.png";

function VendorFooter() {
  return (
    <footer className="email-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <div className="footer-logo">
            <img src={vendorLogo2} alt="GODOKAN" />
          </div>

          <p>
            <Icon name="globe" />
            <span>godokan.com</span>
          </p>

          <p>
            <Icon name="phone" />
            <span>+977-9852002009</span>
          </p>

          <p>
            <Icon name="mail" />
            <span>hello@godokan.com</span>
          </p>

          <p>
            <Icon name="location" />
            <span>New Road, Kathmandu, Nepal</span>
          </p>
        </div>
      </div>

      <div className="footer-promotion">
        <strong>
          BUY GENUINE PRODUCTS
          <br />
          AT WHOLESALE PRICES.
        </strong>

        <div className="footer-socials">
          <a href="#" aria-label="Facebook">
            <Icon name="facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <Icon name="instagram" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <Icon name="whatsapp" />
          </a>
        </div>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="#">About Us</a>
        <a href="#">Help &amp; Support</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
      </nav>

      <p className="footer-copyright">
        Godokan. Go Dokan Private Limited. All Right Reserved.
      </p>
    </footer>
  );
}

export default VendorFooter;
