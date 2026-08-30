import { Button, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function ChangePassword({ name = "", link = "#" }) {
  return (
    <EmailLayout previewText="Reset your Go Dokan password securely.">
      <Text className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        Change your password
      </Text>

      {name && <Text className="text-[16px] leading-[26px]">Hi {name},</Text>}

      <Text className="text-[16px] leading-[26px] text-[#444444]">
        We received a request to change your password.
        <br />
        If this was you, please continue to reset it.
      </Text>

      <Section className="my-7 text-center">
        <Button
          className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline"
          href={link}
        >
          Reset Password
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default ChangePassword;
