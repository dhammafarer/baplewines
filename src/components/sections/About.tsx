import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/about-styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "gatsby";
import SectionImage, { Size } from "./SectionImage";
import Img from "gatsby-image";

type Props = WithStyles<typeof styles> & {
  reverse?: boolean;
  leftSize?: Size;
  rightSize?: Size;
  heading?: string;
  subheading?: string;
  image?: any;
  logo?: any;
  body?: string[];
};

const About: React.SFC<Props> = ({
  heading, subheading, image, logo, body, reverse, classes, leftSize, rightSize
}) => (
  <SectionImage
    leftSize={leftSize || 6}
    rightSize={rightSize || 6}
    reverse={reverse}
    heading={heading}
    subheading={subheading}
    body={body}
    image={image}
    before={logo &&
      <Img className={classes.logo} fixed={logo.childImageSharp.fixed}/>
    }
  />
);

export default withStyles(styles)(About);
