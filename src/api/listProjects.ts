export type listProjectProps = {
  id: string;
  name: string;
  orçamento: string;
  categories: { name: string; id: string };
};

export const getListProject = async (): Promise<listProjectProps[]> => {
  const data = await fetch("http://localhost:5000/projects", {
    method: "GET",
    headers: { "Content-type": "appplication/json" },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
