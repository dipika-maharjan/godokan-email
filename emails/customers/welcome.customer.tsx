import {
  Button,
  Html,
  Head,
  Body,
  Tailwind,
  Link,
  Font,
  Container,
  Img,
  Section,
  Text,
  Hr,
  Preview,
} from "react-email";
import EmailLayout from "../layouts/customer.layout";
interface WelcomeMailProps {
  name: string;
  link?: string;
}

export default function CustomerWelcomeEmail({
  name,

  link,
}: WelcomeMailProps) {
  return (
    <EmailLayout previewText="Great news! Your account has been successfully verified and approved.">
      <Text className="text-[16px] leading-6.5">Hi {name},</Text>

      <Text className="text-[16px] leading-6.5">
        Great news! Your account has been successfully verified and approved.
      </Text>

      <Text className="text-[16px] leading-6.5">
        You can now log in to Go Dokan and start exploring products from trusted
        vendors across our marketplace.
      </Text>

      <Text className="text-[16px] leading-6.5">
        Whether you're looking for everyday essentials, unique products, or
        local businesses to support, we're excited to be part of your shopping
        journey.
      </Text>

      <Text className="text-[16px] leading-6.5">
        Welcome to the Godokan community. Happy shopping!
      </Text>
      <Section className="text-center">
        <Button
          className="bg-[#FFCC00] rounded-full text-black text-[16px] no-underline text-center block p-3"
          href={link ? link : "https://godokan.com"}
        >
          Get Started
        </Button>
      </Section>
    </EmailLayout>
  );
}
