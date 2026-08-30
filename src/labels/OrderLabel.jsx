import { useEffect, useState } from "react";
import bwipjs from "bwip-js/browser";
import blackLogo from "../assets/black-logo.png";
import flammableIcon from "../assets/flammable.png";
import fragileIcon from "../assets/fragile.png";

const LABEL_WIDTH = 400;
const LABEL_HEIGHT = 600;

// Converts an ISO date into a readable format
function formatDate(value) {
  // Shows a placeholder when no date is provided.
  if (!value) {
    return "-";
  }

  const date = new Date(value);

  // Returns the original value if it is not a valid date
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  // Formats the date using day-month-year notation
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

// Reusable SVG text component
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
    const text = String(value || "-");

    bwipjs.toCanvas(canvas, {
      bcid: "code128",
      text,
      scale: 2,
      height: 16,
      includetext: false,
      padding: 0,
      backgroundcolor: "FFFFFF",
    });

    setBarcode(canvas.toDataURL("image/png"));
  }, [value]);

  return barcode ? (
    <image
      aria-label={`Barcode for ${value || "unknown value"}`}
      href={barcode}
      height={height}
      preserveAspectRatio="none"
      width={width}
      x={x}
      y={y}
    />
  ) : null;
}

function QrCode({ value, x = 286, y = 398, size = 88 }) {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const text = String(value || "-");

    bwipjs.toCanvas(canvas, {
      bcid: "qrcode",
      text,
      scale: 4,
      padding: 0,
      backgroundcolor: "FFFFFF",
    });

    setQrCode(canvas.toDataURL("image/png"));
  }, [value]);

  return qrCode ? (
    <image
      aria-label={`QR code for ${value || "unknown value"}`}
      href={qrCode}
      height={size}
      preserveAspectRatio="none"
      width={size}
      x={x}
      y={y}
    />
  ) : null;
}

// Main order label.
function OrderLabel({ order = {} }) {
  const orderFrom = order.orderFrom || {};
  const details = order.details || {};
  const flags = order.flags || {};

  return (
    <svg
      aria-label="Order label"
      height={LABEL_HEIGHT}
      role="img"
      viewBox={`0 0 ${LABEL_WIDTH} ${LABEL_HEIGHT}`}
      width={LABEL_WIDTH}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#ffffff" height={LABEL_HEIGHT} width={LABEL_WIDTH} />

      <image
        href={blackLogo}
        height="62"
        preserveAspectRatio="xMinYMid meet"
        width="145"
        x="24"
        y="10"
      />

      <rect
        fill="#ffffff"
        height="70"
        rx="2"
        stroke="#222222"
        strokeWidth="1"
        width="74"
        x="210"
        y="8"
      />
      <rect
        fill="#ffffff"
        height="70"
        rx="2"
        stroke="#222222"
        strokeWidth="1"
        width="96"
        x="290"
        y="8"
      />

      {flags.fragile && (
        <image
          href={fragileIcon}
          height="60"
          preserveAspectRatio="xMidYMid meet"
          width="60"
          x="217"
          y="13"
        />
      )}

      {flags.flammable && (
        <>
          <image
            href={flammableIcon}
            height="38"
            preserveAspectRatio="xMidYMid meet"
            width="48"
            x="314"
            y="13"
          />
          <LabelText size={10} weight={800} x={294} y={71}>
            FLAMMABLE
          </LabelText>
        </>
      )}

      <line stroke="#111111" strokeWidth="1" x1="10" x2="390" y1="90" y2="90" />

      <SectionTitle y={116}>ORDER ID</SectionTitle>

      <LabelText size={19} weight={800} x={24} y={139}>
        {order.orderNumber || "-"}
      </LabelText>

      <SectionTitle x={260} y={116}>
        ORDER DATE
      </SectionTitle>

      <LabelText size={15} weight={700} x={260} y={139}>
        {formatDate(order.createdAt)}
      </LabelText>

      <Barcode height={48} value={order.orderNumber} y={166} />
      <br />

      <line
        stroke="#111111"
        strokeWidth="1"
        x1="10"
        x2="390"
        y1="230"
        y2="230"
      />

      <SectionTitle y={270}>ORDER FROM</SectionTitle>

      <LabelText size={15} weight={800} x={24} y={295}>
        {orderFrom.name || "-"}
      </LabelText>

      <LabelText size={12} x={24} y={320}>
        {orderFrom.address || "-"}
      </LabelText>

      <SectionTitle y={345}>CONTACT</SectionTitle>

      <LabelText size={12} x={24} y={365}>
        {orderFrom.phone || "-"}
      </LabelText>

      <LabelText color="#155e75" size={12} x={24} y={385}>
        {orderFrom.email || "-"}
      </LabelText>

      <SectionTitle y={410}>DETAILS</SectionTitle>

      <LabelText size={12} weight={700} x={24} y={440}>
        Weight:
      </LabelText>

      <LabelText size={12} x={130} y={440}>
        {details.weight || "-"}
      </LabelText>

      <LabelText size={12} weight={700} x={24} y={460}>
        Dimension:
      </LabelText>

      <LabelText size={12} x={130} y={460}>
        {details.dimensions || "-"}
      </LabelText>

      <LabelText size={12} weight={700} x={24} y={480}>
        Delivery Method:
      </LabelText>

      <LabelText size={12} x={145} y={480}>
        {details.deliveryMethod || "-"}
      </LabelText>

      <QrCode value={order.trackingNumber} x={292} y={370} />

      <rect
        fill="#ffffff"
        height="84"
        stroke="#111111"
        strokeWidth="1"
        width="352"
        x="24"
        y="510"
      />

      <LabelText size={11} weight={700} x={42} y={526}>
        TRACKING NUMBER
      </LabelText>

      <LabelText size={15} weight={800} x={42} y={544}>
        {order.trackingNumber || "-"}
      </LabelText>

      <Barcode
        height={38}
        value={order.trackingNumber}
        width={320}
        x={40}
        y={550}
      />
    </svg>
  );
}

