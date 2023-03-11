import { Grid } from "@material-ui/core";
import ProjectCard from "../../components/Cards/ProjectCard";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search";

export default function HomePage() {
  return (
    <Layout>
      <Grid container justifyContent="center" style={{ height: "15vh" }}>
        <Search />
      </Grid>
      <Grid container justifyContent="center">
        <ProjectCard />
      </Grid>
    </Layout>
  );
}
