export type CustomerType = {
  name: string;
  latitude: number;
  longitude: number;
}[];

export type ProjectType = {
  id: number;
  type: string;
  projectName: string;
  status: string;
  forestOwnership: string;
  forestOwner: string;
  treeQuantity: number;
  location: string;
  coordinatesUrl: string;
  latitude: string;
  longitude: string;
  startId: number;
  endId: number;
  startDate: string;
  comment: string;
  area: string;
}[];

export type NearestProjectsType = {
  name: string;
  projects: {
    name: string;
    id: number;
    startId: number;
    distance: number;
    endId: number;
  }[];
}[];
