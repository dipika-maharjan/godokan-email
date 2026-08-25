import EmailLayout from "../components/VendorEmailLayout";
import EmailButton from "../components/VendorEmailButton";

function BusinessDetailsStatus() {
  return (
    <EmailLayout>
      <article className="status-email" aria-labelledby="status-title">
        <p id="status-title" className="status-eyebrow">
          BUSINESS DETAILS STATUS
        </p>

        <p className="status-heading">We've received your business details</p>

        <p className="status-intro">
          Thank you for submitting your business information.
          <br />
          Our team is currently reviewing your details.
          <br />
          We&apos;ll notify you once the review is complete and let you know
          <br />
          about the next steps.
        </p>

        <div className="status-panel" role="status">
          <div>
            <strong>What&apos;s next?</strong>
            <p>
              Your business details will be reviewed,
              <br />
              followed by the seller verification process.
            </p>
          </div>
        </div>

        <EmailButton href="https://godokan.com/business-details">
          VIEW BUSINESS DETAILS
        </EmailButton>
      </article>
    </EmailLayout>
  );
}

export default BusinessDetailsStatus;
