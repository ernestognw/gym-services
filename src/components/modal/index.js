import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogTitle from "./components/dialog-title";
import DialogContent from "./components/dialog-content";
import DialogActions from "./components/dialog-actions";

const Modal = ({ toggleModal, active }) => (
  <Dialog
    onClose={toggleModal}
    aria-labelledby="customized-dialog-title"
    open={active}
  >
    <DialogTitle id="customized-dialog-title" onClose={toggleModal}>
      Modal title
    </DialogTitle>
    <DialogContent>
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={toggleModal} color="primary">
        Save changes
      </Button>
    </DialogActions>
  </Dialog>
);

export default Modal;
