import * as React from "react";
import Helmet from "react-helmet";

interface Props {
  title: string;
  lang: string;
}

const Head: React.SFC<Props> = ({ lang, title }) => (
  <Helmet
    title={title}
    htmlAttributes={{lang}}
    meta={[
      {name: "description", content: "Baple Group"},
    ]}
    link={[
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Playfair+Display:300,400,500"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
    ]}
  />
);

export default Head;
