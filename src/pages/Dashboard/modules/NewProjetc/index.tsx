import { ProjectForm } from "./Form/ProjectForm";
import { createProject } from "../../../../api/createProject";
import { listProjectProps } from "../../../../api/listProjects";

export type projectProps = {
  cost?: number;
  service?: string[];
};

function NewProject() {
  async function handleSubmit(data: listProjectProps) {
    await createProject(data);
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center my-0 mx-auto p-6 md:p-12">
      <h1 className="mb-4 text-3xl md:text-5xl font-sans font-bold text-center">
        Criar Projeto
      </h1>
      <p className="text-[#7b7b7b] text-sm md:text-base text-center mb-4 md:mb-6">
        Crie seu projeto para depois adicionar os serviços.
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-lg">
          <ProjectForm handleOnSubmit={(e) => handleSubmit(e)} textBtn="Salvar" />
        </div>
      </div>
    </div>
  );
}

export default NewProject;
