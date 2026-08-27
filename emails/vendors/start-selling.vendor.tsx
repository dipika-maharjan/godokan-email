import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface StartSellingProps {
  name?: string;
  link?: string;
  sellerName?: string;
  body?: string;
}
export default function StartSellingVendor({
  name = "user",
  link = "https://godokan.com/seller/products",
  sellerName = "Godokan",
  body = "",
}: StartSellingProps) {
  const message =
    body ||
    `Congratulations! 
    Your seller account for ${sellerName} has been successfully verified.\n\nYou can now start adding products, managing your store, and reaching customers through Godokan.`;
  return (
    <VendorLayout previewText="Your seller account is verified">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        SELLER ACCOUNT VERIFIED
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text className="whitespace-pre-line text-[16px] leading-7">
        {message}
      </Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>START SELLING</VendorButton>
      </Section>
    </VendorLayout>
  );
}
