export const frontmatter = {
  sections: {
    welcome: {
      heading: "Baplewines, a selected group of wineries ready for you.",
      image: "../img/wines/Barricas-para-crianza-del-vino.jpg",
    },
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
          label: "wine-solutions",
        },
      },
      {
        heading: "The elegancy of Spanish Bubbles",
        image: "../img/wines/Low cost wine_new.jpg",
        body: [
        "We don´t just sell our wines, we go beyond... we give you wine solutions... What are you waiting for?",
        "It could be one of the best quality-cost relationship in the wine market",
        ],
        link: {
          to: "/solutions",
          label: "Wine Solutions",
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
