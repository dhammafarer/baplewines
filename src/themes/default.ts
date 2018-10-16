import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const primary = "#6D272F";
const primary1 = "#336699";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: "#757475",
    },
  },
  typography: {
    fontFamily: [
      "sans-serif",
    ].join(","),
    display4: {
      fontFamily: "\"PlayFair Display\", serif",
    },
    display3: {
      fontFamily: "\"PlayFair Display\", serif",
    },
    display2: {
      fontFamily: "\"PlayFair Display\", serif",
      color: primary,
    },
    display1: {
      fontFamily: "\"PlayFair Display\", serif",
      color: primary,
    },
  },
});

export default theme;
