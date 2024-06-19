export type listProjectProps = {
  tipo_projeto : string;
  prev_inic : string;
  prev_fim : string;
  contato : string;
  descricao : string;
  nome : string;
  orcamento : number;
  id?: string;
};

export const getListProject = async (): Promise<listProjectProps[]> => {
  const data = await fetch("https://back-atv2-etapa4.vercel.app/projeto/", {
    method: "GET",
    headers: { "Content-type": "appplication/json" },
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  return data;
};
