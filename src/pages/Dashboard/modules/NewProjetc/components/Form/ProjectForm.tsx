import Select from "../../../../../../shared/ui/select";
import { Input } from "../../../../../../shared/ui/input";
import { SubmitButton } from "../../../../../../shared/ui/button";
import React, { useState } from "react";
import { listProjectProps } from "../../../../../../api/listProjects";
import { listIniciativas } from "../../../../../../shared/mock/listiniciativas";
import { TextArea } from "../../../../../../shared/ui/textArea";

type ProjectFormProps = {
  textBtn?: string;
  defaultName?: string;
  defaultOrcamento?: string;
  defaultSelect?: string;
  defaultCotato?: string;
  defaultDateInit?: string;
  defaultDateFinal?: string;
  defaultDescription?: string;
  projectData?: listProjectProps;
  handleOnSubmit: (e: listProjectProps) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  projectData,
  defaultName,
  defaultOrcamento,
  defaultSelect,
  defaultCotato,
  defaultDateInit,
  defaultDateFinal,
  defaultDescription,
  handleOnSubmit,
}) => {
  const [project, setProject] = useState(projectData || {});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnSubmit(project as listProjectProps);
  };

  function handleNameProject(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, nome: e.target.value });
  }

  function handleOrcamento(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, orcamento: e.target.value });
  }

  function handleTypeProject(e: React.ChangeEvent<HTMLSelectElement>) {
    e.persist();
    setProject({ ...project, tipo_projeto: e.target.value });
  }

  function handleDateInit(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, prev_inic: e.target.value });
  }

  function handleDateFinish(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, prev_fim: e.target.value });
  }

  function handleContato(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, contato: e.target.value });
  }

  function handleDescription(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.persist();
    setProject({ ...project, descricao: e.target.value });
  }

  return (
    <form onSubmit={submit} className="w-full py-8">
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>
            <Input
              OnChange={handleNameProject}
              type="text"
              text="nome do projeto"
              name="name"
              defaultValue={defaultName}
              placeholder="Insira o nome do projeto"
            />
          </div>
          <div>
            <Input
              OnChange={handleOrcamento}
              type="number"
              text="orçamento do projeto"
              name="orçamento"
              defaultValue={defaultOrcamento}
              placeholder="Insira o orçamento total"
            />
          </div>
          <div>
            <Select
              options={listIniciativas}
              text="Tipo de Projeto"
              defaultValue={defaultSelect}
              Onchange={handleTypeProject}
            />
          </div>
          <div className=" mt-7 flex justify-center items-center">
            <SubmitButton type="submit" text={textBtn} />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Input
              type="text"
              text="contato"
              defaultValue={defaultCotato}
              placeholder="exemplo@exemplo.com"
              OnChange={handleContato}
            />
          </div>
          <div className="flex gap-2">
            <Input
              type="date"
              text="Início projeto"
              defaultValue={defaultDateInit}
              OnChange={handleDateInit}
            />
            <Input
              type="date"
              text="Final projeto"
              defaultValue={defaultDateFinal}
              OnChange={handleDateFinish}
            />
          </div>
          <div>
            <TextArea
              title="Descrição do projeto"
              defaultValue={defaultDescription}
              cols={5}
              rows={4}
              OnChange={handleDescription}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export { ProjectForm };
