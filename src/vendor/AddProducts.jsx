import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function AddProducts({
  // Personalizes the greeting for the seller receiving this email.
  name = "user",

  // Controls the destination of the ADD PRODUCTS button.
  link = "https://godokan.com/seller/products/new",

  // Identifies the seller account that is ready to add products.
  sellerName = "GoDokan",
}) {
  return (
    <VendorEmailLayout>
      <article
        className="add-products-email"
        aria-labelledby="add-products-title"
      >
        {/* Eyebrow shows the current onboarding step */}
        <p className="add-products-eyebrow">READY TO START SELLING?</p>

        {/* Main title for this email */}
        <h1 id="add-products-title">Add Your Products</h1>

        {/* Dynamic recipient name */}
        <h2>Hi, {name}</h2>

        {/* Dynamic seller name */}
        <p className="add-products-message">
          Your seller account for {sellerName} is ready.
          <br />
          Start adding your products to your store and make them available for
          <br />
          customers on GoDokan.
        </p>

        {/* Explains the product setup tasks the seller can complete */}
        <section
          className="add-products-next"
          aria-labelledby="add-products-next-title"
        >
          <h3 id="add-products-next-title">What you can do</h3>
          <ul>
            <li>Add product details</li>
            <li>Upload product images</li>
            <li>Set pricing and categories</li>
            <li>Submit products for approval</li>
          </ul>
        </section>

        {/* Dynamic link supplied through the link prop */}
        <VendorEmailButton href={link}>ADD PRODUCTS</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default AddProducts;
