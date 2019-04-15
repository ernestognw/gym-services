import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  text: {
    paddingBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

const BottomBar = ({ classes, toggleModal }) => (
  <AppBar position="fixed" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Tooltip
        title="Añadir servicio"
        aria-label="Añadir servicio"
        placement="top"
      >
        <Fab
          onClick={toggleModal}
          color="secondary"
          aria-label="Añadir servicio"
          className={classes.fabButton}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </Toolbar>
    <Typography align="center" color="inherit" className={classes.text}>
      Gym Services
    </Typography>
  </AppBar>
);

export default withStyles(styles)(BottomBar);
