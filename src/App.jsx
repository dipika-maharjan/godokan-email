import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import BusinessDetailsStatus from "./vendor/BusinessDetailsStatus";
import SignUp from "./vendor/SignUp";
import VerifyEmail from "./vendor/VerifyEmail";

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

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
