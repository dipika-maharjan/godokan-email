import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function VerifyMail({ name = "", link = "#" }: { name?: string; link?: string }) {
  return (
    <EmailLayout previewText="Verify your email address to access Go Dokan.">
      <Heading className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        One last step...
      </Heading>

      <Text className="text-[16px] leading-[26px] text-[#444444]">
        {name ? `Hi ${name},` : "Hi,"}
        <br />
        We&apos;re excited to have you on board.
        <br />
        Please verify your email address to unlock
        <br />
        full access to your Godokan account.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          Verify Email Address
        </Button>
      </Section>

      <Text className="text-center text-[13px] leading-[22px] text-[#8898aa]">
        If you didn&apos;t create an account, you can safely ignore this
        <br />
        email.
      </Text>
    </EmailLayout>
  );
}

export default VerifyMail;
