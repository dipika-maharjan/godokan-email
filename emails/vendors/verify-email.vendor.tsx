import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface VerifyEmailProps {
  name?: string;
  link?: string;
}

export default function VerifyEmailVendor({
  name = "user",
  link = "https://godokan.com/verify-email",
}: VerifyEmailProps) {
  return (
    <VendorLayout previewText="Verify your GoDokan email address">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        VERIFY YOUR EMAIL
      </Text>
      <Text className="text-[28px] font-bold">Hello {name},</Text>
      <Text className="text-[16px] leading-7">
        We&apos;ve sent a verification link to your email address.
        <br />
        Please verify your email to activate your Godokan account
        <br />
        and get started.
      </Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>CHECK YOUR EMAIL</VendorButton>
      </Section>
      <Text className="text-[14px] leading-6 text-[#667085]">
        You need to verify your email address to access your Godokan account.
      </Text>
    </VendorLayout>
  );
}
