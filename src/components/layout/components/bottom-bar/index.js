import React from "react";
import { withStyles } from "@material-ui/core/styles";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  },
  downloadText: {
    marginLeft: 5
  }
});

const BottomBar = ({ classes, toggleModal, empty, download }) => (
  <AppBar position="fixed" color="primary" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      {!empty && (
        <Button onClick={download} color="inherit" aria-label="Open drawer">
          <VerticalAlignBottomIcon fontSize="small" />
          <Typography
            className={classes.downloadText}
            variant="button"
            color="inherit"
          >
            Descargar .txt
          </Typography>
        </Button>
      )}
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
          <AddIcon fontSize="small" />
        </Fab>
      </Tooltip>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(BottomBar);
