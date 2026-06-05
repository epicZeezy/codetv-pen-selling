export const testimonials = [
  {
    quote: "I closed Reddit. That alone was worth four dollars.",
    name: "Maya T.",
    school: "State U",
    year: "Sophomore",
  },
  {
    quote:
      "My chem notes finally look like notes, not a transcript of nothing.",
    name: "Jordan K.",
    school: "Lincoln High",
    year: "Senior",
  },
  {
    quote:
      "It's a pen. I know. But I also know what's on the midterm now.",
    name: "Priya S.",
    school: "Westlake College",
    year: "Freshman",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
