import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { Fragment, useContext } from "react";
import { PlantationContext } from "../../App";
import ProjectCard from "../../components/Cards/ProjectCard";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search";

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

export default function HomePage() {
  return (
    <Layout>
      <Search />
      <Grid container justifyContent="center">
        <ProjectCard />
      </Grid>
    </Layout>
  );
}
