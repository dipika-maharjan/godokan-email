import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface AddProductsProps {
  name?: string;
  link?: string;
  sellerName?: string;
}
export default function AddProductsVendor({
  name = "user",
  link = "https://godokan.com/seller/products/new",
  sellerName = "GoDokan",
}: AddProductsProps) {
  return (
    <VendorLayout previewText="Your seller account is ready for products">
      <Text className="text-[13px] font-bold tracking-[1px] text-[#806600]">
        READY TO START SELLING?
      </Text>
      <Text className="text-[28px] font-bold">Add Your Products</Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text className="text-[16px] leading-7">
        Your seller account for {sellerName} is ready.
        <br />
        Start adding your products to your store and make them available for
        customers on Godokan.
      </Text>
      <Section className="rounded-lg bg-[#ffffe0] p-5">
        <Text className="font-bold">What you can do</Text>
        <Text>
          Add product details
          <br />
          Upload product images
          <br />
          Set pricing and categories
          <br />
          Submit products for approval
        </Text>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>ADD PRODUCTS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
