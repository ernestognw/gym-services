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

const ServiceCard = ({ classes, service, id, handleDelete }) => (
  <Card className={classes.card}>
    <CardHeader
      action={
        <IconButton onClick={() => handleDelete(id)}>
          <ClearIcon />
        </IconButton>
      }
      title={service.descOrSport}
      subheader={`${service.type}-${service.serviceKey}`}
    />
    <List>
      <ListItem>
        <ListItemText
          primary={`${service.maxTime} minutos`}
          secondary="Tiempo máximo de reserva"
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={service.type} secondary="Tipo de servicio" />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`$${service.cost} /${
            service.category === "device" ? "15 min." : "hr."
          }`}
          secondary="Costo"
        />
      </ListItem>
      {service.category === "device" ? (
        <ListItem>
          <ListItemText
            primary={service.hasInstructor ? "Sí" : "No"}
            secondary="¿Tiene instructor?"
          />
        </ListItem>
      ) : (
        <ListItem>
          <ListItemText
            primary={service.maxPeople}
            secondary="Cantidad máxima de personas"
          />
        </ListItem>
      )}
    </List>
  </Card>
);

export default withStyles(styles)(ServiceCard);
