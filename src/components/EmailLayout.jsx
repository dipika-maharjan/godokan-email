import Header from "./Header";
import Footer from "./VendorFooter";

function EmailLayout({ children }) {
  return (
    <div className="email-layout">
      <Header />
      <main className="email-main">{children}</main>
      <Footer />
    </div>
  );
}

export default EmailLayout;
