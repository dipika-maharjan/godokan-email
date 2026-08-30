import { Button, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

interface AccountActivatedEmailProps {
  name: string;
  link?: string;
}

export default function AccountActivatedEmail({
  name,
  link,
}: AccountActivatedEmailProps) {
  return (
    <EmailLayout previewText="Great news! Your account has been successfully verified and approved.">
      <Text className="text-[16px] leading-[26px]">Hi {name},</Text>

      <Text className="text-[16px] leading-[26px]">
        Great news! Your account has been successfully verified and approved.
      </Text>

      <Text className="text-[16px] leading-[26px]">
        You can now log in to Go Dokan and start exploring products from trusted
        vendors across our marketplace.
      </Text>

      <Text className="text-[16px] leading-[26px]">
        Whether you're looking for everyday essentials, unique products, or
        local businesses to support, we're excited to be part of your shopping
        journey.
      </Text>

      <Text className="text-[16px] leading-[26px]">
        Welcome to the Godokan community. Happy shopping!
      </Text>

      <Section className="text-center">
        <Button
          className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] text-black no-underline"
          href={link || "https://godokan.com"}
        >
          Get Started
        </Button>
      </Section>
    </EmailLayout>
  );
}
