import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionFeatured from "../components/sections/SectionFeatured";
import Intro from "../components/sections/Intro";
import More from "../components/sections/More";

interface SolutionsProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          intros: any[],
          more: any,
        },
      },
    },
  };
}

const SolutionsPage: React.SFC<SolutionsProps> = (({ data }) => {
  const { intros, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      {intros.map((a: any, i) =>
        <Intro
          reverse={i % 2 === 0}
          key={i}
          heading={a.heading}
          subheading={a.subheading}
          image={a.image}
          body={a.body}
          link={a.link}
        />,
      )}
      <More
        heading={more.heading}
        logo={more.logo}
        link={more.link}
      />
    </Layout>
  );
});

export default SolutionsPage;

export const query = graphql`
  query SolutionsPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/wines\/solutions.ts/"}) {
      frontmatter {
        sections {
          intros {
            heading
            subheading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          more {
            heading
            link {
              to
              label
            }
            logo {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
