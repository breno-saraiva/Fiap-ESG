import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listProjectProps } from "../../../../api/listProjects";
import { ProjectForm } from "../NewProjetc/components/Form/ProjectForm";

function ProjectEdit() {
  const { id } = useParams();

  const [project, setProject] = useState<listProjectProps>();
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    fetch(`https://back-atv2-etapa4.vercel.app/projeto/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [id]);

  function editPost(project: listProjectProps) {
    fetch(`https://back-atv2-etapa4.vercel.app/projeto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then(() => {
        setProject(project);
        setShowProjectForm(!showProjectForm);
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <div>
      <div className="flex flex-col p-16 gap-5">
        <div className="flex justify-between">
          <h1 className="mb-4 text-5xl font-sans font-bold">
            <span className="bg-[#222] text-[#22C55E]">Projeto:</span>{" "}
            {project?.nome}
          </h1>
          <button
            className="border-2 rounded-md w-32 bg-[#222] text-white hover:text-[#22C55E]"
            onClick={toggleProjectForm}
          >
            {!showProjectForm ? "Editar projeto" : "fechar"}
          </button>
        </div>
        {!showProjectForm ? (
          <div className="flex gap-12">
            <div className="flex flex-col gap-4 py-5">
              <p>
                <span className="text-2xl font-bold text-[#222]">
                  Tipo de Projeto:
                </span>
                <br />
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.tipo_projeto}
                </span>
              </p>
              <p>
                <span className="text-2xl font-bold text-[#222]">
                  Total de Orçamento:
                </span>
                <br />
                <span className="text-xl font-medium text-[#7a7a7a]">
                  R${project?.orcamento}
                </span>
              </p>
              <p>
                <span className="text-2xl font-bold text-[#222]">Contato:</span>
                <br />
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.contato}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-4 py-5">
              <p>
                <span className="text-2xl font-bold text-[#222]">Duração:</span>
                <br />
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.prev_inic} - {project?.prev_fim}
                </span>
              </p>
              <p>
                <span className="text-2xl font-bold text-[#222]">
                  Descrição:
                </span>
                <br />
                <span className="text-xl font-medium text-[#7a7a7a]">
                  {project?.descricao}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <ProjectForm
              handleOnSubmit={(e) => editPost(e)}
              textBtn="Editar"
              projectData={project}
              defaultCotato={project?.contato}
              defaultDateFinal={project?.prev_fim}
              defaultDateInit={project?.prev_inic}
              defaultDescription={project?.descricao}
              defaultName={project?.nome}
              defaultSelect={project?.tipo_projeto}
              defaultOrcamento={String(project?.orcamento)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectEdit;
