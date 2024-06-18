import { RouteObject } from "react-router-dom";
import Empresas from "..";

const empresas: RouteObject[] = [
    {
        path: "/empresas",
        element: <Empresas />
    }
]
export { empresas }