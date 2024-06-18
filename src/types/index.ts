export type projectType = {
  id: string;
  nome: string;
  orcamento: string;
  categoria: { name: string; id: string };
};

export type getCategoriasApiRes = {
  id: string;
  name: string;
};

export type removeProjectProps = {
  id: string;
};
