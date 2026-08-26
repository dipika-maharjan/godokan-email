import {
  Document,
  Image,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import bwipjs from "bwip-js/browser";
import cartLogo from "../assets/vendor-logo2.png";

const styles = StyleSheet.create({
  page: {
    padding: 15,
    paddingBottom: 52,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#222222",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 72,
    padding: 3,
    borderBottom: "1 solid #444444",
    backgroundColor: "#ffffff",
    marginBottom: 10,
  },

  logoBlock: {
    borderRight: "1 solid #cccccc",
    flexDirection: "row",
    alignItems: "center",
    width: "18%",
    paddingRight: 1,
  },

  cartLogo: {
    width: 64,
    height: 64,
    objectFit: "contain",
  },

  companyBlock: {
    width: "45%",
    paddingLeft: 4,
    paddingRight: 4,
  },

  contactBlock: {
    width: "30%",
    textAlign: "right",
  },

  companyName: {
    marginBottom: 2,
    fontSize: 10,
    fontWeight: "bold",
  },

  companyDetails: {
    fontSize: 7,
    lineHeight: 1.2,
  },

  contactDetails: {
    color: "#666666",
    fontSize: 7,
    lineHeight: 1.2,
  },

  contactLinks: {
    marginTop: 5,
    color: "#111111",
    fontSize: 7,
    lineHeight: 1.2,
  },

  title: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  metadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  metadataBlock: {
    width: "48%",
  },

  metadataBlockRight: {
    width: "48%",
    textAlign: "right",
  },

  label: {
    marginBottom: 4,
    fontSize: 8,
    fontWeight: "bold",
    color: "#666666",
  },

  text: {
    fontSize: 9,
    lineHeight: 1.4,
  },

  recipient: {
    marginBottom: 14,
  },

  tableRow: {
    flexDirection: "row",
    padding: 6,
    borderBottom: "1 solid #dddddd",
  },

  tableHeader: {
    backgroundColor: "#eeeeee",
    borderBottom: "1 solid #999999",
    fontWeight: "bold",
  },

  serial: {
    width: "8%",
  },

  product: {
    width: "42%",
  },

  currency: {
    width: "12%",
  },

  method: {
    width: "18%",
  },

  amount: {
    width: "20%",
    textAlign: "right",
  },

  summary: {
    width: "45%",
    marginTop: 10,
    marginLeft: "55%",
  },

  payoutTotalRow: {
    // Places the payout QR code on the left and totals on the right.
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 8,
  },

  payoutQrBlock: {
    // Left column for the payout QR code.
    width: "24%",
    alignItems: "flex-start",
  },

  payoutQrCode: {
    // Fixed dimensions keep the QR readable in the PDF.
    width: 72,
    height: 72,
    objectFit: "contain",
  },

  payoutTotalSummary: {
    // Right column for charges, subtotal, and total.
    width: "72%",
    marginLeft: 0,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottom: "1 solid #eeeeee",
  },

  grandTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    marginTop: 3,
    borderTop: "2 solid #222222",
    fontSize: 11,
    fontWeight: "bold",
  },

  description: {
    marginTop: 16,
    fontSize: 8,
    lineHeight: 1.4,
    color: "#666666",
  },

  footer: {
    position: "absolute",
    right: 36,
    bottom: 24,
    left: 36,
    paddingTop: 8,
    borderTop: "1 solid #cccccc",
    color: "#666666",
    fontSize: 7,
    textAlign: "center",
  },
});

function toNumber(value) {
  const number = Number(String(value ?? 0).replace(/[^0-9.-]/g, ""));
  return Number.isFinite(number) ? number : 0;
}

