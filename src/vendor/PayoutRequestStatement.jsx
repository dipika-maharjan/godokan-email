import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function PayoutRequestStatement({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "GoDokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
  status = "Approved",
  body = "Your payout statement is provided above for your records.",
  payout = {
    payments: [
      { amount: "NPR 20,000", modeOfPayment: "Bank Transfer" },
      { amount: "NPR 5,000", modeOfPayment: "eSewa" },
    ],
    subTotal: "NPR 25,000",
    charges: "NPR 500",
    total: "NPR 24,500",
  },
}) {
  // Protects the email from an omitted payments array
  const payments = Array.isArray(payout.payments) ? payout.payments : [];

  return (
    <VendorEmailLayout>
      <article
        className="payout-statement-email"
        aria-labelledby="statement-title"
      >
        {/* Email type */}
        <p className="payout-statement-eyebrow">PAYOUT STATEMENT</p>

        {/* Main statement heading */}
        <h1 id="statement-title">Payout Statement</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name and status */}
        <p className="payout-statement-intro">
          Your payout request for {sellerName} has been
          processed.
        </p>

        {/* Original payout request details */}
        <section className="statement-details" aria-labelledby="details-title">
          <h3 id="details-title">PAYOUT DETAILS</h3>
          <p>
            <strong>Requested Amount</strong>
            <span>{amount}</span>
          </p>
          <p>
            <strong>Message</strong>
            <span>{message}</span>
          </p>
          <p>
            <strong>Status</strong>
            <span>{status}</span>
          </p>
        </section>

        <section
          className="payment-breakdown"
          aria-labelledby="breakdown-title"
        >
          <h3 id="breakdown-title">PAYMENT BREAKDOWN</h3>
          <div className="payment-breakdown-header">
            <span>Payment Method</span>
            <span>Amount</span>
          </div>

          {payments.map((payment, index) => (
            <div
              className="payment-row"
              key={`${payment.modeOfPayment}-${index}`}
            >
              <span>{payment.modeOfPayment}</span>
              <span>{payment.amount}</span>
            </div>
          ))}

          {/* Statement totals */}
          <div className="statement-total-row">
            <span>Subtotal</span>
            <span>{payout.subTotal}</span>
          </div>
          <div className="statement-total-row">
            <span>Charges</span>
            <span>{payout.charges}</span>
          </div>
          <div className="statement-total-row statement-grand-total">
            <strong>Total</strong>
            <strong>{payout.total}</strong>
          </div>
        </section>

        <p className="payout-statement-body">{body}</p>

        <VendorEmailButton href={link}>VIEW PAYOUT DETAILS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default PayoutRequestStatement;
