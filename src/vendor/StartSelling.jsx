import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function StartSelling({
  name = "user",
  link = "https://godokan.com/seller/products",
  sellerName = "GoDokan",

  // An empty value uses the default message below.
  body = "",
}) {
  // Keep the screen useful during preview even when no body is supplied.
  const message =
    body ||
    `Congratulations! Your seller account for ${sellerName} has been successfully verified.\n\nYou can now start adding products, managing your store, and reaching customers through GoDokan.`;

  return (
    <VendorEmailLayout>
      <article
        className="start-selling-email"
        aria-labelledby="start-selling-title"
      >
        {/* Current seller account status */}
        <p id="start-selling-title" className="start-selling-eyebrow">
          SELLER ACCOUNT VERIFIED
        </p>

        {/* Main email heading */}
        <h1>You Can Now Start Selling</h1>

        {/* Personalized greeting */}
        <h2>Hi, {name}</h2>

        {/* Dynamic body preserves blank lines from the supplied message */}
        <p className="start-selling-message">{message}</p>

        {/* Dynamic link supplied by the backend */}
        <VendorEmailButton href={link}>START SELLING</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default StartSelling;
