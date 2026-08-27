import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Tailwind,
  Text,
} from "react-email";

interface VendorLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

declare const process: {
  env: {
    VERCEL_URL?: string;
  };
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function VendorLayout({
  previewText,
  children,
}: VendorLayoutProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="m-0 bg-[#ffffff] font-sans text-[#202020]">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-6 max-w-[640px]">
            <Section className="rounded-t-[11px] border-b-4 border-[#ffd400] bg-[#111111] py-[78px] text-center">
              <Img
                src="https://godokan.com/logo_white.png"
                width="128"
                alt="Go Dokan"
                className="mx-auto"
              />
            </Section>
            <Section className="bg-white px-5 py-8 text-center">
              {children}
            </Section>
            <Section className="rounded-b-xl bg-[#f8f7f7] px-10 py-7 font-sans">
              <Img
                src="https://godokan.com/logo.png"
                width="145"
                alt="Go Dokan"
                className="mb-6"
              />
              <Text className="my-3 text-[16px] text-[#666666]">
                godokan.com
              </Text>
              <Text className="my-3 text-[16px] text-[#666666]">
                +977-9852002009
              </Text>
              <Text className="my-3 text-[16px] text-[#666666]">
                hello@godokan.com
              </Text>
              <Text className="my-3 text-[16px] text-[#666666]">
                New Road, Kathmandu, Nepal
              </Text>
              <Section className="my-5 border-y-2 border-[#d5d5d5] py-5">
                <Row>
                  <Column style={{ width: "55%", verticalAlign: "middle" }}>
                    <Text
                      style={{
                        margin: "0",
                        color: "#666666",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "1.3",
                      }}
                    >
                      SELL GENUINE PRODUCTS
                      <br />
                      AT WHOLESALE PRICES.
                    </Text>
                  </Column>
                  <Column style={{ width: "45%", verticalAlign: "middle" }}>
                    <Row>
                      <Column style={{ width: "25%", textAlign: "center" }}>
                        <Link href="https://www.facebook.com/godokannepal">
                          <Img
                            src="https://img.icons8.com/ios-filled/50/666666/facebook-new.png"
                            width="30"
                            height="30"
                            alt="Facebook"
                            style={{
                              display: "block",
                              width: "30px",
                              height: "30px",
                              margin: "0 auto",
                            }}
                          />
                        </Link>
                      </Column>
                      <Column style={{ width: "25%", textAlign: "center" }}>
                        <Link href="https://www.instagram.com/go.dokan/?hl=en">
                          <Img
                            src="https://img.icons8.com/ios-filled/50/666666/instagram-new.png"
                            width="30"
                            height="30"
                            alt="Instagram"
                            style={{
                              display: "block",
                              width: "30px",
                              height: "30px",
                              margin: "0 auto",
                            }}
                          />
                        </Link>
                      </Column>
                      <Column style={{ width: "25%", textAlign: "center" }}>
                        <Link href="https://wa.me/9779852002009">
                          <Img
                            src="https://img.icons8.com/ios-filled/50/666666/whatsapp.png"
                            width="30"
                            height="30"
                            alt="WhatsApp"
                            style={{
                              display: "block",
                              width: "30px",
                              height: "30px",
                              margin: "0 auto",
                            }}
                          />
                        </Link>
                      </Column>

                      <Column style={{ width: "25%", textAlign: "center" }}>
                        <Link href="https://www.tiktok.com/@go.dokan/">
                          <Img
                            src="https://img.icons8.com/ios-filled/50/666666/tiktok.png"
                            width="30"
                            height="30"
                            alt="TikTok"
                            style={{
                              display: "block",
                              width: "30px",
                              height: "30px",
                              margin: "0 auto",
                            }}
                          />
                        </Link>
                      </Column>
                    </Row>
                  </Column>
                </Row>
              </Section>
              <Text className="text-center text-[14px] leading-6 text-[#777777]">
                <Link
                  href="https://godokan.com"
                  className="text-[#777777] no-underline"
                >
                  About Us
                </Link>
                {" | "}
                <Link
                  href="https://godokan.com"
                  className="text-[#777777] no-underline"
                >
                  Help &amp; Support
                </Link>
                {" | "}
                <Link
                  href="https://godokan.com"
                  className="text-[#777777] no-underline"
                >
                  Privacy Policy
                </Link>
                {" | "}
                <Link
                  href="https://godokan.com"
                  className="text-[#777777] no-underline"
                >
                  Terms and Conditions
                </Link>
              </Text>
              <Text className="mb-0 text-center text-[14px] text-[#999999]">
                Godokan. Go Dokan Private Limited. All Right Reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
