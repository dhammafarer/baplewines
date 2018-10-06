import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import About from "../components/sections/About";
import More from "../components/sections/More";

interface Props {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          wines: any[],
          more?: any,
        },
      },
    },
  };
}

const WinesTemplate: React.SFC<Props> = (({ data }) => {
  const { wines, more } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      { wines.map((w: any, i) =>
        <About
          key={i}
          leftSize={4}
          rightSize={8}
          heading={w.heading}
          subheading={w.subheading}
          body={w.body}
          image={w.image}
        />,
      )}
      { more &&
        <More
          heading={more.heading}
          image={more.image}
          logo={more.logo}
          link={more.link}
        />
      }
    </Layout>
  );
});

export default WinesTemplate;

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      frontmatter {
        sections {
          wines {
            heading
            subheading
            body
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            link {
              to
              label
            }
          }
          more {
            heading
            logo {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            link {
              to
              label
            }
          }
        }
      }
    }
  }
`;
