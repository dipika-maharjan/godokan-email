import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface AddBusinessDetailProps {
  name?: string;
  link?: string;
}
export default function AddBusinessDetailVendor({
  name = "user",
  link = "https://godokan.com/business-details",
}: AddBusinessDetailProps) {
  return (
    <VendorLayout previewText="Complete your Godokan business profile">
      <Text className="text-[28px] font-bold">
        Complete Your Business Profile
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text className="text-[16px] leading-7">
        Your Godokan account has been activated.
        <br />
        To start selling, please provide your business details and
        <br />
        complete your seller profile.
      </Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>ADD BUSINESS DETAILS</VendorButton>
      </Section>
      <Section className="bg-[#ffffe0] p-2 text-center">
        <Text className="font-bold">What&apos;s next?</Text>
        <Text className="text-[16px] leading-7">
          1. Add your business information
          <br />
          2. Submit your details for review
          <br />
          3. Complete seller verification
          <br />
          4. Start selling on GoDokan
        </Text>
      </Section>
    </VendorLayout>
  );
}
