import Header from "./components/Header";
import "./App.css";
import Footer from "./components/VendorFooter";
import BusinessDetailsStatus from "./vendor/BusinessDetailsStatus";
import SignUp from "./vendor/SignUp";
import VerifyEmail from "./vendor/VerifyEmail";
import AccountApproved from "./vendor/AccountApproved";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/vendor/business-details-status") {
    return <BusinessDetailsStatus />;
  }

  if (path === "/vendor/signup") {
    return <SignUp />;
  }

  if (path === "/vendor/verify-email") {
    return <VerifyEmail />;
  }

  if (path === "/vendor/account-approved") {
    return <AccountApproved />;
  }

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
