import { CategoryPage } from "../../pages";

export const frontmatter: CategoryPage = {
  layout: "category",
  sections: {
    intro: {
      heading: "Botellas",
      image: "../../img/plastics/WelcomeImage_Bottles.jpg",
      body: [
        "Baple dispone de la gran mayoría de soluciones demandadas por la industria. Adicionalmente, la incorporación de nuevas y modernas soluciones forma parte del trabajo rutinario para ofrecer siempre soluciones de valor añadido a nuestros partners.",
      ],
      link: {
        to: "/plastics/contact",
        label: "Contáctanos!",
      },
    },
    categoryList: {
      categoryItems: [
        {
          heading: "Botellas",
          image: "../../img/plastics/Product_Bottles.jpg",
          body: [
          "¿Interesado en Botellas?",
          "Por favor, contáctenos para poder ofrecerle un servicio personalizado, asesoramiento y catálogo completo.",
          ],
          spec: [
            {
              heading: "Especificaciones Generales",
              params: [
                {
                  key: "Material",
                  value: "PET, PE, PP, HDPE",
                },
                {
                  key: "Formatos",
                  value: "24/410; 24/415; 28/400; 28/410,18/410; 20/410; 24/410",
                },
                {
                  key: "Capacidades",
                  value: "10ml - 1000 ml",
                },
                {
                  key: "Diseño",
                  value: "Rango completo de diseños",
                },
                {
                  key: "Color",
                  value: "Rango completo de colores y combinaciones",
                },
              ],
            },
          ],
          link: {
            to: "/plastics/contact",
            label: "Contacta con nosotros!",
          },
        },
      ],
    },
  },
};
