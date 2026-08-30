import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

interface SignupMailProps {
  name?: string;
  link?: string;
}

export default function SignupMail({
  name = "",
  link = "#",
}: SignupMailProps) {
  return (
    <EmailLayout previewText="Thank you for signing up for Go Dokan.">
      <Section className="text-center">
        <Heading className="mb-6 text-[24px] font-bold leading-[32px] text-[#111111]">
          Thank you for signing up!
        </Heading>
      </Section>

      <Text className="text-[16px] leading-[26px] text-[#444444]">
        Welcome to Godokan,
        <br />
        {name}.
      </Text>

      <Text className="text-[16px] leading-[26px] text-[#444444]">
        Your account is currently pending verification. We are reviewing your
        details and will notify you once your professional logistics account is
        active.
      </Text>

      <Section className="my-7 text-center">
        <Button
          className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline"
          href={link}
        >
          Start Exploring
        </Button>
      </Section>

      <Text className="text-center text-[13px] leading-[22px] text-[#8898aa]">
        Verification typically takes 1-2 business days.
      </Text>
    </EmailLayout>
  );
}

SignupMail.PreviewProps = {
  name: "Sabina",
  link: "https://godokan.com",
} satisfies SignupMailProps;
