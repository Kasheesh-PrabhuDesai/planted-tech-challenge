import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { PlantationContext } from "../../App";
import FilteredCard from "../../components/Cards/FilteredCards";
import ProjectCard from "../../components/Cards/ProjectCard";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search";

const useStyles = makeStyles(theme =>
  createStyles({
    searchBar: {
      height: "15vh",
    },
  })
);

export default function HomePage() {
  const classes = useStyles();
  const { filteredProjects } = useContext(PlantationContext);
  return (
    <Layout>
      <Grid container justifyContent="center" className={classes.searchBar}>
        <Search />
      </Grid>
      <Grid container justifyContent="center">
        {filteredProjects.length > 0 ? <FilteredCard /> : <ProjectCard />}
      </Grid>
    </Layout>
  );
}
