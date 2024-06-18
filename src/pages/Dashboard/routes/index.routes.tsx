import { RouteObject } from "react-router-dom";
import { Dashboard } from "..";
import { homePage } from "../../Home/routes/index.routes";
import { empresas } from "../../Empresas/routes/index.routes";
import { newProject } from "../../NewProjetc/routes/index.routes";
import { contato } from "../../Contato/routes/index.routes";
import { project } from "../../Projetc/routes/index.routes";
import { projectEdit } from "../../ProjectEdit/routes/index.routes";

const dashboard: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      ...homePage,
      ...empresas,
      ...newProject,
      ...contato,
      ...project,
      ...projectEdit,
    ],
  },
];

export { dashboard };
