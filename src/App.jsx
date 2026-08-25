import "./App.css";
import EmailLayout from "./components/EmailLayout";
import SignupMail from "./Customer/signup-mail";

function App() {
  return (
    <EmailLayout>
      <SignupMail />
    </EmailLayout>
  );
}

export default App;
