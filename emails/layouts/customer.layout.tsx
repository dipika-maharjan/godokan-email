import {
  Html,
  Head,
  Body,
  Tailwind,
  Link,
  Font,
  Container,
  Column,
  Img,
  Row,
  Section,
  Text,
  Hr,
  Preview,
} from "react-email";

interface EmailLayoutProps {
  previewText: string;
  children: React.ReactNode;
}

export default function EmailLayout({
  previewText,
  children,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head>
        <style>
          {`
      @media (prefers-color-scheme: dark) {
        .email-header-band {
          background-color: #FFCC00 !important;
          background-image: linear-gradient(#FFCC00, #FFCC00) !important;
          border-bottom-color: #111111 !important;
        }

        [data-ogsc] .email-header-band {
          background-color: #FFCC00 !important;
          background-image: linear-gradient(#FFCC00, #FFCC00) !important;
          border-bottom-color: #111111 !important;
        }

      }
    `}
        </style>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet',
            format: "woff2",
          }}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="m-0 bg-[#FFFAE5]">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-4 overflow-hidden rounded-xl bg-white p-0">
            <Section
              className="email-header-band h-[148px] border-0 border-b-[5px] border-[#111111] bg-[#FFCC00] text-center shadow-[0_3px_5px_rgba(17,17,17,0.24)]"
              style={{
                backgroundColor: "#FFCC00",
                backgroundImage: "linear-gradient(#FFCC00, #FFCC00)",
                borderBottom: "5px solid #111111",
              }}
            >
              <Img
                src="https://godokan.com/godokan-logo.png"
                width="168"
                alt="Go Dokan"
                className="mx-auto my-0"
              />
            </Section>

            <Section className="px-6 py-8 text-center">
              {children}
              <Text className="text-[16px] leading-[26px]">
                Best,
                <br />
                Go Dokan team
              </Text>
            </Section>

            <Section className="bg-[#f5f5f5] px-5 py-4 text-[#666666]">
              <Section className="h-[58px]">
                <Img
                  src="https://godokan.com/logo_grey.png"
                  width="105"
                  height="58"
                  alt="Go Dokan"
                  className="m-0"
                />
              </Section>

              <Text className="m-0 text-[15px] leading-[27px]">
                <Link className="text-[#666666] no-underline" href="https://godokan.com">
                  godokan.com
                </Link>
                <br />
                <Link className="text-[#666666] no-underline" href="tel:01-432354">
                  01-432354
                </Link>
                <br />
                <Link className="text-[#666666] no-underline" href="mailto:hello@godokan.com">
                  hello@godokan.com
                </Link>
                <br />
                New Road, Kathmandu, Nepal
              </Text>

              <Hr className="my-4 border-[#cccccc]" />

              <Section>
                <Row>
                  <Column style={{ width: "55%", verticalAlign: "middle" }}>
                    <Text className="m-0 text-[16px] font-bold leading-[22px]">
                      BUY GENUINE PRODUCTS
                      <br />
                      AT WHOLESALE PRICES.
                    </Text>
                  </Column>
                  <Column style={{ width: "45%", textAlign: "right", verticalAlign: "middle" }}>
                    <Row style={{ width: "180px", marginLeft: "auto" }}>
                  <Column style={{ width: "25%", textAlign: "center" }}>
                    <Link href="https://www.facebook.com/godokannepal">
                      <Img
                        src="https://img.icons8.com/ios-filled/50/666666/facebook-new.png"
                        width="30"
                        height="30"
                        alt="Facebook"
                        className="mx-auto block"
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
                        className="mx-auto block"
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
                        className="mx-auto block"
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
                        className="mx-auto block"
                      />
                    </Link>
                  </Column>
                </Row>
                  </Column>
                </Row>
              </Section>

              <Hr className="my-3 border-[#cccccc]" />

              <Text className="m-0 text-center text-[12px] leading-[20px]">
                <Link className="mx-3 text-[#777777] no-underline" href="https://godokan.com/help/getting-started/about-go-dokan">
                  About Us
                </Link>
                <Link className="mx-3 text-[#777777] no-underline" href="https://godokan.com/support">
                  Help &amp; Support
                </Link>
                <Link className="mx-3 text-[#777777] no-underline" href="https://godokan.com/help/legal/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="mx-3 text-[#777777] no-underline" href="https://godokan.com/help/legal/terms-and-conditions">
                  Terms and Conditions
                </Link>
              </Text>

              <Text className="m-0 text-center text-[12px] text-[#999999]">
                Godokan. Go Dokan Private Limited. All Right Reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
