import { useEffect, useState } from "react";
import bwipjs from "bwip-js/browser";
import blackLogo from "../assets/black-logo.png";

const LABEL_WIDTH = 600;
const LABEL_HEIGHT = 400;

function formatDate(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function LabelText({
  children,
  x,
  y,
  size = 12,
  weight = 400,
  color = "#111111",
}) {
  return (
    <text
      fill={color}
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize={size}
      fontWeight={weight}
      x={x}
      y={y}
    >
      {children}
    </text>
  );
}

function SectionTitle({ children, x = 24, y }) {
  return (
    <LabelText color="#666666" size={11} weight={700} x={x} y={y}>
      {children}
    </LabelText>
  );
}

function Barcode({ value, x = 24, y, width = 352, height = 48 }) {
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    const canvas = document.createElement("canvas");

    bwipjs.toCanvas(canvas, {
      bcid: "code128",
      text: String(value || "-"),
      scale: 2,
      height: 16,
      includetext: false,
      padding: 0,
      backgroundcolor: "FFFFFF",
    });

    setBarcode(canvas.toDataURL("image/png"));
  }, [value]);

  if (!barcode) {
    return null;
  }

  return (
    <image
      aria-label={`Barcode for ${value || "unknown value"}`}
      href={barcode}
      height={height}
      preserveAspectRatio="none"
      width={width}
      x={x}
      y={y}
    />
  );
}

function QrCode({ value, x = 430, y = 190, size = 130 }) {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const canvas = document.createElement("canvas");

    bwipjs.toCanvas(canvas, {
      bcid: "qrcode",
      text: String(value || "-"),
      scale: 4,
      padding: 0,
      backgroundcolor: "FFFFFF",
    });

    setQrCode(canvas.toDataURL("image/png"));
  }, [value]);

  if (!qrCode) {
    return null;
  }

  return (
    <image
      aria-label={`QR code for ${value || "unknown value"}`}
      href={qrCode}
      height={size}
      preserveAspectRatio="none"
      width={size}
      x={x}
      y={y}
    />
  );
}

function SellerOrder({ order = {} }) {
  const orderFrom = order.orderFrom || {};

  return (
    <svg
      aria-label="Seller order label"
      height={LABEL_HEIGHT}
      role="img"
      viewBox={`0 0 ${LABEL_WIDTH} ${LABEL_HEIGHT}`}
      width={LABEL_WIDTH}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#ffffff" height={LABEL_HEIGHT} width={LABEL_WIDTH} />

      <image
        href={blackLogo}
        height="72"
        preserveAspectRatio="xMidYMid meet"
        width="170"
        x="406"
        y="18"
      />

      <line
        stroke="#111111"
        strokeWidth="1"
        x1="18"
        x2="582"
        y1="106"
        y2="106"
      />

      <SectionTitle y={132}>ORDER ID</SectionTitle>
      <LabelText size={21} weight={800} x={24} y={157}>
        {order.orderNumber || "-"}
      </LabelText>

      <SectionTitle x={410} y={132}>
        ORDER DATE
      </SectionTitle>
      <LabelText size={16} weight={700} x={410} y={157}>
        {formatDate(order.createdAt)}
      </LabelText>

      <Barcode
        height={48}
        value={order.orderNumber}
        width={540}
        x={24}
        y={174}
      />

      <line
        stroke="#111111"
        strokeWidth="1"
        x1="18"
        x2="582"
        y1="238"
        y2="238"
      />

      <SectionTitle y={265}>ORDER FROM</SectionTitle>
      <LabelText size={16} weight={800} x={24} y={290}>
        {orderFrom.name || "-"}
      </LabelText>
      <LabelText size={13} x={24} y={313}>
        {orderFrom.address || "-"}
      </LabelText>
      <LabelText size={13} x={24} y={335}>
        {orderFrom.city || ""}
      </LabelText>

      <QrCode value={order.orderNumber} x={460} y={248} size={120} />
    </svg>
  );
}

export default SellerOrder;
