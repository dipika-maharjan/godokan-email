import EmailLayout from "../components/EmailLayout";
import EmailButton from "../components/EmailButton";

function BusinessDetailsStatus() {
  return (
    <EmailLayout>
      <article className="status-email" aria-labelledby="status-title">
        <p className="status-eyebrow">BUSINESS ACCOUNT</p>
        <h1 id="status-title">Business details received</h1>
        <p className="status-intro">
          Thank you for sharing your business details with GoDokan. We have
          received your information and our team is reviewing it now.
        </p>

        <div className="status-panel" role="status">
          <span className="status-indicator" aria-hidden="true" />
          <div>
            <strong>Review in progress</strong>
            <p>We will notify you by email once your account is approved.</p>
          </div>
        </div>

        <section className="next-section" aria-labelledby="next-title">
          <h2 id="next-title">What happens next?</h2>
          <p>
            Our team will verify your business information. This usually takes
            one to two business days.
          </p>
        </section>

        <EmailButton href="https://godokan.com">Visit GoDokan</EmailButton>

        <p className="status-help">
          Need help? Contact us at{" "}
          <a href="mailto:hello@godokan.com">hello@godokan.com</a>.
        </p>
      </article>
    </EmailLayout>
  );
}

export default BusinessDetailsStatus;
