import EmailButton from "../components/EmailButton";

function AccountActivated({
  name = "Sabina",
  link = "#",
  title = "Your account is live!",
  description = "Your account has been activated.\nPlease add your business details\nto start buying.",
  status = "active",
}) {
  return (
    <article className="account-activated" aria-labelledby="activated-title">
      <div className="account-activated__logo" aria-label={`Account status: ${status}`}>
      </div>

      {name && <p className="account-activated__name">Hi, {name}</p>}

      <h1 id="activated-title">{title}</h1>

      <p className="account-activated__text">
        {description.split("\n").map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      <EmailButton href={link}>Add Business Details</EmailButton>

      <p className="account-activated__skip">Skip for now</p>
    </article>
  );
}

export default AccountActivated;
