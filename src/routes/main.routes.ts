import { createBrowserRouter } from "react-router-dom";
import { dashboard } from "../pages/Dashboard/routes/index.routes";

const router = createBrowserRouter([...dashboard]);

export { router };
