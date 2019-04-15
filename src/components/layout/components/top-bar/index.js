import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  toolbar: {
    alignItems: "center",
    justifyContent: "center"
  }
});

const TopBar = ({ classes, toggleModal }) => (
  <AppBar position="static" color="primary">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Servicios del Gimnasio
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(TopBar);
