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

/*
 * react-pdf does not use normal CSS files.
 */
const styles = StyleSheet.create({
  page: {
    padding: 15,
    paddingBottom: 48,
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
    marginRight: 0,
  },

  logoText: {
    color: "#111111",
    fontSize: 19,
    fontWeight: "bold",
    lineHeight: 0.9,
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

  /* The old header styles are replaced by the three-column layout above. */
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  metadata: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  metadataBlock: {
    width: "48%",
  },

  metadataBlockRight: {
    width: "48%",
    textAlign: "right",
  },

  billToRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },

  billToBlock: {
    width: "56%",
  },

  barcodeBlock: {
    alignItems: "center",
    width: "40%",
  },

  barcode: {
    width: 190,
    height: 45,
    objectFit: "contain",
  },

  barcodeText: {
    marginTop: 3,
    fontSize: 7,
    color: "#222222",
  },

  orderTotalRow: {
    // Puts the QR code on the left and the total information on the right.
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 4,
    minHeight: 76,
  },

  qrBlock: {
    // Keeps the QR code aligned to the left of the final summary.
    width: "24%",
    alignItems: "flex-start",
  },

  qrCode: {
    // A fixed size keeps the QR code easy to scan in the printed PDF.
    width: 85,
    height: 85,
    objectFit: "contain",
  },

  orderTotalSummary: {
    // The final summary occupies the right side beside the QR code.
    width: "72%",
    marginLeft: 0,
  },

  label: {
    marginBottom: 5,
    fontSize: 8,
    fontWeight: "bold",
    color: "#666666",
  },

  text: {
    fontSize: 9,
    lineHeight: 1.5,
  },

  storeSection: {
    marginBottom: 10,
  },

  storeTitle: {
    padding: 5,
    marginBottom: 4,
    backgroundColor: "#f2c400",
    fontSize: 10,
    fontWeight: "bold",
  },

  tableRow: {
    flexDirection: "row",
    padding: 4,
    borderBottom: "1 solid #dddddd",
  },

  tableHeader: {
    backgroundColor: "#eeeeee",
    borderBottom: "1 solid #999999",
    fontWeight: "bold",
  },

  serial: {
    width: "7%",
  },

  product: {
    width: "49%",
  },

  price: {
    width: "14%",
    textAlign: "right",
  },

  quantity: {
    width: "10%",
    textAlign: "right",
  },

  total: {
    width: "20%",
    textAlign: "right",
  },

  summary: {
    width: "45%",
    marginTop: 8,
    marginLeft: "55%",
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottom: "1 solid #eeeeee",
  },

  grandTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
    marginTop: 3,
    borderTop: "2 solid #222222",
    fontSize: 11,
    fontWeight: "bold",
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

/*
 * Calculates the total of one product row.
 */
function getProductTotal(product) {
  return product.unitPrice * product.quantity;
}

/*
 * Calculates a store subtotal before discount and shipping.
 */
function getStoreSubtotal(store) {
  return store.products.reduce(
    (subtotal, product) => subtotal + getProductTotal(product),
    0,
  );
}

/*
 * Calculates the final total for one store.
 */
function getStoreTotal(store) {
  return getStoreSubtotal(store) - store.discount + store.shippingCharges;
}

/*
 * Calculates the total for all stores in the order.
 */
function getOrderTotal(statement) {
  return statement.stores.reduce(
    (orderTotal, store) => orderTotal + getStoreTotal(store),
    0,
  );
}

/*
 * Code 128 turns the order ID into SVG. The SVG is converted to a data URL so
 * the PDF Image component can render it without a network request.
 */
function getOrderBarcode(orderId) {
  return getBarcodePng({
    bcid: "code128",
    text: orderId,
    scale: 2,
    height: 12,
    includetext: false,
    backgroundcolor: "FFFFFF",
  });
}

/*
 * Creates a PNG data URL from bwip-js's canvas renderer.
 * React PDF reliably displays PNG data URLs in its Image component.
 */
function getBarcodePng(options) {
  const canvas = document.createElement("canvas");
  bwipjs.toCanvas(canvas, options);
  return canvas.toDataURL("image/png");
}

/*
 * Creates the information that will be shown when the QR code is scanned.
 * This uses the product data already present in the statement
 */
function getOrderQrText(statement) {
  const products = statement.stores.flatMap((store) =>
    store.products.map((product) => ({
      name: product.name,
      quantity: product.quantity,
      unitPrice: product.unitPrice,
    })),
  );

  // QR codes have a finite capacity, so keep the payload compact for large orders.
  const productLines = products.map(
    (product) => `${product.name} x${product.quantity} @${product.unitPrice}`,
  );
  const maxQrCharacters = 1800;
  const header = [
    `Order: ${statement.orderId}`,
    `Customer: ${statement.customer.name}`,
    "Products:",
  ].join("\n");
  const includedProducts = [];
  let payloadLength = header.length;

  for (const productLine of productLines) {
    const nextLength = payloadLength + productLine.length + 1;

    if (nextLength > maxQrCharacters) {
      break;
    }

    includedProducts.push(productLine);
    payloadLength = nextLength;
  }

  const omittedProducts = productLines.length - includedProducts.length;

  return [
    header,
    ...includedProducts,
    ...(omittedProducts > 0
      ? [`+ ${omittedProducts} more product(s); scan the order ID to view all.`]
      : []),
  ].join("\n");
}

/*
 * Generates a QR code SVG and converts it into an image data URL for React PDF.
 */
function getOrderQrCode(statement) {
  return getBarcodePng({
    bcid: "qrcode",
    text: getOrderQrText(statement),
    scale: 4,
    padding: 0,
    backgroundcolor: "FFFFFF",
  });
}

/*
 * This is the actual PDF document.
 */
function CustomerGeneralStatementDocument({ statement }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {/* Left column: the yellow cart mark and black wordmark. */}
          <View style={styles.logoBlock}>
            <Image src={cartLogo} style={styles.cartLogo} />
          </View>

          {/* Center column: primary company identity and address. */}
          <View style={styles.companyBlock}>
            <Text style={styles.companyName}>Go Dokan Private Limited</Text>
            <Text style={styles.companyDetails}>
              Dharma Path, Newroad, 46100{"\n"}
              Kathmandu Metropolitan City - 11{"\n"}
              Kathmandu, Nepal.
            </Text>
          </View>

          {/* Right column: registration and contact details. */}
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

        <Text style={styles.title}>GENERAL STATEMENT</Text>

        <View style={styles.metadata}>
          <View style={styles.metadataBlock}>
            <Text style={styles.label}>ORDER ID</Text>
            <Text style={styles.text}>{statement.orderId}</Text>
          </View>

          <View style={styles.metadataBlockRight}>
            <Text style={styles.label}>ORDER DATE</Text>
            <Text style={styles.text}>{statement.orderDate}</Text>
          </View>
        </View>

        <View style={styles.metadata}>
          <View style={styles.billToRow}>
            <View style={styles.billToBlock}>
              <Text style={styles.label}>BILL TO</Text>

              <Text style={styles.text}>
                {statement.customer.name}
                {"\n"}
                {statement.customer.address}
                {"\n"}
                Reg. number: {statement.customer.registrationNumber}
                {"\n"}
                PAN number: {statement.customer.panNumber}
              </Text>
            </View>

            <View style={styles.barcodeBlock}>
              <Image
                src={getOrderBarcode(statement.orderId)}
                style={styles.barcode}
              />
              <Text style={styles.barcodeText}>{statement.orderId}</Text>
            </View>
          </View>
        </View>

        {
          /*
           * map() creates one table section per store.
           */
          statement.stores.map((store) => (
            <View key={store.name} style={styles.storeSection}>
              <Text style={styles.storeTitle}>Store: {store.name}</Text>

              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={styles.serial}>SN</Text>
                <Text style={styles.product}>Product Details</Text>
                <Text style={styles.price}>Unit Price</Text>
                <Text style={styles.quantity}>Qty</Text>
                <Text style={styles.total}>Total Amount</Text>
              </View>

              {/*
               * map() creates one product row for each product.
               */}
              {store.products.map((product, index) => (
                <View
                  key={`${store.name}-${product.name}`}
                  style={styles.tableRow}
                >
                  <Text style={styles.serial}>{index + 1}</Text>
                  <Text style={styles.product}>{product.name}</Text>
                  <Text style={styles.price}>NPR {product.unitPrice}</Text>
                  <Text style={styles.quantity}>{product.quantity}</Text>
                  <Text style={styles.total}>
                    NPR {getProductTotal(product)}
                  </Text>
                </View>
              ))}

              <View style={styles.summary}>
                <View style={styles.summaryRow}>
                  <Text>Subtotal</Text>
                  <Text>NPR {getStoreSubtotal(store)}</Text>
                </View>

                <View style={styles.summaryRow}>
                  <Text>Discounts</Text>
                  <Text>- NPR {store.discount}</Text>
                </View>

                <View style={styles.summaryRow}>
                  <Text>Shipping Charges</Text>
                  <Text>NPR {store.shippingCharges}</Text>
                </View>

                <View style={styles.grandTotal}>
                  <Text>TOTAL</Text>
                  <Text>NPR {getStoreTotal(store)}</Text>
                </View>
              </View>
            </View>
          ))
        }

        <View style={styles.orderTotalRow} wrap={false}>
          <View style={styles.qrBlock}>
            {/* Scanning this QR code shows the order and its product details. */}
            <Image src={getOrderQrCode(statement)} style={styles.qrCode} />
          </View>

          <View style={styles.orderTotalSummary}>
            <View style={styles.summaryRow}>
              <Text>Shipping Method</Text>
              <Text>{statement.shippingMethod}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text>Payment Method</Text>
              <Text>{statement.paymentMethod}</Text>
            </View>

            <View style={styles.summaryRow}>
              <Text>Date</Text>
              <Text>{statement.generatedAt}</Text>
            </View>

            <View style={styles.grandTotal}>
              <Text>TOTAL</Text>
              <Text>NPR {getOrderTotal(statement)}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          This invoice was generated on {statement.generatedAt} through Go Dokan
          (godokan.com). Returns and refunds are subject to the applicable
          product policies.{"\n"}© 2026 Go Dokan Private Limited. All rights
          reserved.
        </Text>
      </Page>
    </Document>
  );
}

/*
 * PDFViewer lets us see the generated PDF in the browser.
 * This component is only the development preview wrapper.
 */
function CustomerGeneralStatement({ statement }) {
  return (
    <PDFViewer width="100%" height="900">
      <CustomerGeneralStatementDocument statement={statement} />
    </PDFViewer>
  );
}

export default CustomerGeneralStatement;
