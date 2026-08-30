import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function ThanksPlacingOrder({ link = "#" }: { link?: string }) {
  return (
    <EmailLayout previewText="Your Go Dokan order has been received.">
      <Heading className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        Thanks for placing your order
      </Heading>
      <Text className="text-[16px] leading-[26px] text-[#444444]">
        Your order has been received and is now being processed.
        <br />
        We will keep you updated as it moves through fulfillment.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          View Order
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default ThanksPlacingOrder;
