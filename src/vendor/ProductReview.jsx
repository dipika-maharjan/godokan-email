import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function ProductReview({
  name = "user",
  link = "https://godokan.com/seller/feedback",
  sellerName = "GoDokan",

  // Product details displayed in the product card.
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },

  // Review data controls whether review text, rating, or both are shown.
  review = {
    title: "Great product and fast delivery.",
    by: "NewUser",
    url: "https://godokan.com/seller/feedback/1",
    rating: 5,
  },
}) {
  // Convert the optional rating into 0 to 5.
  const rating = Math.max(0, Math.min(5, Number(review.rating) || 0));

  // Generate filled and empty stars dynamically from the rating value.
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? "★" : "☆",
  ).join("");

  return (
    <VendorEmailLayout>
      <article className="product-review-email" aria-labelledby="review-title">
        {/* Email status */}
        <p id="review-title" className="product-review-eyebrow">
          NEW PRODUCT FEEDBACK
        </p>

        {/* Main email heading */}
        <h1>Your Product Received New Feedback</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name */}
        <p className="product-review-message">
          Your product from {sellerName} has received new feedback from a
          customer on GoDokan.
        </p>

        {/* Product details */}
        <section
          className="review-product-card"
          aria-labelledby="review-product-title"
        >
          <img
            className="review-product-image"
            src={product.image}
            alt={product.name}
          />
          <h3 id="review-product-title">{product.name}</h3>
          <p>Product Code: {product.code}</p>
          <p>Category: {product.category}</p>

          {/* product.url opens the individual product page */}
          <VendorEmailButton href={product.url}>VIEW PRODUCT</VendorEmailButton>
        </section>

        {/* Customer feedback section supports review-only, rating-only, or both */}
        <section
          className="customer-review"
          aria-labelledby="customer-review-title"
        >
          <h3 id="customer-review-title">CUSTOMER FEEDBACK</h3>

          {/* Render review text only when review.title exists */}
          {review.title && <p className="review-title">“{review.title}”</p>}

          {/* Render stars only when review.rating is provided */}
          {review.rating !== undefined && review.rating !== null && (
            <p className="review-rating">
              <span aria-hidden="true">{stars}</span> {rating}/5
            </p>
          )}

          {/* Reviewer name is always shown */}
          <p>
            <strong>By {review.by}</strong>
          </p>

          <VendorEmailButton href={review.url}>VIEW FEEDBACK</VendorEmailButton>
        </section>

        <VendorEmailButton href={link}>VIEW ALL FEEDBACKS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default ProductReview;
