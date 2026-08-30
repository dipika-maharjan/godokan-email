function Footer() {
  return (
    <footer className="email-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <div className="footer-logo">
            <img
              src="https://godokan.com/logo_grey.png"
              alt="GODOKAN"
            />
          </div>

          <p>
            <span>godokan.com</span>
          </p>

          <p>
            <span>+977-9852002009</span>
          </p>

          <p>
            <span>hello@godokan.com</span>
          </p>

          <p>
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
          <a href="https://www.facebook.com/godokannepal" aria-label="Facebook">
            Facebook
          </a>
          <a href="https://www.instagram.com/go.dokan/" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://wa.me/godokan" aria-label="WhatsApp">
            WhatsApp
          </a>
          <a href="https://www.youtube.com/@godokan" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="https://godokan.com/help/getting-started/about-go-dokan">About Us</a>
        <a href="https://godokan.com/support">Help &amp; Support</a>
        <a href="https://godokan.com/help/legal/privacy-policy">Privacy Policy</a>
        <a href="https://godokan.com/help/legal/terms-and-conditions">Terms and Conditions</a>
      </nav>

      <p className="footer-copyright">
        Godokan. Go Dokan Private Limited. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
