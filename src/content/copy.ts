import { site } from "./site";

export const copy = {
  hero: {
    label: "01 — FOCUS",
    headline: "Write beyond the noise",
    subheadline: "Write. focus. thrive",
    primaryCta: "Buy Now — $3.99",
    secondaryCta: "See why it works",
    proof: "Backed by peer-reviewed research. Seriously. It's a pen.",
  },
  problem: {
    label: "02 — THE PROBLEM",
    headline: "Every notification is a tax on your memory.",
    subheadline:
      "Typing notes on a laptop feels productive. It's mostly context switching with extra steps.",
    body: "When your notes live on the same machine as Discord, email, and whatever algorithm decided you need to see that video — you're not encoding information. You're switching contexts and hoping something sticks.",
    stats: [
      {
        value: "23 min",
        label: "to refocus after a distraction",
        source: "Mark et al., UC Irvine",
        url: "https://ics.uci.edu/~gmark/chi08-mark.pdf",
      },
      {
        value: "6 tabs",
        label: "open during your \"study session\"",
        source: "You know who you are",
      },
      {
        value: "0%",
        label: "retention when you were on TikTok",
        source: "Unpublished. Obvious.",
      },
    ],
  },
  solution: {
    label: "03 — THE FIX",
    headline: "One tool. One job. Remember the lecture.",
    subheadline: `${site.brandName} isn't a writing instrument. It's a focus instrument that happens to write.`,
    steps: [
      {
        number: "01",
        title: "Close the laptop",
        description: "Removes the notification surface. No pings. No previews. No \"just checking.\"",
      },
      {
        number: "02",
        title: "Write by hand",
        description:
          "Slower pace forces active encoding. You can't transcribe at lecture speed — so you actually think.",
      },
      {
        number: "03",
        title: "Review one page",
        description:
          "No infinite scroll. No search bar rabbit holes. One page of notes. One concept at a time.",
      },
    ],
    comparison: {
      digital: [
        "Notifications mid-lecture",
        "Copy-paste without reading",
        "47 browser tabs \"for research\"",
        "Ctrl+F instead of remembering",
      ],
      analog: [
        "One surface, one task",
        "Handwriting forces summarizing",
        "One notebook, one subject",
        "Flip the page, find the answer",
      ],
    },
  },
  science: {
    label: "04 — THE SCIENCE",
    headline: "Your professor didn't make this up. Neither did we.",
    subheadline:
      "Handwriting beats typing for learning — the data is older than your group chat.",
    pullQuote:
      "Students who took notes longhand outperformed laptop note-takers on conceptual questions.",
    primaryStudy: {
      authors: "Mueller & Oppenheimer",
      year: 2014,
      journal: "Psychological Science",
      title: "The Pen Is Mightier Than the Keyboard",
      summary:
        "Handwritten notes led to better conceptual understanding compared to laptop transcription — even when laptop notes contained more words.",
      url: "https://journals.sagepub.com/doi/10.1177/0956797614524581",
      pdfUrl:
        "https://journals.sagepub.com/doi/pdf/10.1177/0956797614524581",
      citation:
        "Mueller, P.A. & Oppenheimer, D.M. (2014). Psychological Science, 25(6), 1159–1168.",
    },
    supportingStudies: [
      {
        authors: "Smoker, Murphy & Rockwell",
        year: 2009,
        summary:
          "Memory for words is better when handwritten than typed — the psychomotor work of writing adds context that aids retention.",
        url: "https://journals.sagepub.com/doi/10.1177/154193120905302218",
      },
      {
        authors: "Mueller & Oppenheimer",
        year: 2014,
        summary:
          "Laptop note-takers transcribe more but learn less; longhand notes support stronger conceptual recall.",
        url: "https://journals.sagepub.com/doi/10.1177/0956797614524581",
      },
    ],
    disclaimer:
      "We're selling a pen, not a peer-reviewed journal. Read the papers yourself.",
  },
  testimonials: {
    label: "05 — REVIEWS",
    headline: "Don't take our word for it. Take theirs.",
    subheadline: "Real students. Real pens. Suspiciously specific results.",
  },
  pricing: {
    label: "06 — PRICE",
    headline: "Four dollars. One decision you'll actually follow through on.",
    subheadline: "Less than one boba. More useful than most of your subscriptions.",
    tag: "One pen. No subscription. No app. No account.",
    cta: "Buy Now",
    waitlistNote: "Shipping soon — join the waitlist",
    features: [
      "Writes on paper (revolutionary)",
      "Zero push notifications",
      "Battery life: literally forever",
      "Works offline (always has)",
      "No Terms of Service to ignore",
      "Compatible with every notebook since 1888",
    ],
  },
  faq: {
    label: "07 — FAQ",
    headline: "Questions you're definitely asking.",
    subheadline: "We sell pens. We expect skepticism.",
    items: [
      {
        question: "Is this just a normal pen?",
        answer:
          "Yes. That's the point. The magic is what you can't do with it open in another tab.",
      },
      {
        question: "Why $3.99?",
        answer:
          "Because focus shouldn't require a payment plan. Also, we're not paying for a cloud backend.",
      },
      {
        question: "Will this fix my GPA?",
        answer:
          "It won't write your paper at 2am. It might help you remember what the lecture was about.",
      },
      {
        question: "I already have pens.",
        answer: "Do you use them? Be honest.",
      },
      {
        question: "Is there an app?",
        answer: "No. That's listed under Features as a benefit.",
      },
      {
        question: "What if I hate it?",
        answer:
          "Email us. We'll say something nice and you keep the pen. It's four dollars.",
      },
    ],
  },
  footer: {
    disclaimer: "Not affiliated with your university. Or Big Pen.",
  },
} as const;
