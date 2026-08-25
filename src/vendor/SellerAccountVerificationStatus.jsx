import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function SellerAccountVerificationStatus({
  name = "user",
  link = "https://godokan.com/verification-status",
  sellerName = "GoDokan",
  status = "under-review",
  title = "VERIFICATION IN PROGRESS",
  body = "We've received the verification details for",
}) {
  return (
    <VendorEmailLayout>
      <article
        className="seller-verification-email"
        aria-labelledby="seller-verification-title"
        data-status={status}
      >
        {/* Dynamic verification status heading */}
        <p
          id="seller-verification-title"
          className="seller-verification-eyebrow"
        >
          {title}
        </p>

        {/* Main title describes the current seller account state */}
        <h1>Your Seller Account Verification Is Under Review</h1>
        <h2>Hi, {name}</h2>
        {/* Recipient name and seller name come from props */}
        <p className="seller-verification-message">
          {body} <strong>{sellerName}</strong>.
          <br />
          <br />
          Our team is currently reviewing your information. We&apos;ll notify
          you once the verification process is complete and let you know the
          next steps.
        </p>

        {/* Optional next-step information section */}
        <section className="seller-verification-next">
          <h2>What happens next?</h2>
          <p>
            Once your seller account is verified, you&apos;ll be able to start
            selling and manage your products on GoDokan.
          </p>
        </section>

        {/* The link prop controls the destination of this button */}
        <VendorEmailButton href={link}>
          VIEW VERIFICATION STATUS
        </VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default SellerAccountVerificationStatus;
