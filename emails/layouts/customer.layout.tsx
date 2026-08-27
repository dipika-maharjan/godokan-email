import {
  Button,
  Html,
  Head,
  Body,
  Tailwind,
  Link,
  Font,
  Container,
  Img,
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
      .logo-dark {
        display: none;
      }

      @media (prefers-color-scheme: dark) {
        .logo-light {
          display: none !important;
        }

        .logo-dark {
          display: block !important;
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
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="bg-[#FFFAE5] m-0">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto bg-white my-4 rounded-xl p-10">
            <Img
              src="https://godokan.com/logo_white_bg.png"
              width="120"
              alt="Go Dokan"
              className=""
            />
            <br />

            {children}
            <Text className="text-[16px] leading-[26px]">
              Best,
              <br />
              Go Dokan team
            </Text>
            <Hr className="border-[#cccccc] my-5" />
            <Text className="text-[#8898aa] text-[12px]">
              <Link
                className="text-[#806600] underline"
                href="tel:+977-9852002009"
              >
                +977-9852002009
              </Link>
              <Link
                className="text-[#806600] ml-2 underline"
                href="tel:+977-9852002010"
              >
                +977-9852002010
              </Link>
              <Link
                className="text-[#806600] ml-2 underline"
                href="tel:+977-9852002011"
              >
                +977-9852002011
              </Link>
              <br />
              <Link
                className="text-[#806600] underline"
                href="mailto:hello@godokan.com"
              >
                hello@godokan.com
              </Link>
              <Link
                className="text-[#806600] ml-2 underline"
                href="mailto:godokannepal@gmail.com"
              >
                godokannepal@gmail.com
              </Link>
            </Text>
            <Text className="text-[#8898aa] text-[12px]">
              Dharma Path, New Road,
              <br /> Kathmandu Metropolitan City - 23, <br /> Kathmandu 44600,
              Bagmati, Nepal.
              <br />
            </Text>
            <Text className="text-[#8898aa] text-[12px]">
              &copy; 2026 Go Dokan. Go Dokan Private Limited. All rights
              reserved.
            </Text>
            {/* <Text className="text-[#8898aa] text-[12px] mt-2">
              If you did not sign up for a Go Dokan account, you can ignore this
              email or let us know.
            </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
