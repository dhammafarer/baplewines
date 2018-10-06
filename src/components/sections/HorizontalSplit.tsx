import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
  container: {
    width: "100%",
    background: theme.palette.common.white,
  },
  item: {
    width: "100%",
  },
});

export type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface HorizontalSplitProps {
  left: any;
  right: any;
  classes: any;
  reverse?: boolean;
  leftSize: Size;
  rightSize: Size;
}

type Props = WithStyles<typeof styles> & HorizontalSplitProps;

class HorizontalSplit extends React.Component<Props, {}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes, reverse, left, right, leftSize, rightSize } = this.props;

    return (
      <Grid container className={classes.container} direction={(reverse ? "row-reverse" : "row")}>
        <Grid item xs={12} md={leftSize} className={classes.item}>
          {left}
        </Grid>
        <Grid item xs={12} md={rightSize} className={classes.item}>
          {right}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HorizontalSplit);