function formatAmount(value) {
  return toNumber(value).toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function getPayments(statement) {
  return Array.isArray(statement.payout?.payments)
    ? statement.payout.payments
    : [];
}

function getSubtotal(statement) {
  if (statement.payout?.subTotal != null) {
    return toNumber(statement.payout.subTotal);
  }

  return getPayments(statement).reduce(
    (subtotal, payment) => subtotal + toNumber(payment.amount),
    0,
  );
}

function getCharges(statement) {
  return toNumber(statement.payout?.charges);
}

function getTotal(statement) {
  if (statement.payout?.total != null) {
    return toNumber(statement.payout.total);
  }

  return getSubtotal(statement) - getCharges(statement);
}

/* Creates compact payout data that can be read after scanning the QR code. */
function getPayoutQrText(statement) {
  const payout = statement.payout || {};
  const currency = payout.currency || "NPR";
  const payments = getPayments(statement);

  return [
    `Order ID: ${statement.orderId || "-"}`,
    `Seller: ${statement.seller?.name || "-"}`,
    ...payments.map(
      (payment) =>
        `Payment: ${payment.method || "-"} - ${currency} ${formatAmount(payment.amount)}`,
    ),
    `Charges: ${currency} ${formatAmount(getCharges(statement))}`,
    `Sub Total: ${currency} ${formatAmount(getSubtotal(statement))}`,
    `Total: ${currency} ${formatAmount(getTotal(statement))}`,
  ].join("\n");
}

/* Generates a PNG QR image that React PDF can render. */
function getPayoutQrCode(statement) {
  const canvas = document.createElement("canvas");
  bwipjs.toCanvas(canvas, {
    bcid: "qrcode",
    text: getPayoutQrText(statement),
    scale: 4,
    padding: 0,
    backgroundcolor: "FFFFFF",
  });

  return canvas.toDataURL("image/png");
}

function PayoutStatementDocument({ statement }) {
  const payments = getPayments(statement);
  const currency = statement.payout?.currency || "NPR";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoBlock}>
            <Image src={cartLogo} style={styles.cartLogo} />
          </View>

          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>Go Dokan Private Limited</Text>
            <Text style={styles.companyDetails}>
              Dharma Path, Newroad, 46100{"\n"}
              Kathmandu Metropolitan City - 11{"\n"}
              Kathmandu, Nepal.
            </Text>
          </View>

          <View style={styles.contactBlock}>
            <Text style={styles.contactDetails}>
              Reg no. : 34337/82/83.{"\n"}
              EPID no.: 3-33-374-239/2082/83.{"\n"}
              PAN no. : 3324364798
            </Text>
            <Text style={styles.contactLinks}>
              godokan.com{"\n"}
              hello@godokan.com{"\n"}
              +977-9843448772
            </Text>
          </View>
        </View>

        <Text style={styles.title}>PAYOUT STATEMENT</Text>

        <View style={styles.metadata}>
          <View style={styles.metadataBlock}>
            <Text style={styles.label}>ORDER ID</Text>
            <Text style={styles.text}>{statement.orderId || "-"}</Text>
          </View>
          <View style={styles.metadataBlockRight}>
            <Text style={styles.label}>ORDER DATE</Text>
            <Text style={styles.text}>{statement.orderDate || "-"}</Text>
          </View>
        </View>

        <View style={styles.recipient}>
          <Text style={styles.label}>TO</Text>
          <Text style={styles.text}>
            {statement.seller?.name || "-"}
            {"\n"}
            {statement.seller?.address || "-"}
            {"\n"}
            Reg. number: {statement.seller?.registrationNumber || "-"}
            {"\n"}
            PAN number: {statement.seller?.panNumber || "-"}
          </Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.serial}>SN</Text>
          <Text style={styles.product}>Product Details</Text>
          <Text style={styles.currency}>Currency</Text>
          <Text style={styles.method}>Method</Text>
          <Text style={styles.amount}>Total Amount</Text>
        </View>

        {payments.map((payment, index) => (
          <View style={styles.tableRow} key={`${payment.method}-${index}`}>
            <Text style={styles.serial}>{index + 1}</Text>
            <Text style={styles.product}>
              {payment.description || "Payout Amount"}
            </Text>
            <Text style={styles.currency}>{currency}</Text>
            <Text style={styles.method}>{payment.method || "-"}</Text>
            <Text style={styles.amount}>{formatAmount(payment.amount)}</Text>
          </View>
        ))}

        {payments.length === 0 && (
          <View style={styles.tableRow}>
            <Text style={styles.product}>No payout payments</Text>
          </View>
        )}

        <View style={styles.payoutTotalRow} wrap={false}>
          {/* QR code on the left contains the payout summary. */}
          <View style={styles.payoutQrBlock}>
            <Image
              src={getPayoutQrCode(statement)}
              style={styles.payoutQrCode}
            />
          </View>

          {/* Charges, subtotal, and total on the right. */}
          <View style={styles.payoutTotalSummary}>
            <View style={styles.summaryRow}>
              <Text>Charges</Text>
              <Text>
                {currency} {formatAmount(getCharges(statement))}
              </Text>
            </View>
            <View style={styles.summaryRow}>
              <Text>Sub Total</Text>
              <Text>
                {currency} {formatAmount(getSubtotal(statement))}
              </Text>
            </View>
            <View style={styles.grandTotal}>
              <Text>TOTAL</Text>
              <Text>
                {currency} {formatAmount(getTotal(statement))}
              </Text>
            </View>
          </View>
        </View>

        {/* Dynamic explanation of this seller's payout statement. */}
        <Text style={styles.description}>
          This statement was generated on {statement.generatedAt || "-"} by{" "}
          {statement.seller?.name || "-"} for the sales of{" "}
          {statement.itemCount ?? 0} item(s) to{" "}
          {statement.customer?.name || "-"} in Go Dokan (godokan.com).
          {"\n"}
          Commission and handling charges per order is calculated per agreement
          between {statement.seller?.name || "-"} and Go Dokan Private Limited.
        </Text>

        <Text style={styles.footer}>
          This statement was generated on {statement.generatedAt || "-"} through
          Go Dokan (godokan.com).{"\n"}© 2026 Go Dokan Private Limited. All
          rights reserved.
        </Text>
      </Page>
    </Document>
  );
}

function PayoutStatement({ statement }) {
  return (
    <PDFViewer width="100%" height="900">
      <PayoutStatementDocument statement={statement} />
    </PDFViewer>
  );
}

export default PayoutStatement;
