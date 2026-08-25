import vendorLogo from "../assets/vendor-logo.png";

function Header() {
  return (
    <header className="email-header">
      <img className="email-header__logo" src={vendorLogo} alt="GODOKAN" />
    </header>
  );
}

export default Header;
