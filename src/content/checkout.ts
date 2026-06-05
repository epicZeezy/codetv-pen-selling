import { penImages } from "./pen-images";

export const penVariants = [
  {
    id: "classic",
    name: "The Classic",
    desc: "Smooth ballpoint. Black ink. The original.",
    price: 3.99,
    image: penImages.classic,
  },
  {
    id: "fine",
    name: "The Fine Tip",
    desc: "0.5mm precision. Perfect for dense notes.",
    price: 4.99,
    image: penImages.fine,
  },
  {
    id: "three-pack",
    name: "The Three-Pack",
    desc: "One of each. Share with your study group.",
    price: 9.99,
    image: penImages.threePack,
  },
] as const;

export type PenVariant = (typeof penVariants)[number];
export type PenVariantId = PenVariant["id"];
