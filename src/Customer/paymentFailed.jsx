import EmailButton from "../components/EmailButton";

function PaymentFailed({
    name = "",
     link = "#" ,
    }) {
  return (
    <article className="status-card status-card--danger" aria-labelledby="payment-failed-title">
      <div className="status-card__badge status-card__badge--danger" aria-hidden="true">
        !
      </div>

      <h1 id="payment-failed-title">Payment failed</h1>
      <p>
        We couldn&apos;t process your latest payment.
        <br />
        Please try again to complete your order.
      </p>

      <EmailButton href={link}>Retry Payment</EmailButton>
    </article>
  );
}

export default PaymentFailed;
