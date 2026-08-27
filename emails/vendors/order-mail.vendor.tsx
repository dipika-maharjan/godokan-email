import { Img, Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface Product {
  name: string;
  code: string;
  image: string;
  category: string;
  url: string;
}
interface OrderMailProps {
  name?: string;
  link?: string;
  sellerName?: string;
  product?: Product;
  orderNumber?: string;
  orderFrom?: string;
}
export default function OrderMailVendor({
  name = "user",
  link = "https://godokan.com/seller/orders",
  sellerName = "Godokan",
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },
  orderNumber = "#GD-1111",
  orderFrom = "NewUser",
}: OrderMailProps) {
  return (
    <VendorLayout previewText="You have received a new Godokan order">
      <Text className="text-[13px] font-bold tracking-[1px] text-[#806600]">
        NEW ORDER RECEIVED
      </Text>
      <Text className="text-[28px] font-bold">You Have a New Order</Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text>
        Great news! You have received a new order through Godokan.
        <br />
        <strong>Seller: {sellerName}</strong>
      </Text>
      <Section className="rounded-lg bg-[#ffffe0] p-5">
        <Text className="font-bold">ORDER DETAILS</Text>
        <Text>
          <strong>Order Number:</strong> {orderNumber}
          <br />
          <strong>Order From:</strong> {orderFrom}
        </Text>
      </Section>
      <Section className="my-4 rounded-lg border border-[#eeeeee] p-5">
        <Img src={product.image} width="300" alt={product.name} />
        <Text className="font-bold">{product.name}</Text>
        <Text>
          Product Code: {product.code}
          <br />
          Category: {product.category}
        </Text>
        <VendorButton href={product.url}>VIEW PRODUCT</VendorButton>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW ORDER</VendorButton>
      </Section>
    </VendorLayout>
  );
}
