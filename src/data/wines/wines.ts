export const frontmatter = {
  sections: {
    intros: [
      {
        heading:  "La Barrica de Vitivinos",
        image: "../img/wines/3bottle.jpg",
        body: [
          "Bobal's Mr. José Gracia",
          "La Manchuela's Diamond",
        ],
        link: {
          to: "/red-wines",
          label: "Red wines",
        },
      },
      {
        heading: "The Vitivinos' whites",
        image: "../img/wines/White Wine.jpg",
        body: [
          "The intensity of vitivino´s aroma",
        ],
        link: {
          to: "/white-wine",
          label: "White wines",
        },
      },
      {
        heading: "Dulzón,the Elegancy of Spanish Bubbles",
        image: "../img/wines/Sparkling wine.jpg",
        body: [
          "Selected White grapes varieties … Manual harvest … We are commited to giving you…",
          "The elegancy of Spanish Bubbles",
        ],
        link: {
          to: "/sparkling-wines",
          label: "Sparkling Wines",
        },
      },
    ],
    more: {
      heading: "Do you want something more?",
      logo: "../img/logos/baple-wines-logo.png",
      link: {
        label: "Contact us!",
        to: "/contact",
      },
    },
  },
};
