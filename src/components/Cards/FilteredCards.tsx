import {
  Grid,
  Typography,
  Card,
  CardContent,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { Fragment, useContext } from "react";
import { PlantationContext } from "../../App";

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      width: "40vw",
      height: "auto",
      margin: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
    text: {
      fontSize: "1.3rem",
      textAlign: "left",
      color: "#5e5d5d",
      fontWeight: 300,
      wordBreak: "break-word",
    },
    heading: {
      fontSize: "1.2rem",
      color: "#000",
      textAlign: "center",
      fontWeight: 700,
    },
    title: {
      color: "blue",
      fontSize: "1.5rem",
      fontWeight: 700,
      textAlign: "center",
    },
  })
);

export default function FilteredCard() {
  const classes = useStyles();
  const { filteredProjects } = useContext(PlantationContext);
  return (
    <Fragment>
      {filteredProjects.map((item, index) => (
        <Grid key={index}>
          <Typography variant="h3" className={classes.title} key={index}>
            {item.name}
          </Typography>
          {item.projects.map(project => (
            <Card className={classes.card} key={project.id}>
              <CardContent>
                <Typography className={classes.text}>
                  <b className={classes.heading}>Project Name : </b>
                  {project.name}
                </Typography>
                <Typography className={classes.text}>
                  <b className={classes.heading}>Distance : </b>
                  {Math.floor(project.distance)} kms
                </Typography>
                <Typography variant="h6" className={classes.text}>
                  <b className={classes.heading}>Start Id : </b>
                  {project.startId}
                </Typography>
                <Typography variant="h6" className={classes.text}>
                  <b className={classes.heading}>End Id : </b>
                  {project.endId}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      ))}
    </Fragment>
  );
}
