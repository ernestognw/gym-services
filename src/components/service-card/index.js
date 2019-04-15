import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: 20,
    marginRight: "auto",
    marginLeft: "auto"
  },
  subtitle: {
    fontWeight: "bold"
  }
});

class RecipeReviewCard extends React.Component {
  render() {
    const { classes, service } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <ClearIcon />
            </IconButton>
          }
          title={service.descOrSport}
          subheader={service.serviceKey}
        />
        <List>
          <ListItem>
            <ListItemText
              primary={`${service.maxTime} minutos`}
              secondary="Tiempo máximoo de reserva"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={service.type} secondary="Tipo de servicio" />
          </ListItem>
          <ListItem>
            <ListItemText primary={`$${service.cost} /hr.`} secondary="Costo" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={service.hasInstructor ? "Sí" : "No"}
              secondary="¿Tiene instructor?"
            />
          </ListItem>
        </List>
      </Card>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
