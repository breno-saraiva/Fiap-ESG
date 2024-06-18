import { RouteObject } from "react-router-dom";
import NewProject from "..";

const newProject: RouteObject[] = [
  {
    path: "/newProject/",
    element: <NewProject />,
  },
];

export { newProject };
