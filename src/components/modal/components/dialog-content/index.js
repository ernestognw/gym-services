import MuiDialogContent from "@material-ui/core/DialogContent";
import { withStyles } from "@material-ui/core/styles";

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    width: "100%",
    padding: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column"
  }
}))(MuiDialogContent);

export default DialogContent;
