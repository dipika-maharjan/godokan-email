import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

// Maps common payout states to readable semantic colors.
const payoutStatusColors = {
  approved: "#16803c",
  rejected: "#c62828",
  processing: "#2563a8",
  pending: "#a15c00",
};

function PayoutRequestStatus({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "GoDokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
  status = "Approved",
  body = "Your payout request has been approved and is being processed. The amount will be transferred according to the selected payout method.",
}) {
  // Normalizes values such as "Under Review" for color-map lookup.
  const normalizedStatus = String(status)
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-");

  // Uses a neutral color for an unknown status.
  const statusColor = payoutStatusColors[normalizedStatus] || "#555555";

  return (
    <VendorEmailLayout>
      <article
        className="payout-status-email"
        aria-labelledby="payout-status-title"
      >
        <p className="payout-status-eyebrow">PAYOUT REQUEST UPDATE</p>

        <h1 id="payout-status-title">Your Payout Request Has Been {status}</h1>

        <h2>Hi, {name}</h2>

        <p className="payout-status-message">
          Your payout request for {sellerName} has been
          updated.
        </p>

        {/* Requested amount from the original payout request */}
        <section
          className="payout-status-amount"
          aria-labelledby="status-amount-title"
        >
          <h3 id="status-amount-title">REQUESTED AMOUNT</h3>
          <p>{amount}</p>
        </section>

        {/* Original seller message */}
        <section
          className="payout-status-message-box"
          aria-labelledby="status-message-title"
        >
          <h3 id="status-message-title">MESSAGE</h3>
          <p>{message}</p>
        </section>

        <section
          className="payout-status-update"
          aria-labelledby="status-update-title"
        >
          <h3 id="status-update-title">STATUS UPDATE</h3>
          <p>{body}</p>
          <strong style={{ color: statusColor }}>Status: {status}</strong>
        </section>

        {/* link controls the payout details destination */}
        <VendorEmailButton href={link}>VIEW PAYOUT DETAILS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default PayoutRequestStatus;
