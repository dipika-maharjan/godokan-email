import { Button, Heading, Section, Text } from "react-email";
import EmailLayout from "../layouts/customer.layout";

function OrderFailed({ link = "#" }: { link?: string }) {
  return (
    <EmailLayout previewText="There was a problem completing your Go Dokan order.">
      <Heading className="mb-5 text-[24px] font-bold leading-[32px] text-[#111111]">
        Order failed
      </Heading>
      <Text className="text-[16px] leading-[26px] text-[#444444]">
        We were unable to complete your order.
        <br />
        Please check your details and try again.
      </Text>

      <Section className="my-7 text-center">
        <Button className="rounded-full bg-[#FFCC00] px-5 py-3 text-center text-[16px] font-bold text-black no-underline" href={link}>
          Review Order
        </Button>
      </Section>
    </EmailLayout>
  );
}

export default OrderFailed;
