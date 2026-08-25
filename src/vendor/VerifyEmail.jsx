import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function VerifyEmail({
  name="user",
  link="https://godokan.com/verify-email",
}) {
  return (
    <VendorEmailLayout>
      <article className="verify-email">
        <p className="verify-eyebrow">VERIFY YOUR EMAIL</p>

        {/* dynamic name and verification instructions */}
        <h1>Hello {name},</h1>
        <p className="verify-message">
          We&apos;ve sent a verification link to your email address.
          <br />
          Please verify your email to activate your GoDokan account
          <br />
          and get started.
        </p>

        {/* dynamic verification URL */}
        <VendorEmailButton href={link}>
          CHECK YOUR EMAIL
        </VendorEmailButton>

        <p className="verify-help">
          <br />
          Didn&apos;t receive the email?
          <br />
          Check your spam or junk folder, or request a new verification email.
        </p>
        <br />
      </article>
    </VendorEmailLayout>
  );
}

export default VerifyEmail;
