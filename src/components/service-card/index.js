import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TimerIcon from "@material-ui/icons/Timer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

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
          <ClearIcon fontSize="small" />
        </IconButton>
      }
      title={service.descOrSport}
      subheader={`${service.type}-${service.serviceKey}`}
    />
    <List>
      <ListItem>
        <ListItemIcon>
          <TimerIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          secondary={`${service.maxTime} minutos`}
          primary="Tiempo máximo de reserva"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocalOfferIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          secondary={service.type}
          primary={`Tipo de ${
            service.category === "device" ? "aparato" : "cancha"
          }`}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <AttachMoneyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText
          secondary={`$${service.cost} /${
            service.category === "device" ? "15 min." : "hr."
          }`}
          primary="Costo"
        />
      </ListItem>
      {service.category === "device" ? (
        <ListItem>
          <ListItemIcon>
            <AccessibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            secondary={service.hasInstructor === "V" ? "Sí" : "No"}
            primary="¿Tiene instructor?"
          />
        </ListItem>
      ) : (
        <ListItem>
          <ListItemIcon>
            <AccessibilityIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            secondary={service.maxPeople}
            primary="Cantidad máxima de personas"
          />
        </ListItem>
      )}
    </List>
  </Card>
);

export default withStyles(styles)(ServiceCard);
