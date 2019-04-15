import React from "react";
import { withStyles } from "@material-ui/core/styles";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
    bottom: 30,
    right: 30,
    margin: "0 auto"
  }
});

const BottomBar = ({ classes, toggleModal }) => (
  <AppBar position="fixed" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <IconButton color="inherit" aria-label="Open drawer">
        <VerticalAlignBottomIcon />
      </IconButton>
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
  </AppBar>
);

export default withStyles(styles)(BottomBar);
