import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import empty from "../../static/empty-state.svg";

const styles = theme => ({
  container: {
    display: "flex",
    height: "80vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    width: 200
  }
});

const EmptyState = ({ classes }) => (
  <div className={classes.container}>
    <img className={classes.image} src={empty} alt="Empty" />
    <Typography>No has añadido ningún servicio aún</Typography>
  </div>
);

export default withStyles(styles)(EmptyState);
