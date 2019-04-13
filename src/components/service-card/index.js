import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginBottom: 20
  },
  subtitle: {
    fontWeight: "bold"
  }
});

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          title: "Escaladora",
          maxTime: "50",
          serviceKey: "C-002",
          type: "C",
          cost: "50",
          hasInstructor: true
        },
        {
          title: "Caminadora",
          maxTime: "10",
          serviceKey: "E-001",
          type: "E",
          cost: "60",
          hasInstructor: false
        },
        {
          title: "Caminadora",
          maxTime: "10",
          serviceKey: "E-001",
          type: "E",
          cost: "60",
          hasInstructor: false
        }
      ]
    };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { services } = this.state;

    return (
      <Fragment>
        {services.map(service => (
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton>
                  <ClearIcon />
                </IconButton>
              }
              title={service.title}
              subheader={service.serviceKey}
            />
            <CardContent>
              <Typography className={classes.subtitle} variant="subtitle2">
                Tiempo máximo de reserva:
              </Typography>
              <Typography>{service.maxTime} minutos</Typography>
              <Typography className={classes.subtitle} variant="subtitle2">
                Tipo de servicio
              </Typography>
              <Typography>{service.type}</Typography>
              <Typography className={classes.subtitle} variant="subtitle2">
                Costo
              </Typography>
              <Typography>${service.cost} /hr.</Typography>
              <Typography className={classes.subtitle} variant="subtitle2">
                ¿Tiene instructor?
              </Typography>
              <Typography>{service.hasInstructor ? "Sí" : "No"}</Typography>
            </CardContent>
          </Card>
        ))}
      </Fragment>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
