import { render, screen } from "@testing-library/react";
import { PlantationContext } from "../App";
import HomePage from "../pages/HomePage";
import { NearestProjectsType } from "../utils";

const mockProjects = [
  {
    name: "Neu-Ulm",
    projects: [
      {
        name: "Pfälzerwald",
        id: 52,
        startId: 23633,
        endId: 23832,
        distance: 162.33873464324165,
      },
      {
        name: "Pfälzerwald",
        id: 56,
        startId: 23883,
        endId: 24082,
        distance: 162.33873464324165,
      },
      {
        name: "Factor Product",
        id: 49,
        startId: 23185,
        endId: 23384,
        distance: 172.18480177519587,
      },
    ],
  },
];

describe("Home page tests", () => {
  it("Renders closest project on successfully fetching plantation projects and customer locations", async () => {
    const closestProjects = mockProjects;
    const filteredProjects = [] as NearestProjectsType;
    const setFilteredProjects = () => {};

    render(
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
    const projectCards = screen.queryAllByRole("project-card");
    const title = screen.queryAllByRole("title");
    const searchBar = screen.queryByRole("search");
    expect(projectCards.length).toBe(3);
    expect(searchBar).toBeInTheDocument();
    expect(title.length).toBe(1);
  });
});
