import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function PaymentFailed({ link = "#" }: { link?: string }) {
  return (
    <EmailLayout previewText="Your latest Go Dokan payment could not be processed.">
      <Heading className="mb-5 text-center text-[24px] font-bold leading-[32px] text-[#111111]">
        Payment failed
      </Heading>
      <Text className="text-center text-[16px] leading-[26px] text-[#444444]">
        We couldn&apos;t process your latest payment.
        <br />
        Please try again to complete your order.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          Retry Payment
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default PaymentFailed;
