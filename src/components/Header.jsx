import customLogo from "../assets/customer-logo.png";

function Header() {
  return (
    <header className="email-header">
      <img className="email-header__logo" src={customLogo} alt="GODOKAN" />
    </header>
  );
}

export default Header;
