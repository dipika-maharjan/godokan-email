import EmailButton from "../components/EmailButton";

function ThanksPlacingOrder({ link = "#" }) {
  return (
    <article className="status-card" aria-labelledby="thanks-order-title">
      <div className="status-card__badge status-card__badge--success" aria-hidden="true">
        ✓
      </div>

      <h1 id="thanks-order-title">Thanks for placing your order</h1>
      <p>
        Your order has been received and is now being processed.
        <br />
        We will keep you updated as it moves through fulfillment.
      </p>

      <EmailButton href={link}>View Order</EmailButton>
    </article>
  );
}

export default ThanksPlacingOrder;
