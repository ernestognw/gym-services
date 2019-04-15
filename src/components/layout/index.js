import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import BottomBar from "./components/bottom-bar";
import TopBar from "./components/top-bar";

const styles = theme => ({
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
  <Fragment>
    <TopBar />
    <CssBaseline />
    <main className={classes.content}>
      {children}
      <div className={classes.appBarSpacer} />
    </main>
    <BottomBar toggleModal={toggleModal} />
  </Fragment>
);

export default withStyles(styles)(Layout);
