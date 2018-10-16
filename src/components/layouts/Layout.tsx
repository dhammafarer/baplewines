import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import withRoot from "../../utils/withRoot";

import App from "./App";

interface AppData {
  title: string;
  navLinks: any;
  contact: ContactData;
}

interface ContactData {
  name: string;
  phone: string;
  email: string;
  address: string[];
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

interface Data {
  site: {
    siteMetadata: AppData;
  };
  logo: any;
}

const Layout: React.SFC<{}> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            home
            navLinks {
              to
              label
              links {
                to
                label
              }
            }
            contact {
              email
              phone
              address
              socialMedia {
                facebook
                twitter
                instagram
              }
            }
          }
        }
        logo: file(relativePath: {eq: "logos/baple-wines-logo.png"}) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
  render={(data: Data) => {
    const sm = data.site.siteMetadata;
    return (
      <App
        title={sm.title}
        home={sm.home}
        logo={data.logo}
        navLinks={sm.navLinks}
        lang={"es"}
        contact={sm.contact}
      >
        {children}
      </App>
      ); }
    }
  />
);

export default withRoot(Layout);
