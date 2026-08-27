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
interface Review {
  title?: string;
  by: string;
  url: string;
  rating?: number;
}
interface ProductReviewProps {
  name?: string;
  link?: string;
  sellerName?: string;
  product?: Product;
  review?: Review;
}
export default function ProductReviewVendor({
  name = "user",
  link = "https://godokan.com/seller/feedback",
  sellerName = "Godokan",
  product = {
    name: "Wireless Headphones",
    code: "WH-001",
    image: "https://placehold.co/300x180/f3f3f3/666666?text=Product",
    category: "Electronics",
    url: "https://godokan.com/products/wh-001",
  },
  review = {
    title: "Great product and fast delivery.",
    by: "NewUser",
    url: "https://godokan.com/seller/feedback/1",
    rating: 5,
  },
}: ProductReviewProps) {
  const rating = Math.max(0, Math.min(5, Number(review.rating) || 0));
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? "★" : "☆",
  ).join("");
  return (
    <VendorLayout previewText="Your product received new feedback">
      <Text className="text-[14px] font-bold tracking-[1px] text-[#806600]">
        NEW PRODUCT FEEDBACK
      </Text>
      <Text className="text-[28px] font-bold">
        Your Product Received New Feedback
      </Text>
      <Text className="text-[24px] font-bold">
        Hello {name},
      </Text>
      <Text>
        Your product from {sellerName} has received new feedback from a customer
        on Godokan.
      </Text>
      <Section className="my-4 rounded-lg border border-[#eeeeee] p-5">
        <Img src={product.image} width="300" alt={product.name} />
        <Text className="font-bold">{product.name}</Text>
        <Text>
          Product Code: {product.code}
          <br />
          Category: {product.category}
        </Text>
        <VendorButton href={product.url}>VIEW PRODUCT</VendorButton>
      </Section>
      <Section className="rounded-lg bg-[#f7f7f7] p-5">
        <Text className="font-bold">CUSTOMER FEEDBACK</Text>
        {review.title && <Text>&quot;{review.title}&quot;</Text>}
        {review.rating !== undefined && (
          <Text className="text-[#806600]">
            {stars} {rating}/5
          </Text>
        )}
        <Text>
          <strong>By {review.by}</strong>
        </Text>
        <VendorButton href={review.url}>VIEW FEEDBACK</VendorButton>
      </Section>
      <Section className="py-4 text-center">
        <VendorButton href={link}>VIEW ALL FEEDBACKS</VendorButton>
      </Section>
    </VendorLayout>
  );
}
