import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "./components/dialog-title";
import DialogContent from "./components/dialog-content";
import DialogActions from "./components/dialog-actions";
import DeviceForm from "./components/device-form";
import FieldForm from "./components/field-form";
import LabelIcon from "@material-ui/icons/Label";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  menu: {
    width: "100%"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }
});

const services = [
  {
    label: "Aparato",
    value: "device"
  },
  {
    label: "Cancha",
    value: "field"
  }
];

const Modal = ({
  toggleModal,
  active,
  classes,
  handleInput,
  handleSubmit,
  form
}) => (
  <Dialog fullScreen onClose={toggleModal} open={active}>
    <DialogTitle className={classes.menu} onClose={toggleModal}>
      Añade un servicio
    </DialogTitle>
    <form className={classes.form} onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          name="category"
          select
          required
          label="Categoría del servicio"
          onChange={handleInput}
          margin="normal"
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            },
            startAdornment: (
              <InputAdornment position="start">
                <LabelIcon />
              </InputAdornment>
            )
          }}
          InputLabelProps={{ shrink: true }}
          className={classes.textField}
          value={form.category}
        >
          <option hidden value="" />
          {services.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        {form.category === "device" && (
          <DeviceForm handleInput={handleInput} form={form} />
        )}
        {form.category === "field" && (
          <FieldForm handleInput={handleInput} form={form} />
        )}
      </DialogContent>
      <DialogActions>
        <Button type="submit" color="primary">
          Añadir servicio
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);

export default withStyles(styles)(Modal);
