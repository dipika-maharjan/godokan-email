import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function CustomerAdded({ link = "#" }: { link?: string }) {
  return (
    <EmailLayout previewText="A new customer has been added to your account.">
      <Heading className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        Customer added
      </Heading>
      <Text className="text-[16px] leading-[26px] text-[#444444]">
        A new customer has been successfully added to your account.
        <br />
        You can now manage their details and orders.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          View Dashboard
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default CustomerAdded;
