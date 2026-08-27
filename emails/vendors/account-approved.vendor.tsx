import { Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

const statusColors: Record<string, string> = {
  approved: "#16803c",
  pending: "#a15c00",
  "under-review": "#2563a8",
  rejected: "#c62828",
  suspended: "#c62828",
};
interface AccountApprovedProps {
  name?: string;
  status?: string;
  link?: string;
  title?: string;
  body?: string;
}

export default function AccountApprovedVendor({
  name = "user",
  status = "approved",
  link = "https://godokan.com",
  title = "ACCOUNT APPROVED",
  body = "Your Godokan account has been successfully activated.",
}: AccountApprovedProps) {
  const normalizedStatus = status.trim().toLowerCase().replaceAll(" ", "-");
  const statusColor = statusColors[normalizedStatus] || "#555555";
  return (
    <VendorLayout previewText={title}>
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        {title}
      </Text>
      <Text className="text-[24px] font-bold">Hello {name},</Text>
      <Text className="text-[16px] leading-7">
        {body}
        <br />
        <br />
        <strong style={{ color: statusColor }}>Account status: {status}</strong>
        <br />
        You can now explore products, view pricing, add items to your cart, and
        place your order.
      </Text>
      <Section className="py-4 text-center">
        <VendorButton href={link}>START SHOPPING</VendorButton>
      </Section>
      <Text>
        Explore products from multiple sellers and find everything you need in
        one place.
      </Text>
    </VendorLayout>
  );
}
