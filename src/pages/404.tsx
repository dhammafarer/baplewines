import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layouts/Layout";
import SectionCentered from "../components/sections/SectionCentered";

const NotFound: React.SFC<{}> = (() => {
  return (
    <Layout>
      <SectionCentered
        heading={"Not Found"}
        subheading={"This page is not available."}
      />
    </Layout>
  );
});

export default NotFound;
