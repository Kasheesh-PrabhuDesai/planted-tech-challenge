import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { calculateProjectDistances } from "./helpers";
import HomePage from "./pages/HomePage";
import { CustomerType, NearestProjectsType, ProjectType } from "./utils";

type PlantationContextType = {
  closestProjects: NearestProjectsType;
  filteredProjects: NearestProjectsType;
  setFilteredProjects: Dispatch<SetStateAction<NearestProjectsType>>;
};

export const PlantationContext = createContext<PlantationContextType>(
  {} as PlantationContextType
);

function App() {
  const [customers, setCustomers] = useState<CustomerType>([] as CustomerType);
  const [plantationProjects, setPlantationProjects] = useState<ProjectType>(
    [] as ProjectType
  );
  const [closestProjects, setClosestProjects] = useState<NearestProjectsType>(
    [] as NearestProjectsType
  );
  const [filteredProjects, setFilteredProjects] = useState<NearestProjectsType>(
    [] as NearestProjectsType
  );
  useEffect(() => {
    fetch("./customerLocations.json")
      .then(customer => {
        return customer.json();
      })
      .then(data => setCustomers(data))
      .catch(err => console.log(err, "error"));
  }, []);

  useEffect(() => {
    fetch("./plantationProjects.json")
      .then(project => {
        return project.json();
      })
      .then(data => setPlantationProjects(data))
      .catch(err => console.log(err, "error"));
  }, []);

  const nearestProjects = useMemo(
    () => calculateProjectDistances(customers, plantationProjects),
    [customers, plantationProjects]
  );

  useEffect(() => {
    if (nearestProjects) {
      setClosestProjects(nearestProjects);
    }
  }, [nearestProjects]);

  return (
    <PlantationContext.Provider
      value={{
        closestProjects,
        filteredProjects,
        setFilteredProjects,
      }}
    >
      <HomePage />
    </PlantationContext.Provider>
  );
}

export default App;
