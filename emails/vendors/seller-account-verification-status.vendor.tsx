import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface SellerVerificationProps {
  name?: string;
  link?: string;
  sellerName?: string;
  title?: string;
  body?: string;
}
export default function SellerAccountVerificationStatusVendor({
  name = "user",
  link = "https://godokan.com/verification-status",
  sellerName = "Godokan",
  title = "VERIFICATION IN PROGRESS",
  body = "We've received the verification details for",
}: SellerVerificationProps) {
  return (
    <VendorLayout previewText={title}>
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        {title}
      </Text>
      <Text className="text-[28px] font-bold">
        Your Seller Account Verification Is Under Review
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text className="text-[16px] leading-7">
        {body} {sellerName}.<br />
        <br />
        Our team is currently reviewing your information. <br/> We&apos;ll notify you
        once the verification process is complete and <br/>let you know the next
        steps.
      </Text>
      <Section className="rounded-lg bg-[#ffffe0] p-5">
        <Text className="font-bold">What happens next?</Text>
        <Text>
          Once your seller account is verified, you&apos;ll be able to start
          selling and manage your products on Godokan.
        </Text>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW VERIFICATION STATUS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
