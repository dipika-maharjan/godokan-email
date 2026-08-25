import Header from "./components/VendorHeader";
import "./App.css";
import Footer from "./components/VendorFooter";
import BusinessDetailsStatus from "./vendor/BusinessDetailsStatus";
import SignUp from "./vendor/SignUp";
import VerifyEmail from "./vendor/VerifyEmail";
import AccountApproved from "./vendor/AccountApproved";
import AddBusinessDetail from "./vendor/AddBusinessDetail";

function App() {
  // To read the URL path from the browser.
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/vendor/signup") {
    return(
      <SignUp 
    name="user"
    link="https://godokan.com"
    />
    );
  }

  if (path === "/vendor/verify-email") {
    return(
      <VerifyEmail
      name="user"
      link="https://godokan.com/verify-email" 
      />
    );
  }

  if (path === "/vendor/account-approved") {
    return (
      <AccountApproved
        name="user"
        status="approved"
        title="ACCOUNT APPROVED"
        body="Your GoDokan account has been successfully activated."
        link="https://godokan.com"
      />
    );
  }

  if (path === "/vendor/add-business-detail") {
    return (
      <AddBusinessDetail
        name="user"
        link="https://godokan.com/business-details"
      />
    );
  }

  if (path === "/vendor/business-details-status") {
    return (
      <BusinessDetailsStatus
        name="user"
        sellerName="GoDokan"
        status="under-review"
        title="BUSINESS DETAILS STATUS"
        body="Thank you for submitting your business information."
        link="https://godokan.com/business-details"
      />
    );
  }

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
