import "./App.css";
import EmailLayout from "./components/EmailLayout";
import SignUp from "./Customer/signup-mail";
import VerifyMail from "./Customer/verify-mail";
import AccountActivated from "./Customer/account-activated";
import ChangePassword from "./Customer/ChangePassword";
import CustomerAdded from "./Customer/customer-added";
import PaymentFailed from "./Customer/paymentFailed";
import PaymentSuccessful from "./Customer/paymentSuccessful";
import OrderFailed from "./Customer/OrderFailed";
import ThanksPlacingOrder from "./Customer/Thanks-placingOrder";

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
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const Email = emailRoutes[path] || SignUp;

  return (
    <EmailLayout>
      <Email />
    </EmailLayout>
  );
}

export default App;