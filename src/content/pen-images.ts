import { assetPath } from "@/lib/asset-path";

export const penImages = {
  classic: {
    src: assetPath("/images/pens/parts-of-a-ballpoint-pen.jpg"),
    alt: "Disassembled ballpoint pen showing its parts",
    credit: "Pokéfan95 / Wikimedia Commons (CC0)",
  },
  fine: {
    src: assetPath("/images/pens/tip-of-a-ballpoint-pen.jpg"),
    alt: "Close-up of a fine ballpoint pen tip",
    credit: "pandakekok9 / Wikimedia Commons (CC0)",
  },
  threePack: {
    src: assetPath("/images/pens/parker-jotter-sheaffer-sentinel-ballpoints.jpg"),
    alt: "Three ballpoint pens side by side",
    credit: "Wikimedia Commons (CC0)",
  },
} as const;
