import EmailLayout from "../components/EmailLayout";
import EmailButton from "../components/EmailButton";

function VerifyEmail() {
  return (
    <EmailLayout>
      <article className="verify-email">
        <p className="verify-eyebrow">VERIFY YOUR EMAIL</p>

        <p className="verify-message">
          We've sent a verification link to your email address.
          <br />
          Please verify your email to activate your GoDokan account
          <br />
          and get started.
        </p>

        <EmailButton href="https://godokan.com/verify-">
          CHECK YOUR EMAIL
        </EmailButton>

        <p className="verify-help">
          Didn&apos;t receive the email?
          <br />
          Check your spam or junk folder, or request a new verification email.
        </p>
        <br/>
      </article>
    </EmailLayout>
  );
}

export default VerifyEmail;
