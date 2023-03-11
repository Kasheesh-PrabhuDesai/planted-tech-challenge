import { Grid } from "@material-ui/core";
import ProjectCard from "../../components/Cards/ProjectCard";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search";

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
