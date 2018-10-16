import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionFeatured from "../components/sections/SectionFeatured";
import Intro from "../components/sections/Intro";
import More from "../components/sections/More";

interface IndexProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          welcome: any,
          intros: any[],
          more: any,
        },
      },
    },
  };
}

const IndexPage: React.SFC<IndexProps> = (({ data }) => {
  const { welcome, intros, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      <SectionFeatured
        fullHeight
        heading={welcome.heading}
        image={welcome.image}
      />
      {intros.map((a: any, i) =>
        <Intro
          reverse={i % 2 === 0}
          key={i}
          heading={a.heading}
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

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/wines\/index.ts/"}) {
      frontmatter {
        sections {
          welcome {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          intros {
            heading
            body
            link {
              to
              label
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
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
