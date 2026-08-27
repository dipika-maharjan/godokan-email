import { Column, Row, Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

const payoutStatusColors: Record<string, string> = {
  approved: "#16803c",
  rejected: "#c62828",
  processing: "#2563a8",
  pending: "#a15c00",
};
interface PayoutStatusProps {
  name?: string;
  link?: string;
  sellerName?: string;
  amount?: string;
  message?: string;
  status?: string;
  body?: string;
}
export default function PayoutRequestStatusVendor({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "Godokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
  status = "Approved",
  body = "Your payout request has been approved and is being processed. The amount will be transferred according to the selected payout method.",
}: PayoutStatusProps) {
  const normalizedStatus = status.trim().toLowerCase().replaceAll(" ", "-");
  const statusColor = payoutStatusColors[normalizedStatus] || "#555555";
  return (
    <VendorLayout previewText="Your payout request status was updated">
      <Text className="text-[13px] font-bold tracking-[1px] text-[#806600]">
        PAYOUT REQUEST UPDATE
      </Text>
      <Text className="text-[28px] font-bold">
        Your Payout Request Has Been {status}
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text>Your payout request for {sellerName} has been updated.</Text>
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
        <Row className="border-t border-[#eee9b8] py-2 text-[13px] leading-5 text-[#151516]">
          <Column
            style={{ width: "42%", verticalAlign: "top" }}
            className="font-bold"
          >
            Status:
          </Column>
          <Column
            style={{ width: "58%", verticalAlign: "top", textAlign: "left" }}
            className="text-[#16803c]"
          >
            <strong>{status}</strong>
          </Column>
        </Row>
      </Section>
      <Section className="rounded-lg bg-[#f7f7f7] p-5">
        <Text className="font-bold">STATUS UPDATE</Text>
        <Text>{body}</Text>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW PAYOUT DETAILS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
