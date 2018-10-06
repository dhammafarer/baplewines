import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionFeatured from "../components/sections/SectionFeatured";
import About from "../components/sections/About";
import More from "../components/sections/More";

interface IndexProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          abouts: any[],
          more: any,
        },
      },
    },
  };
}

const AbouPage: React.SFC<IndexProps> = (({ data }) => {
  const { abouts, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      {abouts.map((a: any, i) =>
        <About
          reverse={i % 2 === 0}
          key={i}
          heading={a.heading}
          image={a.image}
          body={a.body}
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

export default AbouPage;

export const query = graphql`
  query AboutPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/wines\/about.ts/"}) {
      frontmatter {
        sections {
          abouts {
            heading
            body
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
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
