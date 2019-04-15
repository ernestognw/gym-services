import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TimerIcon from "@material-ui/icons/Timer";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GroupIcon from "@material-ui/icons/Group";
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
    label: "(T) Tennis",
    value: "T"
  },
  {
    label: "(F) Frontón",
    value: "F"
  },
  {
    label: "(V) Volleyball",
    value: "V"
  }
];

const FieldForm = ({ form, classes, handleInput }) => (
  <Fragment>
    <TextField
      required
      select
      label="Tipo de cancha"
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
            <Typography className={classes.adjustCost}>x hr.</Typography>
          </InputAdornment>
        )
      }}
    />
    <TextField
      required
      label="Cantidad Máxima de Personas"
      onChange={handleInput}
      name="maxPeople"
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <GroupIcon />
          </InputAdornment>
        )
      }}
      InputLabelProps={{ shrink: true }}
      className={classes.textField}
      value={form.maxPeople}
    />
    <TextField
      required
      label="Deporte"
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

export default withStyles(styles)(FieldForm);
