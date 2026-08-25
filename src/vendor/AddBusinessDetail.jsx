import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function AddBusinessDetail({
    name="user",
    link="https://godokan.com/business-details",
}) {
  return (
    <VendorEmailLayout>
      <article
        className="add-business-email"
        aria-labelledby="add-business-title"
      >
        <h1 id="add-business-title">COMPLETE YOUR BUSINESS PROFILE</h1>
        {/* Dynamic name and onboarding message */}
        <h2>Hello {name},</h2>
        <p className="add-business-message">
          Your GoDokan account has been activated.
          <br />
          To start selling, please provide your business details and
          <br />
          complete your seller profile.
        </p>

        {/* Dynamic business details URL */}
        <VendorEmailButton href={link}>
          ADD BUSINESS DETAILS
        </VendorEmailButton>

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
    </VendorEmailLayout>
  );
}

export default AddBusinessDetail;
