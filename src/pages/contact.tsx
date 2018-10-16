import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import ContactUs from "../components/sections/ContactUs";
import ContactDetails from "../components/sections/ContactDetails";

interface ContactProps {
  data: {
    javascriptFrontmatter: {
      frontmatter: {
        sections: {
          contactUs: any,
        },
      },
    },
    site: {
      siteMetadata: {
        contact: any,
      },
    },
  };
}

const ContactPage: React.SFC<ContactProps> = (({ data }) => {
  const { contactUs } = data.javascriptFrontmatter.frontmatter.sections;
  return (
    <Layout>
      <ContactUs
        logo={contactUs.logo}
        image={contactUs.image}
        heading={contactUs.heading}
      />
      <ContactDetails contact={data.site.siteMetadata.contact}/>
    </Layout>
  );
});

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata  {
        contact {
          phone
          email
          address
          socialMedia {
            facebook
            twitter
            instagram
          }
        }
      }
    }
    javascriptFrontmatter(fileAbsolutePath: {regex: "/wines\/contact.ts/"}) {
      frontmatter {
        sections {
          contactUs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid
                }
              }
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
