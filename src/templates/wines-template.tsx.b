import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
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
