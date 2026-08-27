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
interface ProductsApprovedProps {
  name?: string;
  link?: string;
  sellerName?: string;
  products?: Product[];
}
export default function ProductsApprovedVendor({
  name = "user",
  link = "https://godokan.com/seller/products",
  sellerName = "Godokan",
  products = [],
}: ProductsApprovedProps) {
  return (
    <VendorLayout previewText="Your products have been approved">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        PRODUCTS APPROVED
      </Text>
      <Text className="text-[28px] font-bold">
        Your Products Have Been Approved
      </Text>
      <Text className="text-[24px] font-bold">
        Hello {name},
      </Text>
      <Text className="text-[16px] leading-7">
        Great news! Your product submission has been reviewed and approved.
        <br />
        The following products from {sellerName} are now approved and available
        on Godokan.
      </Text>
      {products.map((product) => (
        <Section
          className="my-4 rounded-lg border border-[#eeeeee] p-5"
          key={product.code}
        >
          <Img src={product.image} width="300" alt={product.name} />
          <Text className="font-bold">{product.name}</Text>
          <Text>
            Product Code: {product.code}
            <br />
            Category: {product.category}
          </Text>
          <VendorButton href={product.url}>VIEW PRODUCT</VendorButton>
        </Section>
      ))}
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW ALL PRODUCTS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
