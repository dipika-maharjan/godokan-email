import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function PayoutRequest({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "GoDokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
}) {
  return (
    <VendorEmailLayout>
      <article className="payout-request-email" aria-labelledby="payout-title">
        {/* Email status */}
        <p className="payout-request-eyebrow">PAYOUT REQUEST RECEIVED</p>

        {/* Main email heading */}
        <h1 id="payout-title">Your Payout Request Has Been Received</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name */}
        <p className="payout-request-message">
          Your payout request for <strong>{sellerName}</strong> has been
          submitted successfully.
        </p>

        {/* Requested payout amount */}
        <section
          className="payout-amount"
          aria-labelledby="payout-amount-title"
        >
          <h3 id="payout-amount-title">REQUESTED AMOUNT</h3>
          <p>{amount}</p>
        </section>

        {/* Dynamic message submitted by the seller */}
        <section
          className="payout-message"
          aria-labelledby="payout-message-title"
        >
          <h3 id="payout-message-title">MESSAGE</h3>
          <p>{message}</p>
        </section>

        {/* Explains that the request is waiting for review */}
        <section className="payout-next" aria-labelledby="payout-next-title">
          <h3 id="payout-next-title">What happens next?</h3>
          <p>
            Your request is now under review. You&apos;ll receive another
            notification once its status is updated.
          </p>
        </section>

        {/* Dynamic link supplied through the link prop */}
        <VendorEmailButton href={link}>VIEW PAYOUT DETAILS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default PayoutRequest;
