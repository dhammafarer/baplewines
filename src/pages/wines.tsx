import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import Intro from "../components/sections/Intro";
import More from "../components/sections/More";

interface IndexProps {
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

const WinesPage: React.SFC<IndexProps> = (({ data }) => {
  const { intros, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      {intros.map((a: any, i) =>
        <Intro
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

export default WinesPage;

export const query = graphql`
  query WinesPageQuery {
    javascriptFrontmatter(fileAbsolutePath: {regex: "/wines\/wines.ts/"}) {
      frontmatter {
        sections {
          intros {
            heading
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
