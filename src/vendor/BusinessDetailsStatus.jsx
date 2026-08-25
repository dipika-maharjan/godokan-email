import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function BusinessDetailsStatus({
  name = "user",
  link = "https://godokan.com/business-details",
  sellerName = "GoDokan",
  status = "under-review",
  title = "BUSINESS DETAILS STATUS",
  body = "Thank you for submitting your business information.",
}) {
  return (
    <VendorEmailLayout>
      <article className="status-email" aria-labelledby="status-title">
        {/* Dynamic title */}
        <p id="status-title" className="status-eyebrow">
          {title}
        </p>

        {/* Dynamic user name and current status */}
        <p className="status-heading">
          Hello {name}, your business details are {status}
        </p>

        {/* Dynamic body message */}
        <p className="status-intro">
          {body}
          <br />
          Our team is currently reviewing your details.
          <br />
          We&apos;ll notify you once the review is complete.
        </p>

        <div className="status-panel" role="status">
          <div>
            <strong>What&apos;s next?</strong>
            <p>
              Your business details will be reviewed,
              <br />
              followed by the seller verification process.
            </p>
            <small>Seller: {sellerName}</small>
          </div>
        </div>

        <VendorEmailButton href={link}>VIEW BUSINESS DETAILS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default BusinessDetailsStatus;
