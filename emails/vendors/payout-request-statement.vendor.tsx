import { Column, Row, Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface Payment {
  amount: string;
  modeOfPayment: string;
}
interface Payout {
  payments?: Payment[];
  subTotal: string;
  charges: string;
  total: string;
}
interface PayoutStatementProps {
  name?: string;
  link?: string;
  sellerName?: string;
  amount?: string;
  message?: string;
  status?: string;
  body?: string;
  payout?: Payout;
}
export default function PayoutRequestStatementVendor({
  name = "user",
  link = "https://godokan.com/seller/payouts",
  sellerName = "GoDokan",
  amount = "NPR 25,000",
  message = "Please process my available balance.",
  status = "Approved",
  body = "Your payout statement is provided above for your records.",
  payout = {
    payments: [
      { amount: "NPR 20,000", modeOfPayment: "Bank Transfer" },
      { amount: "NPR 5,000", modeOfPayment: "eSewa" },
    ],
    subTotal: "NPR 25,000",
    charges: "NPR 500",
    total: "NPR 24,500",
  },
}: PayoutStatementProps) {
  const payments = Array.isArray(payout.payments) ? payout.payments : [];
  return (
    <VendorLayout previewText="Your payout statement is ready">
      <Text className="text-[13px] font-bold tracking-[1px] text-[#806600]">
        PAYOUT STATEMENT
      </Text>
      <Text className="text-[28px] font-bold">Payout Statement</Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text>Your payout request for {sellerName} has been processed.</Text>
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
            {status}
          </Column>
        </Row>
      </Section>
      <Section className="my-4 rounded-lg border border-[#dedede] bg-[#f8f7f7] p-5 text-left">
        <Text className="mb-5 text-center text-[14px] font-bold tracking-[0.5px] text-[#151516]">
          PAYMENT BREAKDOWN
        </Text>
        <Row className="border-b border-[#d9d9d9] pb-2 text-[12px] font-bold text-[#151516]">
          <Column className="w-3/5">Payment Method</Column>
          <Column className="w-2/5 text-right">Amount</Column>
        </Row>
        {payments.map((payment, index) => (
          <Row
            key={`${payment.modeOfPayment}-${index}`}
            className="border-b border-[#e5e5e5] py-3 text-[13px] leading-5 text-[#667080]"
          >
            <Column className="w-3/5">{payment.modeOfPayment}</Column>
            <Column className="w-2/5 text-right text-[#151516]">
              {payment.amount}
            </Column>
          </Row>
        ))}
        <Row className="border-b border-[#d9d9d9] py-2 text-[13px] text-[#667080]">
          <Column className="w-3/5">Subtotal</Column>
          <Column className="w-2/5 text-right">{payout.subTotal}</Column>
        </Row>
        <Row className="border-b border-[#d9d9d9] py-2 text-[13px] text-[#667080]">
          <Column className="w-3/5">Charges</Column>
          <Column className="w-2/5 text-right">{payout.charges}</Column>
        </Row>
        <Row className="pt-3 text-[15px] font-bold text-[#151516]">
          <Column className="w-3/5">Total</Column>
          <Column className="w-2/5 text-right text-[#151516]">
            {payout.total}
          </Column>
        </Row>
      </Section>
      <Text>{body}</Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW PAYOUT DETAILS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
