import { RouteObject } from "react-router-dom";
import { Dashboard } from "..";
import { homePage } from "../modules/Home/routes/index.routes";
import { newProject } from "../modules/NewProjetc/routes/index.routes";
import { project } from "../modules/Projetc/routes/index.routes";
import { projectEdit } from "../modules/ProjectEdit/routes/index.routes";

const dashboard: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      ...homePage,
      ...newProject,
      ...project,
      ...projectEdit,
    ],
  },
];

export { dashboard };
