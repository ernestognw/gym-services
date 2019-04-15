import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  toolbar: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    marginBottom: -6
  }
});

const TopBar = ({ classes, toggleModal }) => (
  <AppBar position="fixed" color="primary">
    <Toolbar className={classes.toolbar}>
      <Typography className={classes.title} variant="h6" color="inherit">
        Servicios del Gimnasio
      </Typography>
      <Typography color="inherit" variant="caption" className={classes.grow}>
        Programación Orientada a Objetos
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(TopBar);
