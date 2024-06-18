import Select from "../../../../../../shared/ui/select";
import { Input } from "../../../../../../shared/ui/input";
import { SubmitButton } from "../../../../../../shared/ui/button";
import React, { useState } from "react";
import { listProjectProps } from "../../../../../../api/listProjects";
import { listIniciativas } from "../../../../../../shared/mock/listiniciativas";
import { projectType } from "../../../../../../types";
import { TextArea } from "../../../../../../shared/ui/textArea";

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
              OnChange={handleChange}
              type="text"
              text="nome do projeto"
              name="name"
              placeholder="Insira o nome do projeto"
            />
          </div>
          <div>
            <Input
              OnChange={handleChange}
              type="number"
              text="orçamento do projeto"
              name="orçamento"
              placeholder="Insira o orçamento total"
            />
          </div>
          <div>
            <Select options={listIniciativas} text="Tipo de Projeto" />
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
              placeholder="( ) _____-____"
              pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
            />
          </div>
          <div className="flex gap-2">
            <Input type="date" text="Início projeto" />
            <Input type="date" text="Final projeto" />
          </div>
          <div>
            <TextArea title="Descrição do projeto" cols={5} rows={4} />
          </div>
        </div>
      </div>
    </form>
  );
};

export { ProjectForm };
