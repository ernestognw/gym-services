import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TimerIcon from "@material-ui/icons/Timer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import NotesIcon from "@material-ui/icons/Notes";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  adjustCost: {
    width: "max-content"
  }
});

const types = [
  {
    label: "(C) Caminadora",
    value: "C"
  },
  {
    label: "(E) Escaladora",
    value: "E"
  },
  {
    label: "(B) Bicicleta Estacionaria",
    value: "B"
  }
];

const DeviceForm = ({ form, classes, handleInput }) => (
  <Fragment>
    <TextField
      required
      select
      label="Tipo de aparato"
      onChange={handleInput}
      name="type"
      margin="normal"
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu
        },
        startAdornment: (
          <InputAdornment position="start">
            <LocalOfferIcon />
          </InputAdornment>
        )
      }}
      InputLabelProps={{ shrink: true }}
      className={classes.textField}
      value={form.type}
    >
      <option hidden value="" />
      {types.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
    <TextField
      required
      label="Tiempo máximo de renta"
      onChange={handleInput}
      name="maxTime"
      value={form.maxTime}
      className={classes.textField}
      margin="normal"
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <TimerIcon />
          </InputAdornment>
        ),
        endAdornment: <InputAdornment position="end">mins.</InputAdornment>
      }}
    />
    <TextField
      required
      label="Clave del Servicio"
      onChange={handleInput}
      name="serviceKey"
      value={form.serviceKey}
      className={classes.textField}
      margin="normal"
      type="number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{form.type}-</InputAdornment>
        )
      }}
    />
    <TextField
      required
      label="Costo"
      type="number"
      onChange={handleInput}
      name="cost"
      value={form.cost}
      className={classes.textField}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AttachMoneyIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="start">
            <Typography className={classes.adjustCost}>x 15 mins.</Typography>
          </InputAdornment>
        )
      }}
    />
    <TextField
      required
      select
      label="¿Tiene Instructor?"
      onChange={handleInput}
      name="hasInstructor"
      margin="normal"
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu
        },
        startAdornment: (
          <InputAdornment position="start">
            <AccessibilityIcon />
          </InputAdornment>
        )
      }}
      InputLabelProps={{ shrink: true }}
      className={classes.textField}
      value={form.hasInstructor}
    >
      <option hidden value="" />
      <option value="V">Sí</option>
      <option value="F">No</option>
    </TextField>
    <TextField
      required
      label="Descripción"
      onChange={handleInput}
      name="descOrSport"
      value={form.descOrSport}
      className={classes.textField}
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <NotesIcon />
          </InputAdornment>
        )
      }}
    />
  </Fragment>
);

export default withStyles(styles)(DeviceForm);
