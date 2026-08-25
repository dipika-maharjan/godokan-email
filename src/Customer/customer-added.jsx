import EmailButton from "../components/EmailButton";

function CustomerAdded({ link = "#" }) {
  return (
    <article className="status-card" aria-labelledby="customer-added-title">
      <div className="status-card__badge status-card__badge--success" aria-hidden="true">
        ✓
      </div>

      <h1 id="customer-added-title">Customer added</h1>
      <p>
        A new customer has been successfully added to your account.
        <br />
        You can now manage their details and orders.
      </p>

      <EmailButton href={link}>View Dashboard</EmailButton>
    </article>
  );
}

export default CustomerAdded;
