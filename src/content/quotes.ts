export const quotes = [
  {
    quote:
      "It takes 23 minutes to regain focus after a single interruption.",
    attribution: "Gloria Mark, UC Irvine",
  },
  {
    quote:
      "Students who wrote notes by hand performed better on conceptual questions.",
    attribution: "Psychological Science, 2014",
  },
  {
    quote:
      "Writing by hand forces the brain to process information more deeply.",
    attribution: "Mueller & Oppenheimer",
  },
  {
    quote:
      "Very effective. It reduced my study time and significantly boosted my grades.",
    attribution: "Student, published research",
  },
  {
    quote: "The written notes capture my thinking better than typing.",
    attribution: "Dr. Kenneth Kiewra, Univ. of Nebraska",
  },
  {
    quote:
      "Laptop note-takers tend to transcribe verbatim rather than engage — that's what undermines learning.",
    attribution: "Psychological Science",
  },
] as const;

export type Quote = (typeof quotes)[number];
