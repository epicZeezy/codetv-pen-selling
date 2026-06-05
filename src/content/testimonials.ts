export const testimonials = [
  {
    quote:
      "It was fun to take handwritten notes, as it made learning the materials easier at the end.",
    attribution: "Longhand note-taker, published student response",
    source: "Luo et al. (2018), Innovations in Pharmacy, Vol. 9(3)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6302751/",
  },
  {
    quote:
      "Very effective. It reduced the total time needed to study for exams and significantly boosted my grades.",
    attribution: "Longhand note-taker, published student response",
    source: "Luo et al. (2018), Innovations in Pharmacy, Vol. 9(3)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6302751/",
  },
  {
    quote:
      "I was not as concerned with grammatical errors like if I'm typing. Instead, I spent more time listening and understanding. I worried less.",
    attribution: "Longhand note-taker, published student response",
    source: "Luo et al. (2018), Innovations in Pharmacy, Vol. 9(3)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6302751/",
  },
  {
    quote:
      "Uncap your pens. When my professor solved problems by hand in class, it was refreshing to comprehend the material better.",
    attribution: "Annie Newsom, college student",
    source: "BYU Universe, Readers' Forum, Jan 2019",
    sourceUrl: "https://universe.byu.edu/2019/01/29/readers-forum-1-29-19",
  },
  {
    quote: "The written notes capture my thinking better than typing.",
    attribution:
      "Dr. Kenneth Kiewra, educational psychologist, University of Nebraska",
    source: "Washington Post / Fox News Health, 2016",
    sourceUrl: "https://www.foxnews.com/health/can-handwriting-make-you-smarter",
  },
  {
    quote:
      "Didn't have to think about connectivity, malfunctions, and other problems.",
    attribution: "Longhand note-taker, published student response",
    source: "Luo et al. (2018), Innovations in Pharmacy, Vol. 9(3)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6302751/",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
