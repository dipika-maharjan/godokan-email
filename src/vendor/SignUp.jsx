import EmailLayout from "../../components/EmailLayout";
import EmailButton from "../../components/EmailButton";

function SignUp() {
  return (
    <EmailLayout>
      <article className="signup-email">
        <p className="signup-eyebrow">WELCOME TO GODOKAN</p>

        <h1 id="signup-title">Thank your for signing up!</h1>

        <p className="signup-message">
          We're excited to have you on GoDokan!
          <br />
          Your account has been successfully created.
        </p>
        <br />

        <EmailButton href="https://godokan.com">EXPLORE GODOKAN</EmailButton>

        <p>
          Discover products from multiple sellers
          <br />
          all in one place.
        </p>
        <br />
      </article>
    </EmailLayout>
  );
}

export default SignUp;
