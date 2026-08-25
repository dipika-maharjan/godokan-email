import EmailButton from "../components/EmailButton";

function PaymentSuccessful({ 
    name= "Customer",
    link = "#" }) {
  return (
    <article className="status-card status-card--success" aria-labelledby="payment-success-title">
      <div className="status-card__badge status-card__badge--success" aria-hidden="true">
        ✓
      </div>

      <h1 id="payment-success-title">Payment successful</h1>
      <p>
        Your payment has been received successfully.
        <br />
        We are preparing your order for dispatch.
      </p>

      <EmailButton href={link}>Track Order</EmailButton>
    </article>
  );
}

export default PaymentSuccessful;
