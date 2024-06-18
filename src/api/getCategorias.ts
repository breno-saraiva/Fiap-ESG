import { getCategoriasApiRes } from "../types";

export const getCategorias = async (): Promise<getCategoriasApiRes[]> => {
  const data = await fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
