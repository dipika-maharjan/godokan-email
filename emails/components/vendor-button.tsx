import { Button } from "react-email";

interface VendorButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function VendorButton({ href, children }: VendorButtonProps) {
  return (
    <Button
      href={href}
      className="inline-block min-w-[170px] rounded-[5px] bg-[#ffca05] px-[22px] py-[13px] text-center text-[14px] font-bold leading-[1.2] text-[#111111] no-underline"
    >
      {children}
    </Button>
  );
}
