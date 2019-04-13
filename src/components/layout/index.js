import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "./components/topbar";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100%",
    overflow: "auto"
  }
});

const Layout = ({ classes, children }) => (
  <div className={classes.root}>
    <CssBaseline />
    <TopBar />
    <main className={classes.content}>{children}</main>
  </div>
);

export default withStyles(styles)(Layout);
