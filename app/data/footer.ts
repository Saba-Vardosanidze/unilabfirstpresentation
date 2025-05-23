type FooterLink = {
  href: string;
  value: string;
};
type FooterInfo = {
  title: string;
  links: FooterLink[];
};
export const footerLists: FooterInfo[] = [
  {
    title: "C O M P A N Y",
    links: [
      {href: "#", value: "About"},
      {href: "#", value: "Features"},
      {href: "#", value: "Works"},
      {href: "#", value: "Career"},
    ],
  },
  {
    title: "H E L P",
    links: [
      {href: "#", value: "Customer Support"},
      {href: "#", value: "Delivery Details"},
      {href: "#", value: "Terms & Conditions"},
      {href: "#", value: "Privacy Policy"},
    ],
  },
  {
    title: "F A Q",
    links: [
      {href: "#", value: "Account"},
      {href: "#", value: "Manage Deliveries"},
      {href: "#", value: "Orders"},
      {href: "#", value: "Payments"},
    ],
  },
];
