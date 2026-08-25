import Header from "./components/VendorHeader";
import "./App.css";
import Footer from "./components/VendorFooter";
import BusinessDetailsStatus from "./vendor/BusinessDetailsStatus";
import SignUp from "./vendor/SignUp";
import VerifyEmail from "./vendor/VerifyEmail";
import AccountApproved from "./vendor/AccountApproved";
import AddBusinessDetail from "./vendor/AddBusinessDetail";
import SellerAccountVerificationStatus from "./vendor/SellerAccountVerificationStatus";
import StartSelling from "./vendor/StartSelling";
import AddProducts from "./vendor/AddProducts";

function App() {
  // To read the URL path from the browser.
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/vendor/signup") {
    return <SignUp name="user" link="https://godokan.com" />;
  }

  if (path === "/vendor/verify-email") {
    return <VerifyEmail name="user" link="https://godokan.com/verify-email" />;
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

  if (path === "/vendor/seller-account-verification-status") {
    return (
      <SellerAccountVerificationStatus
        name="user"
        sellerName="GoDokan"
        status="under-review"
        title="VERIFICATION IN PROGRESS"
        body="We've received the verification details for"
        link="https://godokan.com/verification-status"
      />
    );
  }

  if (path === "/vendor/start-selling") {
    return (
      <StartSelling
        name="user"
        sellerName="GoDokan"
        link="https://godokan.com/seller/products"
      />
    );
  }

  if (path === "/vendor/add-products") {
    return (
      <AddProducts
        name="user"
        sellerName="GoDokan"
        link="https://godokan.com/seller/products/new"
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
