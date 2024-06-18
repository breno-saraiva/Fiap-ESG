import { RouteObject } from "react-router-dom";
import ProjectEdit from "..";

const projectEdit: RouteObject[] = [
  {
    path: "/projectEdit/:id",
    element: <ProjectEdit />,
  },
];

export { projectEdit };
