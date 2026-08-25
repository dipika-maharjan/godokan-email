import EmailLayout from "../components/VendorEmailLayout";
import EmailButton from "../components/VendorEmailButton";

// semantic colors based on the status
const statusColors = {
  approved: "#16803c",
  pending: "#a15c00",
  "under-review": "#2563a8",
  rejected: "#c62828",
  suspended: "#c62828",
};

export default function AccountApproved({
  name = "user",
  status = "approved",
  link = "https://godokan.com",
  title = "ACCOUNT APPROVED",
  body = "Your GoDokan account has been successfully activated.",
}) {
  // This lets the same status work with the CSS class and color lookup.
  const normalizedStatus = String(status)
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-");

  // Use a neutral fallback when the backend sends an unknown status.
  const statusColor = statusColors[normalizedStatus] || "#555555";

  return (
    <EmailLayout>
      <article className="approved-email" aria-labelledby="approved-title">
        <p id="approved-title" className="approved-eyebrow">
          {title}
        </p>

        <h1>Hello {name},</h1>

        <p className="approved-message">
          {body}
          <br />
          <br />
          <strong
            // The inline fallback ensures unknown statuses remain readable.
            style={{ color: statusColor }}
            className={`account-status status-${normalizedStatus.replaceAll(" ", "-")}`}
          >
            Account status: {status}
          </strong>
          <br />
          <br />
          You can now explore products, view pricing, add items to
          <br />
          your cart, and place your order.
        </p>

        <EmailButton href={link}>START SHOPPING</EmailButton>

        <p className="approved-description">
          Explore products from multiple sellers and find
          <br />
          everything you need in one place.
        </p>
      </article>
    </EmailLayout>
  );
}
