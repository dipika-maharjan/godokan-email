import EmailLayout from "../components/VendorEmailLayout";
import EmailButton from "../components/VendorEmailButton";

function AddBusinessDetail() {
  return (
    <EmailLayout>
      <article
        className="add-business-email"
        aria-labelledby="add-business-title"
      >
        <h1 id="add-business-title">COMPLETE YOUR BUSINESS PROFILE</h1>

        <p className="add-business-message">
          Your GoDokan account has been activated.
          <br />
          To start selling, please provide your business details and
          <br />
          complete your seller profile.
        </p>

        <EmailButton href="https://godokan.com/business-details">
          ADD BUSINESS DETAILS
        </EmailButton>

        <section
          className="business-next"
          aria-labelledby="business-next-title"
        >
          <strong id="business-next-title">What&apos;s next?</strong>

          <ol>
            <li>Add your business information</li>
            <li>Submit your details for review</li>
            <li>Complete seller verification</li>
            <li>Start selling on GoDokan</li>
          </ol>
        </section>
      </article>
    </EmailLayout>
  );
}

export default AddBusinessDetail;
