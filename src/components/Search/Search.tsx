import { createStyles, Grid, makeStyles, TextField } from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import { PlantationContext } from "../../App";

const useStyles = makeStyles(theme =>
  createStyles({
    search: {
      width: "70vw",
      borderRadius: 4,
      background: "white",
      border: "0.1px solid",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  })
);

export default function Search() {
  const [location, setLocation] = useState<string>("");
  const { closestProjects, setFilteredProjects } =
    useContext(PlantationContext);
  const classes = useStyles();
  const handleSetLocation = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocation(e.target.value);
    const searchResult = closestProjects.filter(
      project => project.name.toLowerCase() === e.target.value?.toLowerCase()
    );

    setTimeout(() => {
      setFilteredProjects(searchResult);
    }, 1000);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <TextField
        variant="outlined"
        value={location}
        className={classes.search}
        onChange={e => handleSetLocation(e)}
        placeholder="🔍 Enter a location to search"
      />
    </Grid>
  );
}