// Seller-specific order label.
function SellerOrderLabel({ order = {}, sellerName = "Seller" }) {
  const orderFrom = order.orderFrom || {};

  return (
    <svg
      aria-label="Seller specific order label"
      height={LABEL_HEIGHT}
      role="img"
      viewBox={`0 0 ${LABEL_WIDTH} ${LABEL_HEIGHT}`}
      width={LABEL_WIDTH}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#ffffff" height={LABEL_HEIGHT} width={LABEL_WIDTH} />

      <rect fill="#111111" height="48" width={LABEL_WIDTH} />

      <LabelText color="#ffffff" size={20} weight={700} x={24} y={31}>
        GODOKAN
      </LabelText>

      <LabelText color="#ffd400" size={11} weight={700} x={265} y={30}>
        SELLER ORDER
      </LabelText>

      <SectionTitle y={88}>ORDER ID</SectionTitle>

      <LabelText size={18} weight={800} x={24} y={113}>
        {order.orderNumber || "-"}
      </LabelText>

      <SectionTitle y={145}>ORDER DATE</SectionTitle>

      <LabelText size={15} weight={700} x={24} y={168}>
        {formatDate(order.createdAt)}
      </LabelText>

      <line
        stroke="#d9d9d9"
        strokeWidth="1"
        x1="24"
        x2="376"
        y1="188"
        y2="188"
      />

      <SectionTitle y={218}>SELLER</SectionTitle>

      <LabelText size={17} weight={800} x={24} y={243}>
        {sellerName}
      </LabelText>

      <SectionTitle y={282}>ORDER FROM</SectionTitle>

      <LabelText size={15} weight={800} x={24} y={307}>
        {orderFrom.name || "-"}
      </LabelText>

      <LabelText size={12} x={24} y={331}>
        {orderFrom.phone || "-"}
      </LabelText>

      <LabelText size={12} x={24} y={354}>
        {orderFrom.address || "-"}
      </LabelText>

      <LabelText color="#155e75" size={12} x={24} y={377}>
        {orderFrom.email || "-"}
      </LabelText>

      <rect fill="#fff4c2" height="86" rx="4" width="352" x="24" y="420" />

      <LabelText color="#111111" size={11} weight={700} x={42} y={447}>
        SELLER SPECIFIC ORDER
      </LabelText>

      <LabelText size={18} weight={800} x={42} y={480}>
        {order.orderNumber || "-"}
      </LabelText>

      <LabelText color="#777777" size={10} x={24} y={575}>
        Please attach this label to the seller package.
      </LabelText>
    </svg>
  );
}

export { OrderLabel, SellerOrderLabel };

export default OrderLabel;
