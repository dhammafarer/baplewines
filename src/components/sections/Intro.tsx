import * as React from "react";
import { graphql } from "gatsby";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/intro-styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SectionImage from "./SectionImage";
import { Link } from "gatsby";

export interface IntroProps {
  reverse?: boolean;
  heading?: string;
  subheading?: string;
  body?: string[];
  image?: any;
  link?: {
    label?: string
    to?: string,
  };
}

type Props = WithStyles<typeof styles> & IntroProps;

const Intro: React.SFC<Props> = ({ reverse, heading, subheading, body, image, link, classes }) => (
  <SectionImage
    reverse={reverse}
    image={image}
    heading={heading}
    subheading={subheading}
    body={body}
    after={link &&
      <Link to={link.to}>
        <Button variant="outlined" className={classes.button}>
          {link.label}
        </Button>
      </Link>
    }
  />
);

export default withStyles(styles)(Intro);
