import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function ProductQuestions({
  name = "user",
  link = "https://godokan.com/seller/questions",
  sellerName = "GoDokan",
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },

  // Customer question data used by the question section.
  question = {
    title: "Is this product available in black?",
    by: "NewUser",
    url: "https://godokan.com/seller/questions/1",
  },
}) {
  return (
    <VendorEmailLayout>
      <article
        className="product-question-email"
        aria-labelledby="question-title"
      >
        {/* Email status */}
        <p className="product-question-eyebrow">PRODUCT QUESTION</p>

        {/* Main email heading */}
        <h1 id="question-title">You Have a Question Regarding Your Product</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name */}
        <p className="product-question-message">
          A customer has posted a question about a product from {sellerName} on
          GoDokan.
          <br />
        </p>

        {/* Product details card */}
        <section
          className="question-product-card"
          aria-labelledby="question-product-title"
        >
          <h3 id="question-product-title">{product.name}</h3>

          <img
            className="question-product-image"
            src={product.image}
            alt={product.name}
          />

          <p>Product Code: {product.code}</p>
          <p>Category: {product.category}</p>

          {/* product.url opens the individual product page */}
          <VendorEmailButton href={product.url}>VIEW PRODUCT</VendorEmailButton>
        </section>

        {/* Customer question details */}
        <section
          className="customer-question"
          aria-labelledby="customer-question-title"
        >
          <h3 id="customer-question-title">CUSTOMER QUESTION</h3>
          <p className="customer-question-title">“{question.title}”</p>
          <p>
            Asked by <strong>{question.by}</strong>
          </p>

          {/* question.url opens the individual question */}
          <VendorEmailButton href={question.url}>
            VIEW QUESTION
          </VendorEmailButton>
        </section>

        {/* link opens the seller's questions dashboard */}
        <VendorEmailButton href={link}>VIEW ALL QUESTIONS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default ProductQuestions;
