import vendorLogo from "../../emails/static/vendor-logo.png";

function VendorHeader() {
  return (
    <header className="email-header">
      <img className="email-header__logo" src={vendorLogo} alt="GODOKAN" />
    </header>
  );
}

export default VendorHeader;
