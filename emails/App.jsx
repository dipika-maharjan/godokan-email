import "./App.css";
import EmailLayout from "./components/EmailLayout";
import SignUp from "./customers/signup-mail";
import VerifyMail from "./customers/verify-mail";
import AccountActivated from "./customers/account-activated";
import ChangePassword from "./customers/ChangePassword";
import CustomerAdded from "./customers/customer-added";
import PaymentFailed from "./customers/paymentFailed";
import PaymentSuccessful from "./customers/paymentSuccessful";
import OrderFailed from "./customers/OrderFailed";
import ThanksPlacingOrder from "./customers/Thanks-placingOrder";

const emailRoutes = {
  "/customer/signup": SignUp,
  "/customer/verify-mail": VerifyMail,
  "/customer/account-activated": AccountActivated,
  "/customer/change-password": ChangePassword,
  "/customer/customer-added": CustomerAdded,
  "/customer/payment-failed": PaymentFailed,
  "/customer/payment-successful": PaymentSuccessful,
  "/customer/order-failed": OrderFailed,
  "/customer/thanks-placing-order": ThanksPlacingOrder,
};

function App() {
  const path =
    typeof window === "undefined"
      ? "/customer/signup"
      : window.location.pathname.replace(/\/$/, "") || "/";
  const Email = emailRoutes[path] || SignUp;

  return (
    <EmailLayout>
      <Email />
    </EmailLayout>
  );
}

export default App;