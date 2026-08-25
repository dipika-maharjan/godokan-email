import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function ProductsApproved({
  name = "user",
  link = "https://godokan.com/seller/products",
  sellerName = "GoDokan",

  // Product list supplied by the backend.
  products = [],
}) {
  return (
    <VendorEmailLayout>
      <article
        className="products-approved-email"
        aria-labelledby="products-approved-title"
      >
        {/* Email status */}
        <p className="products-approved-eyebrow">PRODUCTS APPROVED</p>

        {/* Main email heading */}
        <h1 id="products-approved-title">Your Products Have Been Approved</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name */}
        <p className="products-approved-message">
          Great news! Your product submission has been reviewed and approved.
          <br />
          The following products from {sellerName} are now
          approved and available on GoDokan.
        </p>

        {/* Render one product card for every item in the products array */}
        <div className="approved-products">
          {products.map((product) => (
            <article className="approved-product-card" key={product.code}>
              {/* Product image comes from product.image */}
              <img
                className="approved-product-image"
                src={product.image}
                alt={product.name}
              />

              {/* Product information comes from the current array item */}
              <h3>{product.name}</h3>
              <p>Product Code: {product.code}</p>
              <p>Category: {product.category}</p>

              <VendorEmailButton href={product.url}>
                VIEW PRODUCT
              </VendorEmailButton>
            </article>
          ))}
        </div>

        {/* link opens the seller's complete product dashboard */}
        <VendorEmailButton href={link}>VIEW ALL PRODUCTS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default ProductsApproved;
