import EmailLayout from "../components/VendorEmailLayout";
import EmailButton from "../components/VendorEmailButton";

export default function AccountApproved() {
  return (
    <EmailLayout>
      <article className="approved-email" aria-labelledby="approved-title">
        <p id="approved-title" className="approved-eyebrow">
          ACCOUNT APPROVED
        </p>

        <p className="approved-message">
          Your GoDokan account has been successfully activated.
          <br />
          You can now explore products, view pricing, add items to
          <br />
          your cart, and place your order.
        </p>

        <EmailButton href="https://godokan.com">START SHOPPING</EmailButton>

        <p className="approved-description">
          Explore products from multiple sellers and find
          <br />
          everything you need in one place.
        </p>
      </article>
    </EmailLayout>
  );
}
