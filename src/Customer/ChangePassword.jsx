import EmailButton from "../components/EmailButton";



function ChangePassword({ 
    name = "",
    link = "#" }) {

  return (
    <article className="status-card" aria-labelledby="change-password-title">
      <div className="status-card__badge" aria-hidden="true">
        🔒
      </div>

      <h1 id="change-password-title">Change your password</h1>
      <p>
        We received a request to change your password.
        <br />
        If this was you, please continue to reset it.
      </p>

      <EmailButton href={link}>Reset Password</EmailButton>
    </article>
  );
}

export default ChangePassword;
