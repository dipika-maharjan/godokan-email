import EmailButton from "../components/EmailButton";

function OrderFailed({ 
    name= "",
    link = "#" }) {
  return (
    <article className="status-card status-card--danger" aria-labelledby="order-failed-title">
      <div className="status-card__badge status-card__badge--danger" aria-hidden="true">
        !
      </div>

      <h1 id="order-failed-title">Order failed</h1>
      <p>
        We were unable to complete your order.
        <br />
        Please check your details and try again.
      </p>

      <EmailButton href={link}>Review Order</EmailButton>
    </article>
  );
}

export default OrderFailed;
