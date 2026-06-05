export const site = {
  brandName: "Encode",
  tagline: "A focus tool that happens to write.",
  mission: "Analog tools for students who are tired of pretending their laptop is a notebook.",
  price: 3.99,
  waitlistEmail: "hello@encodepen.com",
  navLinks: [
    { label: "The Problem", href: "#problem" },
    { label: "The Fix", href: "#solution" },
    { label: "The Science", href: "#science" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Price", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;

export type NavLink = (typeof site.navLinks)[number];
