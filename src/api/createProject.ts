import { listProjectProps } from "./listProjects";

export const createProject = async (project: listProjectProps) => {
  await fetch("https://back-atv2-etapa4.vercel.app/projeto", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
