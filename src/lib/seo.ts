const seo = {
  title: "Emunak | Velas Aromáticas Artesanales",
  description:
    "Velas artesanales aromáticas hechas con amor en Colombia. Descubre aromas que relajan y transforman tu espacio.",
  keywords: [
    "velas aromáticas",
    "velas artesanales",
    "velas en Colombia",
    "Emunak",
    "velas decorativas",
    "velas perfumadas",
    "velas naturales",
    "velas para meditación",
    "velas hechas a mano",
  ],
  openGraph: {
    title: "Emunak | Velas Aromáticas Artesanales",
    description:
      "Explora nuestra colección de velas que llenan tu hogar de magia y tranquilidad.",
    url: "https://emunak.vercel.app",
    siteName: "Emunak",
    images: [
      {
        url: "https://emunak.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velas aromáticas Emunak",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@emunakvelas", // si tienes usuario de Twitter
    title: "Emunak | Velas Aromáticas",
    description:
      "Descubre nuestras velas artesanales y conecta con la calma.",
    images: ["https://emunak.vercel.app/images/og-image.jpg"],
  },
  additionalMetaTags: [
    { name: "author", content: "Emunak" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "theme-color", content: "#f6f2eb" }, // tono cálido
    { name: "generator", content: "Next.js 15" },
    { name: "copyright", content: "© 2025 Emunak" },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "canonical",
      href: "https://emunak.vercel.app",
    },
    {
      rel: "alternate",
      hrefLang: "es",
      href: "https://emunak.vercel.app",
    },
  ],
  socialProfiles: {
    instagram: "https://www.instagram.com/emunak", // cambia si es otro
    tiktok: "https://www.tiktok.com/@emunak", // cambia si es otro
    whatsapp: "https://wa.me/573001234567", // cambia al número real
  },
};

export default seo;
