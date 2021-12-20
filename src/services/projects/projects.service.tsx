import { getFirestore, collection, getDocs } from "firebase/firestore";
import { ProjectModel } from "../../models";
import firebaseApp, { parseData } from "../firebase.service";
import { PROJECTS_COLLECTION_NAME } from "./projects-service.types";

const db = getFirestore(firebaseApp);

const projectsCollection = collection(db, PROJECTS_COLLECTION_NAME);

export const fetchProjects = async () =>
  getDocs(projectsCollection).then((data) => parseData<ProjectModel>(data));
