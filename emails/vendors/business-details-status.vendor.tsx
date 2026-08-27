import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface BusinessDetailsStatusProps {
  name?: string;
  link?: string;
  sellerName?: string;
  status?: string;
  title?: string;
  body?: string;
}
export default function BusinessDetailsStatusVendor({
  name = "user",
  link = "https://godokan.com/business-details",
  sellerName = "Godokan",
  status = "under-review",
  title = "BUSINESS DETAILS STATUS",
  body = "Thank you for submitting your business information.",
}: BusinessDetailsStatusProps) {
  return (
    <VendorLayout previewText={title}>
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        {title}
      </Text>
      <Text className="text-[24px] font-bold">
        Hello {name}, 
        <br /><br />
        Your business details are {status}
      </Text>
      <Text className="text-[16px] leading-7">
        {body}
        <br />
        Our team is currently reviewing your details.
        <br />
        We&apos;ll notify you once the review is complete.
      </Text>
      <Section className="rounded-lg bg-[#ffffe0] p-5">
        <Text className="font-bold">What&apos;s next?</Text>
        <Text>
          Your business details will be reviewed, <br/> followed by the seller
          verification process.
        </Text>
        <Text className="text-[14px] font-bold">Seller: {sellerName}</Text>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW BUSINESS DETAILS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
