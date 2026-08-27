import { Column, Row, Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface PayoutRequestProps {
  name?: string;
  link?: string;
  sellerName?: string;
  amount?: string;
  message?: string;
}
export default function PayoutRequestVendor({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "Godokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
}: PayoutRequestProps) {
  return (
    <VendorLayout previewText="Your payout request was received">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        PAYOUT REQUEST RECEIVED
      </Text>
      <Text className="text-[28px] font-bold">
        Your Payout Request Has Been Received
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text>
        Your payout request for {sellerName} has been submitted
        successfully.
      </Text>
      <Section className="rounded-lg bg-[#ffffe0] p-5 text-left">
        <Text className="text-center font-bold">PAYOUT DETAILS</Text>
        <Row className="py-2 text-[13px] leading-5 text-[#151516]">
          <Column
            style={{ width: "42%", verticalAlign: "top" }}
            className="font-bold"
          >
            Requested Amount:
          </Column>
          <Column
            style={{ width: "58%", verticalAlign: "top", textAlign: "left" }}
            className="font-bold"
          >
            {amount}
          </Column>
        </Row>
        <Row className="border-t border-[#eee9b8] py-2 text-[13px] leading-5 text-[#151516]">
          <Column
            style={{ width: "42%", verticalAlign: "top" }}
            className="font-bold"
          >
            Message:
          </Column>
          <Column
            style={{ width: "58%", verticalAlign: "top", textAlign: "left" }}
          >
            {message}
          </Column>
        </Row>
      </Section>
      <Text>
        Your request is now under review. <br/> You&apos;ll receive another
        notification once its status is updated.
      </Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW PAYOUT DETAILS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
