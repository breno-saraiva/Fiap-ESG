import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import React, { useState } from "react";
import { listProjectProps } from "../../../../../api/listProjects";
import { listIniciativas } from "../../../../../shared/mock/listiniciativas";
import { projectType } from "../../../../../types";

type ProjectFormProps = {
  textBtn?: string;
  projectData?: projectType;
  handleOnSubmit: (e: listProjectProps) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  projectData,
  handleOnSubmit,
}) => {
  const [project, setProject] = useState(projectData || {});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnSubmit(project as listProjectProps);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className="w-full py-8">
      <div className="flex gap-8">
        <div className="flex flex-col">
          <div>
            <Input
              handleOnChange={handleChange}
              type="text"
              text="nome do projeto"
              name="name"
              placeholder="Insira o nome do projeto"
            />
          </div>
          <div>
            <Input
              handleOnChange={handleChange}
              type="number"
              text="orçamento do projeto"
              name="orçamento"
              placeholder="Insira o orçamento total"
            />
          </div>
          <div>
            <Select options={listIniciativas} text="Tipo de Projeto" />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <Input type="text" text="contato" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SubmitButton type="submit" text={textBtn} />
      </div>
    </form>
  );
};

export { ProjectForm };
