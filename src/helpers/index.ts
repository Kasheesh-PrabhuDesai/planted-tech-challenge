import { CustomerType, ProjectType } from "../utils";

export const distanceBetweenTwoPoints = (
  lat1: number,
  lat2: number,
  lon1: number,
  lon2: number
) => {
  // first convert longitude and latitude to radians for easier calculation
  lon1 = (lon1 * Math.PI) / 180;
  lon2 = (lon2 * Math.PI) / 180;
  lat1 = (lat1 * Math.PI) / 180;
  lat2 = (lat2 * Math.PI) / 180;

  // Haversine formula
  const distanceLongitude = lon2 - lon1;
  const distanceLatitude = lat2 - lat1;
  let a =
    Math.pow(Math.sin(distanceLatitude / 2), 2) +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.pow(Math.sin(distanceLongitude / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  //calculate and return the distance in kms or miles
  return c * r;
};

export const threeClosestProjects = (
  distanceArray: Array<{
    name: string;
    distance: number;
    id: number;
    startId: number;
    endId: number;
  }>
) => {
  distanceArray.sort((a, b) => a.distance - b.distance);
  /*Considering that there are a lot of duplicate project names in the plantationProjects.json
  and we wish to display only unique project names.*/
  const uniqueArray = [];
  const map = new Map();
  for (const item of distanceArray) {
    if (!map.has(item.name)) {
      map.set(item.name, true);
      uniqueArray.push(item);
    }
  }
  const threeSmallest = [uniqueArray[0], uniqueArray[1], uniqueArray[2]];
  return threeSmallest;
};

export const calculateProjectDistances = (
  customers: CustomerType,
  projects: ProjectType
) => {
  const smallest = customers.map(customer => {
    const distanceArray = projects.map(project => ({
      name: project.projectName,
      id: project.id,
      startId: project.startId,
      endId: project.endId,
      distance: distanceBetweenTwoPoints(
        customer.latitude,
        parseInt(project.latitude),
        customer.longitude,
        parseInt(project.longitude)
      ),
    }));
    const smallest = threeClosestProjects(distanceArray);
    return {
      name: customer.name,
      projects: smallest,
    };
  });
  return smallest;
};
