module.exports = {
  contact: {
    name: "HQ",
    email: "info@baple.com.tw",
    phone: "+886-2-2897-0076",
    address: [
      "4F, No. 384, Daye Rd",
      "Beitou District, Taipei",
      "Taiwan",
    ],
    socialMedia: {
      facebook: "https://www.facebook.com/baplewines/",
      instagram: "https://www.facebook.com/baplewines/",
      twitter: "https://www.facebook.com/baplewines/",
    },
  },
  title: "Baple Wines",
  navLinks: [
    {
      label: "Inicio",
      to: "/",
    },
    {
      label: "Wines",
      to: "/wines",
      links: [
        {
          label: "Red Wines",
          to: "/red-wines",
        },
        {
          label: "White Wines",
          to: "/white-wines",
        },
        {
          label: "Sparkling Wines",
          to: "/sparkling-wines",
        },
      ],
    },
    {
      label: "Solutions",
      to: "/solutions",
    },
    {
      label: "Sobre Nosotros",
      to: "/about",
    },
    {
      label: "Contacto",
      to: "/contact",
    },
  ],
};
