import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomBar from "./components/bottom-bar";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: {
    ...theme.mixins.toolbar,
    height: 100
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100%"
  }
});

const Layout = ({ classes, children, toggleModal }) => (
  <div className={classes.root}>
    <CssBaseline />
    <main className={classes.content}>
      {children}
      <div className={classes.appBarSpacer} />
    </main>
    <BottomBar toggleModal={toggleModal} />
  </div>
);

export default withStyles(styles)(Layout);
