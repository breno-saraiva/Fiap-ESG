import { removeProjectProps } from "../types";

export const removeProject = async (id: removeProjectProps) => {
  await fetch(`http://localhost:5000/projects${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
