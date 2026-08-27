import { Preview, Section, Text } from "react-email";
import VendorLayout from "../layouts/vendor.layout";
import VendorButton from "../components/vendor-button";

interface SignUpEmailProps {
  name?: string;
  link?: string;
}

export default function SignUpVendorEmail({
  name = "user",
  link = "https://godokan.com/",
}: SignUpEmailProps) {
  return (
    <VendorLayout previewText="Welcome to GoDokan">
      <Text className="text-[26px] font-bold leading-8 text-[#111111]">WELCOME TO GODOKAN</Text>

      <Text className="text-[20px] font-bold leading-6 text-[#202020]">Thank you for signing up, {name}!</Text>

      <Text>
        We&apos;re excited to have you on Godokan.
        <br />
        Your account is currently pending verification.
        <br />
        Once verified, you will be able to log in.
      </Text>

      <Section className="text-center">
        <VendorButton href={link}>EXPLORE GODOKAN</VendorButton>
      </Section>

      <Text>
        Discover products from multiple sellers all in one place.
      </Text>
    </VendorLayout>
  );
}