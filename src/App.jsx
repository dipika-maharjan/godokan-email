import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import BusinessDetailsStatus from "./vendor/BusinessDetailsStatus";
import SignUp from "./vendor/SignUp";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/vendor/business-details-status") {
    return <BusinessDetailsStatus />;
  }

    if (path === "/vendor/signup") {
    return <SignUp />;
  }

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
