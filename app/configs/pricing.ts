export const configPricingFeatures = [
  { icon: "database", name: "Database" },
  { name: "Database Space" },
  { name: "Database Transfer" },
  { icon: "auth", name: "Auth" },
  { name: "Users" },
  { icon: "storage", name: "Storage" },
  { name: "Storage Space" },
  { name: "Storage Transfer" },
];

export const configPricingPlans = [
  {
    name: "Free",
    price: {
      USD: "0",
      EUR: "0",
      GBP: "0",
      CAD: "0",
      SGD: "0",
      MYR: "0",
      IDR: "0",
    },
    info: "For experiments and simple applications",
    button: {
      text: "Sign up for Free",
      to: "/signup",
    },
    benefits: [
      "Shared container",
      "Up to 50 MB database space",
      "Up to 500 MB database transfer bandwidth",
      "Up to 250 MB file storage space",
      "Up to 500 MB file storage transfer bandwidth",
      "Basic authentication and authorization",
      "Up to 50 registered users",
      "Community support",
      // "1-day log retention",
    ],
    features: [null, "50 MB", "500 MB", null, 50, null, "250 MB", "500 MB"],
  },
  {
    name: "Hobby",
    price: {
      USD: "5",
      EUR: "4",
      GBP: "4",
      CAD: "6",
      SGD: "7",
      MYR: "22",
      IDR: "75k",
    },
    info: "For production and more complex applications",
    button: {
      text: "Sign up for Hobby",
      to: "/signup",
    },
    benefits: [
      "Shared container",
      "Up to 250 MB database space",
      "Up to 5 GB database transfer bandwidth",
      "Up to 500 MB file storage space",
      "Up to 5 GB file storage transfer bandwidth",
      "Up to 500 registered users",
      // "7-day log retention",
    ],
    features: [null, "250 MB", "5 GB", null, 500, null, "500 MB", "5 GB"],
  },
  {
    name: "Pro",
    price: {
      USD: "25",
      EUR: "23",
      GBP: "20",
      CAD: "32",
      SGD: "34",
      MYR: "110",
      IDR: "360k",
    },
    info: "For advanced production, with pay per usage",
    button: {
      text: "Sign up for Pro",
      to: "/signup",
    },
    benefits: [
      "Dedicated container",
      "Up to 8 GB database space + $0.5 per GB",
      "Up to 50 GB database transfer bandwidth + $0.09 per GB",
      "Up to 100 GB file storage space + $0.05 per GB",
      "Up to 50 GB file storage transfer bandwidth + $0.09 per GB",
      "Up to 50,000 registered users + $0.001 per extra user",
      // "30-day log retention",
    ],
    features: [
      null,
      "8 GB + $0.5 per GB",
      "50 GB + $0.09 per GB",
      null,
      "50,000 + $0.001 per user",
      null,
      "100 GB + $0.05 per GB",
      "50 GB + $0.09 per GB",
    ],
  },
  {
    name: "Enterprise",
    price: {
      USD: "",
      EUR: "",
      GBP: "",
      IDR: "",
    },
    info: "For large-scale mission critical applications",
    button: {
      text: "Coming Soon",
    },
    benefits: [
      "Self hosted or on-premise",
      "Point in time recovery",
      "Designated Support manager & SLAs",
      "Enterprise OAuth providers",
      "SSO & SAML",
      "Custom contracts & invoicing",
      "On-premise support",
      "24×7×365 premium enterprise support",
      // "SOC2",
    ],
    features: [
      null,
      "Unlimited",
      "Unlimited",
      null,
      "Unlimited",
      null,
      "Unlimited",
      "Unlimited",
    ],
  },
];
