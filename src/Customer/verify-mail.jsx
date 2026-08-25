import EmailButton from "../components/EmailButton";

function VerifyMail({ name = "", link = "#" }) {
  return (
    <article className="verify-mail" aria-labelledby="verify-title">
      <div className="verify-mail__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" aria-label="Mail icon">
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
          <path d="M5 7.5 12 13l7-5.5" />
        </svg>
      </div>

      <h1 id="verify-title">One last step...</h1>

      <p className="verify-mail__text">
				{name ? `Hi ${name},` : "Hi,"}
				<br />
        We&apos;re excited to have you on board.
        <br />
        Please verify your email address to unlock
        <br />
        full access to your Godokan account.
      </p>

      <EmailButton href={link}>Verify Email Address</EmailButton>

      <p className="verify-mail__note">
        If you didn&apos;t create an account, you can safely ignore this
        <br />
        email.
      </p>
    </article>
  );
}

export default VerifyMail;
