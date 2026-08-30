import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function PaymentSuccessful({ link = "#" }: { link?: string }) {
  return (
    <EmailLayout previewText="Your Go Dokan payment was successful.">
      <Text className="text-center text-[28px] leading-[36px]">&#10003;</Text>
      <Heading className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        Payment successful
      </Heading>
      <Text className="text-[16px] leading-[26px] text-[#444444]">
        Your payment has been received successfully.
        <br />
        We are preparing your order for dispatch.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          Track Order
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default PaymentSuccessful;
