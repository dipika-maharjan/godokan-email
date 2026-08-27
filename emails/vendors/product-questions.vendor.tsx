import { Img, Section, Text } from "react-email";
import VendorButton from "../components/vendor-button";
import VendorLayout from "../layouts/vendor.layout";

interface Product {
  name: string;
  code: string;
  image: string;
  category: string;
  url: string;
}
interface Question {
  title: string;
  by: string;
  url: string;
}
interface ProductQuestionsProps {
  name?: string;
  link?: string;
  sellerName?: string;
  product?: Product;
  question?: Question;
}
export default function ProductQuestionsVendor({
  name = "user",
  link = "https://godokan.com/seller/questions",
  sellerName = "Godokan",
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },
  question = {
    title: "Is this product available in black?",
    by: "NewUser",
    url: "https://godokan.com/seller/questions/1",
  },
}: ProductQuestionsProps) {
  return (
    <VendorLayout previewText="A customer asked a question about your product">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        PRODUCT QUESTION
      </Text>
      <Text className="text-[28px] font-bold">
        You Have a Question Regarding Your Product
      </Text>
      <Text className="text-[24px] font-bold">
        Hello {name},
      </Text>
      <Text>
        A customer has posted a question about a product from {sellerName} on
        GoDokan.
      </Text>
      <Section className="my-4 rounded-lg border border-[#eeeeee] p-5">
        <Text className="font-bold">{product.name}</Text>
        <Img src={product.image} width="300" alt={product.name} />
        <Text>
          Product Code: {product.code}
          <br />
          Category: {product.category}
        </Text>
        <VendorButton href={product.url}>VIEW PRODUCT</VendorButton>
      </Section>
      <Section className="rounded-lg bg-[#f7f7f7] p-5">
        <Text className="font-bold">CUSTOMER QUESTION</Text>
        <Text>&quot;{question.title}&quot;</Text>
        <Text>
          Asked by <strong>{question.by}</strong>
        </Text>
        <VendorButton href={question.url}>VIEW QUESTION</VendorButton>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW ALL QUESTIONS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
