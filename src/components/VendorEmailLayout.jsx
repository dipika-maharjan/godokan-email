import VendorHeader from "./VendorHeader";
import VendorFooter from "./VendorFooter";

function VendorEmailLayout({ children }) {
  return (
    <div className="email-layout">
      <VendorHeader />
      <main className="email-main">{children}</main>
      <VendorFooter />
    </div>
  );
}

export default VendorEmailLayout;
