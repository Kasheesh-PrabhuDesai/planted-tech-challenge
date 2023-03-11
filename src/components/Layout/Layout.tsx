import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#F6F7FC",
      margin: theme.spacing(-1),
      padding: theme.spacing(-1),
    },
  })
);

export default function Layout({ children }: LayoutProps) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {children}
    </Grid>
  );
}
