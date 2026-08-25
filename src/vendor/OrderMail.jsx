import VendorEmailLayout from "../components/VendorEmailLayout";
import VendorEmailButton from "../components/VendorEmailButton";

function OrderMail({
  name = "user",
  link = "https://godokan.com/seller/orders",
  sellerName = "GoDokan",
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },

  // Order number and buyer/order source supplied by the backend.
  orderNumber = "#GD-1111",
  orderFrom = "NewUser",
}) {
  return (
    <VendorEmailLayout>
      <article className="order-email" aria-labelledby="order-title">
        {/* Email status */}
        <p className="order-eyebrow">NEW ORDER RECEIVED</p>

        {/* Main email heading */}
        <h1 id="order-title">You Have a New Order</h1>

        {/* Dynamic recipient name and seller name */}
        <h2>Hi, {name}</h2>
        <p className="order-message">
          Great news! You have received a new order through GoDokan.
          <br />
          Seller: <strong>{sellerName}</strong>
        </p>

        {/* Dynamic order metadata */}
        <section
          className="order-details"
          aria-labelledby="order-details-title"
        >
          <h3 id="order-details-title">ORDER DETAILS</h3>
          <p>
            <strong>Order Number:</strong> {orderNumber}
          </p>
          <p>
            <strong>Order From:</strong> {orderFrom}
          </p>
        </section>

        {/* Product details from the product prop */}
        <section
          className="order-product-card"
          aria-labelledby="order-product-title"
        >
          <img
            className="order-product-image"
            src={product.image}
            alt={product.name}
          />
          <h3 id="order-product-title">{product.name}</h3>
          <p>Product Code: {product.code}</p>
          <p>Category: {product.category}</p>

          <VendorEmailButton href={product.url}>VIEW PRODUCT</VendorEmailButton>
        </section>

        {/* link opens the complete order details page */}
        <VendorEmailButton href={link}>VIEW ORDER</VendorEmailButton>
      </article>
    </VendorEmailLayout>
  );
}

export default OrderMail;
